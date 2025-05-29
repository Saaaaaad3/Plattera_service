/*
  Warnings:

  - You are about to drop the column `itemCategory` on the `MenuItems` table. All the data in the column will be lost.
  - You are about to drop the column `itemIsJain` on the `MenuItems` table. All the data in the column will be lost.
  - You are about to drop the column `itemSweetLevel` on the `MenuItems` table. All the data in the column will be lost.
  - Added the required column `itemCategoryId` to the `MenuItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemImages" DROP CONSTRAINT "ItemImages_menuItemId_fkey";

-- AlterTable
ALTER TABLE "MenuItems" DROP COLUMN "itemCategory",
DROP COLUMN "itemIsJain",
DROP COLUMN "itemSweetLevel",
ADD COLUMN     "itemCategoryId" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "ItemImages_menuItemId_idx" ON "ItemImages"("menuItemId");
