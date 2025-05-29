/*
  Warnings:

  - You are about to drop the column `itemCategoryId` on the `MenuItems` table. All the data in the column will be lost.
  - Added the required column `itemCategory` to the `MenuItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuItems" DROP COLUMN "itemCategoryId",
ADD COLUMN     "itemCategory" TEXT NOT NULL,
ADD COLUMN     "itemIsJain" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "itemSweetLevel" INTEGER NOT NULL DEFAULT 0;
