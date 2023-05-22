/*
  Warnings:

  - A unique constraint covering the columns `[name,projectId]` on the table `Environment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Environment_name_projectId_key" ON "Environment"("name", "projectId");
