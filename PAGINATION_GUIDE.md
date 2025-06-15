# Menu Items Pagination Guide

This guide explains how to use the new cursor-based pagination system for menu items that supports infinite scroll and category-based loading.

## Overview

The pagination system uses **cursor-based pagination** instead of traditional page numbers. This approach is much better for infinite scroll because:

- ✅ No duplicate or missing items when new items are added
- ✅ Consistent performance regardless of page number
- ✅ Works perfectly with real-time data
- ✅ Better for mobile apps with infinite scroll

## API Endpoints

### 1. Get Paginated Menu Items (All Categories)

**Endpoint:** `GET /menu-items/paginated/:restId`

**Query Parameters:**

- `limit` (optional): Number of items per request (1-50, default: 10)
- `cursor` (optional): Cursor for pagination (itemId from previous response)
- `categorySlug` (optional): Filter by specific category
- `includeImages` (optional): Include item images in response (default: false)

**Example Request:**

```bash
GET /menu-items/paginated/123?limit=10&includeImages=true
```

**Example Response:**

```json
{
  "items": [
    {
      "itemId": 1,
      "itemName": "Margherita Pizza",
      "itemPrice": "12.99",
      "categorySlug": "pizzas",
      "categoryDisplayName": "Pizzas",
      "restaurant": {
        "name": "Pizza Palace",
        "address": "123 Main St"
      }
    }
  ],
  "nextCursor": "10",
  "hasMore": true,
  "totalCount": 45,
  "categoryInfo": {
    "categorySlug": "pizzas",
    "displayName": "Pizzas",
    "totalItems": 15
  }
}
```

### 2. Get Category-Specific Menu Items

**Endpoint:** `GET /menu-items/category/:restId/:categorySlug`

**Query Parameters:**

- `limit` (required): Number of items per request (1-50, default: 10)
- `cursor` (optional): Cursor for pagination
- `includeImages` (optional): Include item images in response

**Example Request:**

```bash
GET /menu-items/category/123/pizzas?limit=10&cursor=5
```

**Example Response:**

```json
{
  "categorySlug": "pizzas",
  "displayName": "Pizzas",
  "items": [...],
  "nextCursor": "15",
  "hasMore": false,
  "totalItems": 12
}
```

### 3. Get Restaurant Categories

**Endpoint:** `GET /menu-items/categories/:restId`

**Example Response:**

```json
[
  {
    "categoryId": 1,
    "categorySlug": "appetizers",
    "displayName": "Appetizers",
    "displayOrder": 1,
    "itemCount": 8
  },
  {
    "categoryId": 2,
    "categorySlug": "pizzas",
    "displayName": "Pizzas",
    "displayOrder": 2,
    "itemCount": 15
  }
]
```

### 4. Get Category Summary

**Endpoint:** `GET /menu-items/category-summary/:restId`

**Example Response:**

```json
[
  {
    "categorySlug": "appetizers",
    "displayName": "Appetizers",
    "displayOrder": 1,
    "itemCount": 8
  }
]
```

## Frontend Implementation Examples

### React/JavaScript Example

```javascript
class MenuService {
  constructor(restId) {
    this.restId = restId;
    this.categories = new Map(); // Store category data
    this.cursors = new Map(); // Store cursors for each category
  }

  // Load initial categories
  async loadCategories() {
    const response = await fetch(`/menu-items/categories/${this.restId}`);
    const categories = await response.json();

    categories.forEach((category) => {
      this.categories.set(category.categorySlug, {
        ...category,
        items: [],
        hasMore: true,
      });
      this.cursors.set(category.categorySlug, null);
    });

    return categories;
  }

  // Load more items for a specific category
  async loadMoreItems(categorySlug, limit = 10) {
    const cursor = this.cursors.get(categorySlug);
    const params = new URLSearchParams({
      limit: limit.toString(),
      includeImages: 'true',
    });

    if (cursor) {
      params.append('cursor', cursor);
    }

    const response = await fetch(
      `/menu-items/category/${this.restId}/${categorySlug}?${params}`,
    );
    const data = await response.json();

    // Update category data
    const category = this.categories.get(categorySlug);
    category.items.push(...data.items);
    category.hasMore = data.hasMore;
    this.cursors.set(categorySlug, data.nextCursor);

    return data;
  }

  // Load all items (across categories)
  async loadAllItems(limit = 10, categorySlug = null) {
    const params = new URLSearchParams({
      limit: limit.toString(),
      includeImages: 'true',
    });

    if (categorySlug) {
      params.append('categorySlug', categorySlug);
    }

    const response = await fetch(
      `/menu-items/paginated/${this.restId}?${params}`,
    );
    return await response.json();
  }
}
```

