-- CreateEnum
CREATE TYPE "SubjectStatus" AS ENUM ('pending', 'approved', 'rejected');

-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "coursePeriodToCreate" TEXT,
ADD COLUMN     "status" "SubjectStatus" NOT NULL DEFAULT 'approved';
