-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "version" INTEGER NOT NULL,
    "institutionId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoursePeriod" (
    "id" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CoursePeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyObject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "subjectId" TEXT NOT NULL,

    CONSTRAINT "StudyObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CoursePeriodToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CoursePeriod_courseId_position_key" ON "CoursePeriod"("courseId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "StudyObject_subjectId_position_key" ON "StudyObject"("subjectId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "_CoursePeriodToSubject_AB_unique" ON "_CoursePeriodToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursePeriodToSubject_B_index" ON "_CoursePeriodToSubject"("B");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoursePeriod" ADD CONSTRAINT "CoursePeriod_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudyObject" ADD CONSTRAINT "StudyObject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoursePeriodToSubject" ADD CONSTRAINT "_CoursePeriodToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "CoursePeriod"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CoursePeriodToSubject" ADD CONSTRAINT "_CoursePeriodToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
