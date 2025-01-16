/*
  Warnings:

  - The `talla` column on the `Productos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `descripcion` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imagenA` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imagenB` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imagenC` on table `Productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `Productos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Productos" ALTER COLUMN "descripcion" SET NOT NULL,
ALTER COLUMN "imagenA" SET NOT NULL,
ALTER COLUMN "imagenB" SET NOT NULL,
ALTER COLUMN "imagenC" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL,
DROP COLUMN "talla",
ADD COLUMN     "talla" TEXT[];
