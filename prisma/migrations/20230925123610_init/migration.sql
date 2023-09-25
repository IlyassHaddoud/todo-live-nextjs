/*
  Warnings:

  - Added the required column `checked` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` ADD COLUMN `checked` BOOLEAN NOT NULL;
