/*
  Warnings:

  - Added the required column `category` to the `MenuItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `MenuItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuItems" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "itemthumbnail" TEXT NOT NULL DEFAULT '/DummyDishImage.jpg';

-- CreateTable
CREATE TABLE "ItemImages" (
    "imageId" SERIAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "menuItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemImages_pkey" PRIMARY KEY ("imageId")
);

-- AddForeignKey
ALTER TABLE "ItemImages" ADD CONSTRAINT "ItemImages_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItems"("itemId") ON DELETE RESTRICT ON UPDATE CASCADE;
