/*
  Warnings:

  - Changed the type of `cod_orgao` on the `orgao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "orgao" DROP COLUMN "cod_orgao",
ADD COLUMN     "cod_orgao" INTEGER NOT NULL;