### React Component Example

```jsx
import React, { useState, useEffect, useRef } from 'react';

const MenuInfiniteScroll = ({ restId }) => {
  const [categories, setCategories] = useState(new Map());
  const [loading, setLoading] = useState(false);
  const menuService = useRef(new MenuService(restId));

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const categoryList = await menuService.current.loadCategories();
    setCategories(new Map(categoryList.map((cat) => [cat.categorySlug, cat])));
  };

  const loadMoreItems = async (categorySlug) => {
    if (loading) return;

    setLoading(true);
    try {
      const data = await menuService.current.loadMoreItems(categorySlug, 10);
      setCategories(
        (prev) =>
          new Map(
            prev.set(categorySlug, {
              ...prev.get(categorySlug),
              items: [...prev.get(categorySlug).items, ...data.items],
              hasMore: data.hasMore,
            }),
          ),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="menu-container">
      {Array.from(categories.values()).map((category) => (
        <div key={category.categorySlug} className="category-section">
          <h2>
            {category.displayName} ({category.itemCount})
          </h2>

          <div className="items-grid">
            {category.items.map((item) => (
              <div key={item.itemId} className="menu-item">
                <h3>{item.itemName}</h3>
                <p>${item.itemPrice}</p>
                <p>{item.itemDescription}</p>
              </div>
            ))}
          </div>

          {category.hasMore && (
            <button
              onClick={() => loadMoreItems(category.categorySlug)}
              disabled={loading}
              className="load-more-btn"
            >
              {loading ? 'Loading...' : `Load More ${category.displayName}`}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
```

## Best Practices

### 1. Cursor Management

- Always store the `nextCursor` from the response
- Pass the cursor in subsequent requests to get the next page
- Don't modify or generate cursors manually

### 2. Error Handling

```javascript
try {
  const data = await loadMoreItems(categorySlug);
  // Handle success
} catch (error) {
  if (error.status === 404) {
    // Category not found
  } else if (error.status === 429) {
    // Rate limited - implement retry logic
  }
}
```

### 3. Performance Optimization

- Use `includeImages: false` when images aren't needed
- Implement proper loading states
- Consider caching category summaries
- Use appropriate `limit` values (10-20 for mobile, 20-50 for desktop)

### 4. Infinite Scroll Implementation

```javascript
// Intersection Observer for infinite scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && category.hasMore && !loading) {
        loadMoreItems(categorySlug);
      }
    });
  },
  { threshold: 0.1 },
);

// Observe the "load more" button or last item
observer.observe(loadMoreButton);
```

## Migration from Old Endpoints

If you're currently using the old `GetMenuItemsByRestId/:id` endpoint:

1. **Replace with paginated endpoint:**

   ```javascript
   // Old
   GET /menu-items/GetMenuItemsByRestId/123

   // New
   GET /menu-items/paginated/123?limit=50
   ```

2. **For category-specific loading:**

   ```javascript
   // New category-specific endpoint
   GET /menu-items/category/123/pizzas?limit=10
   ```

3. **For initial category discovery:**
   ```javascript
   // Get all categories first
   GET / menu - items / categories / 123;
   ```

## Rate Limiting

- Public endpoints: 60-120 requests per minute
- Authenticated endpoints: 30-60 requests per minute
- Implement exponential backoff for retries

This pagination system provides a scalable solution for restaurants with varying menu sizes while maintaining excellent user experience with infinite scroll functionality.
