-- CreateTable
CREATE TABLE "MenuItems" (
    "itemId" SERIAL NOT NULL,
    "itemName" TEXT NOT NULL,
    "restId" INTEGER NOT NULL,
    "itemPrice" DECIMAL(65,30) NOT NULL,
    "itemDescription" TEXT NOT NULL,
    "itemSweet" BOOLEAN NOT NULL DEFAULT false,
    "itemSpicy" BOOLEAN NOT NULL DEFAULT false,
    "itemSweetLevel" INTEGER NOT NULL DEFAULT 0,
    "itemSpiceLevel" INTEGER NOT NULL DEFAULT 0,
    "itemAvailable" BOOLEAN NOT NULL DEFAULT true,
    "itemBestSeller" BOOLEAN NOT NULL DEFAULT false,
    "itemIsVeg" BOOLEAN NOT NULL DEFAULT false,
    "itemIsJain" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MenuItems_pkey" PRIMARY KEY ("itemId")
);

-- CreateIndex
CREATE UNIQUE INDEX "MenuItems_itemName_key" ON "MenuItems"("itemName");
