/*
  Warnings:

  - You are about to drop the `menu_items_backup` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "GlobalCategories" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "RestaurantCategories" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- DropTable
DROP TABLE "menu_items_backup";

-- AddForeignKey
ALTER TABLE "ItemImages" ADD CONSTRAINT "ItemImages_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItems"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
