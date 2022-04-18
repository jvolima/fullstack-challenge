-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
