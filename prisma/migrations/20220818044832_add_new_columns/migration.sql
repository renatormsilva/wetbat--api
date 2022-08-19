/*
  Warnings:

  - Added the required column `departDate` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destination` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `people` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDate` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transportation` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "departDate" TEXT NOT NULL,
ADD COLUMN     "destination" TEXT NOT NULL,
ADD COLUMN     "from" TEXT NOT NULL,
ADD COLUMN     "people" INTEGER NOT NULL,
ADD COLUMN     "returnDate" TEXT NOT NULL,
ADD COLUMN     "transportation" TEXT NOT NULL;
