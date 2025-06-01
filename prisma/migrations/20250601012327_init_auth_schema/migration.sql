-- CreateTable
CREATE TABLE "GlobalCategories" (
    "globalCategoryId" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlobalCategories_pkey" PRIMARY KEY ("globalCategoryId")
);

-- CreateTable
CREATE TABLE "RestaurantCategories" (
    "categoryId" SERIAL NOT NULL,
    "restId" INTEGER NOT NULL,
    "categorySlug" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "globalCategoryId" INTEGER,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RestaurantCategories_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "MenuItems" (
    "itemId" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "restId" INTEGER NOT NULL,
    "itemPrice" DECIMAL(10,2) NOT NULL,
    "itemDescription" TEXT NOT NULL,
    "itemSweet" BOOLEAN NOT NULL DEFAULT false,
    "itemSpicy" BOOLEAN NOT NULL DEFAULT false,
    "itemSpiceLevel" INTEGER NOT NULL DEFAULT 0,
    "itemAvailable" BOOLEAN NOT NULL DEFAULT true,
    "itemBestSeller" BOOLEAN NOT NULL DEFAULT false,
    "itemIsVeg" BOOLEAN NOT NULL DEFAULT false,
    "itemthumbnail" TEXT NOT NULL DEFAULT '/DummyDishImage.jpg',
    "itemIngredients" TEXT NOT NULL,
    "restaurantCategoryId" INTEGER NOT NULL,
    "categorySlug" TEXT NOT NULL,
    "globalCategoryId" INTEGER,
    "categoryDisplayName" TEXT NOT NULL,

    CONSTRAINT "MenuItems_pkey" PRIMARY KEY ("itemId")
);

-- CreateTable
CREATE TABLE "ItemImages" (
    "imageId" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "menuItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemImages_pkey" PRIMARY KEY ("imageId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userMobile" TEXT NOT NULL,
    "isRestOwner" BOOLEAN NOT NULL DEFAULT false,
    "userLocation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlobalCategories_code_key" ON "GlobalCategories"("code");

-- CreateIndex
CREATE INDEX "GlobalCategories_code_idx" ON "GlobalCategories"("code");

-- CreateIndex
CREATE INDEX "RestaurantCategories_restId_categorySlug_idx" ON "RestaurantCategories"("restId", "categorySlug");

-- CreateIndex
CREATE INDEX "RestaurantCategories_globalCategoryId_idx" ON "RestaurantCategories"("globalCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantCategories_restId_categorySlug_key" ON "RestaurantCategories"("restId", "categorySlug");

-- CreateIndex
CREATE UNIQUE INDEX "MenuItems_itemName_key" ON "MenuItems"("itemName");

-- CreateIndex
CREATE INDEX "MenuItems_restId_idx" ON "MenuItems"("restId");

-- CreateIndex
CREATE INDEX "MenuItems_restaurantCategoryId_idx" ON "MenuItems"("restaurantCategoryId");

-- CreateIndex
CREATE INDEX "MenuItems_categorySlug_idx" ON "MenuItems"("categorySlug");

-- CreateIndex
CREATE INDEX "MenuItems_globalCategoryId_idx" ON "MenuItems"("globalCategoryId");

-- CreateIndex
CREATE INDEX "ItemImages_menuItemId_idx" ON "ItemImages"("menuItemId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userMobile_key" ON "User"("userMobile");

-- CreateIndex
CREATE INDEX "User_userMobile_idx" ON "User"("userMobile");

-- AddForeignKey
ALTER TABLE "RestaurantCategories" ADD CONSTRAINT "RestaurantCategories_globalCategoryId_fkey" FOREIGN KEY ("globalCategoryId") REFERENCES "GlobalCategories"("globalCategoryId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_restaurantCategoryId_fkey" FOREIGN KEY ("restaurantCategoryId") REFERENCES "RestaurantCategories"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemImages" ADD CONSTRAINT "ItemImages_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItems"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
