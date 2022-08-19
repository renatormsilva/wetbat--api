/*
  Warnings:

  - Changed the type of `people` on the `Quote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "people",
ADD COLUMN     "people" INTEGER NOT NULL;
