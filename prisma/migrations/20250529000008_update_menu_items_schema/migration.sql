-- First, create a temporary column for category ID
ALTER TABLE "MenuItems" ADD COLUMN "itemCategoryId" INTEGER;

-- Set a default value for existing records (you can change this default value)
UPDATE "MenuItems" SET "itemCategoryId" = 1;

-- Make the column required
ALTER TABLE "MenuItems" ALTER COLUMN "itemCategoryId" SET NOT NULL;

-- Drop the columns we want to remove
ALTER TABLE "MenuItems" DROP COLUMN "itemSweetLevel";
ALTER TABLE "MenuItems" DROP COLUMN "itemIsJain";
ALTER TABLE "MenuItems" DROP COLUMN "itemCategory";