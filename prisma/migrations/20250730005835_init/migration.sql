-- CreateEnum
CREATE TYPE "public"."SubjectStatus" AS ENUM ('pending', 'approved', 'rejected');

-- CreateTable
CREATE TABLE "public"."Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER NOT NULL,
    "institutionId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CoursePeriod" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CoursePeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "coursePeriodToCreate" TEXT,
    "status" "public"."SubjectStatus" NOT NULL DEFAULT 'approved',

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StudyObject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "StudyObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_CoursePeriodToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CoursePeriodToSubject_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoursePeriod_courseId_position_key" ON "public"."CoursePeriod"("courseId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "StudyObject_subjectId_position_key" ON "public"."StudyObject"("subjectId", "position");

-- CreateIndex
CREATE INDEX "_CoursePeriodToSubject_B_index" ON "public"."_CoursePeriodToSubject"("B");

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "public"."Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CoursePeriod" ADD CONSTRAINT "CoursePeriod_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StudyObject" ADD CONSTRAINT "StudyObject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "public"."Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CoursePeriodToSubject" ADD CONSTRAINT "_CoursePeriodToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."CoursePeriod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_CoursePeriodToSubject" ADD CONSTRAINT "_CoursePeriodToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
