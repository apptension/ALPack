/*
  Warnings:

  - Added the required column `versionId` to the `ServiceVersion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceVersion" ADD COLUMN     "isCurrent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "versionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Version" ADD COLUMN     "isCurrent" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "ServiceVersion" ADD CONSTRAINT "ServiceVersion_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "Version"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
