/*
  Warnings:

  - You are about to drop the column `category` on the `MenuItems` table. All the data in the column will be lost.
  - You are about to drop the column `ingredients` on the `MenuItems` table. All the data in the column will be lost.
  - Added the required column `itemCategory` to the `MenuItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemIngredients` to the `MenuItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuItems" DROP COLUMN "category",
DROP COLUMN "ingredients",
ADD COLUMN     "itemCategory" TEXT NOT NULL,
ADD COLUMN     "itemIngredients" TEXT NOT NULL;
