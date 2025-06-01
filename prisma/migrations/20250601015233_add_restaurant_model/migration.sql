-- CreateTable
CREATE TABLE "Restaurant" (
    "restId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restId")
);

-- CreateIndex
CREATE INDEX "Restaurant_userId_idx" ON "Restaurant"("userId");

-- AddForeignKey
ALTER TABLE "RestaurantCategories" ADD CONSTRAINT "RestaurantCategories_restId_fkey" FOREIGN KEY ("restId") REFERENCES "Restaurant"("restId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItems" ADD CONSTRAINT "MenuItems_restId_fkey" FOREIGN KEY ("restId") REFERENCES "Restaurant"("restId") ON DELETE RESTRICT ON UPDATE CASCADE;
