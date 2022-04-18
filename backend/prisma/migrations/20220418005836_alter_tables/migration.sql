/*
  Warnings:

  - You are about to drop the column `eventId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `launchId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Launch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_launchId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "eventId",
DROP COLUMN "launchId";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Launch";
