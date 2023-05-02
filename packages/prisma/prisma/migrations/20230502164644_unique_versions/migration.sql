/*
  Warnings:

  - A unique constraint covering the columns `[name,projectId]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,serviceId]` on the table `ServiceVersion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,environmentId]` on the table `Version` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Service_name_projectId_key" ON "Service"("name", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceVersion_name_serviceId_key" ON "ServiceVersion"("name", "serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "Version_name_environmentId_key" ON "Version"("name", "environmentId");
