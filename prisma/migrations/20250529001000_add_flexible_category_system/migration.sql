-- Create backup of current data
CREATE TABLE menu_items_backup AS SELECT * FROM "MenuItems";

-- Create new tables
CREATE TABLE "GlobalCategories" (
    "globalCategoryId" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GlobalCategories_pkey" PRIMARY KEY ("globalCategoryId")
);

CREATE TABLE "RestaurantCategories" (
    "categoryId" SERIAL NOT NULL,
    "restId" INTEGER NOT NULL,
    "categorySlug" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "globalCategoryId" INTEGER,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RestaurantCategories_pkey" PRIMARY KEY ("categoryId")
);

-- Create indexes
CREATE UNIQUE INDEX "GlobalCategories_code_key" ON "GlobalCategories"("code");
CREATE INDEX "GlobalCategories_code_idx" ON "GlobalCategories"("code");
CREATE UNIQUE INDEX "RestaurantCategories_restId_categorySlug_key" ON "RestaurantCategories"("restId", "categorySlug");
CREATE INDEX "RestaurantCategories_restId_categorySlug_idx" ON "RestaurantCategories"("restId", "categorySlug");
CREATE INDEX "RestaurantCategories_globalCategoryId_idx" ON "RestaurantCategories"("globalCategoryId");

-- Insert default global categories with explicit timestamps
INSERT INTO "GlobalCategories" ("code", "name", "description", "createdAt", "updatedAt") VALUES
('main_course', 'Main Course', 'Main dishes and entrees', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('appetizers', 'Appetizers', 'Starters and small plates', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('desserts', 'Desserts', 'Sweet treats and desserts', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('beverages', 'Beverages', 'Drinks and beverages', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Create default restaurant categories for each unique restId
INSERT INTO "RestaurantCategories" ("restId", "categorySlug", "displayName", "globalCategoryId", "displayOrder", "createdAt", "updatedAt")
SELECT DISTINCT 
    m."restId",
    'main-course',
    'Main Course',
    (SELECT "globalCategoryId" FROM "GlobalCategories" WHERE "code" = 'main_course'),
    1,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM "MenuItems" m;

-- First rename the existing column
ALTER TABLE "MenuItems" RENAME COLUMN "itemCategoryId" TO "restaurantCategoryId";

-- Add new columns to MenuItems
ALTER TABLE "MenuItems" 
    ADD COLUMN "categorySlug" TEXT,
    ADD COLUMN "globalCategoryId" INTEGER,
    ADD COLUMN "categoryDisplayName" TEXT;

-- Update MenuItems with default category data
UPDATE "MenuItems" m
SET 
    "categorySlug" = 'main-course',
    "globalCategoryId" = (SELECT "globalCategoryId" FROM "GlobalCategories" WHERE "code" = 'main_course'),
    "categoryDisplayName" = 'Main Course',
    "restaurantCategoryId" = (
        SELECT rc."categoryId" 
        FROM "RestaurantCategories" rc 
        WHERE rc."restId" = m."restId" 
        AND rc."categorySlug" = 'main-course'
    );

-- Make new columns required
ALTER TABLE "MenuItems" 
    ALTER COLUMN "categorySlug" SET NOT NULL,
    ALTER COLUMN "categoryDisplayName" SET NOT NULL;

-- Add foreign key constraints
ALTER TABLE "RestaurantCategories" 
    ADD CONSTRAINT "RestaurantCategories_globalCategoryId_fkey" 
    FOREIGN KEY ("globalCategoryId") 
    REFERENCES "GlobalCategories"("globalCategoryId") 
    ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "MenuItems" 
    ADD CONSTRAINT "MenuItems_restaurantCategoryId_fkey" 
    FOREIGN KEY ("restaurantCategoryId") 
    REFERENCES "RestaurantCategories"("categoryId") 
    ON DELETE RESTRICT ON UPDATE CASCADE;

-- Add indexes to MenuItems
CREATE INDEX "MenuItems_restId_idx" ON "MenuItems"("restId");
CREATE INDEX "MenuItems_restaurantCategoryId_idx" ON "MenuItems"("restaurantCategoryId");
CREATE INDEX "MenuItems_categorySlug_idx" ON "MenuItems"("categorySlug");
CREATE INDEX "MenuItems_globalCategoryId_idx" ON "MenuItems"("globalCategoryId"); 