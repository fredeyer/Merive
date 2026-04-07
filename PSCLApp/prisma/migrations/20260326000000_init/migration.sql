-- CreateTable
CREATE TABLE "Registration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationYear" INTEGER NOT NULL,
    "formationTrack" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "age" INTEGER NOT NULL,
    "motherFirstName" TEXT NOT NULL,
    "motherLastName" TEXT NOT NULL,
    "fatherFirstName" TEXT NOT NULL,
    "fatherLastName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "fatherPhone" TEXT NOT NULL,
    "motherPhone" TEXT NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "birthCertificateProvided" BOOLEAN NOT NULL,
    "catechesisHistory" TEXT NOT NULL,
    "catechesisHistoryOther" TEXT,
    "signature" TEXT,
    "signatureDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

CREATE TABLE "SacramentStatus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "baptism" BOOLEAN NOT NULL DEFAULT false,
    "firstPardon" BOOLEAN NOT NULL DEFAULT false,
    "firstCommunion" BOOLEAN NOT NULL DEFAULT false,
    "professionOfFaith" BOOLEAN NOT NULL DEFAULT false,
    "confirmation" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "SacramentStatus_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "GodparentInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "godfatherFirstName" TEXT,
    "godfatherLastName" TEXT,
    "godfatherCertificateProvided" BOOLEAN NOT NULL DEFAULT false,
    "godmotherFirstName" TEXT,
    "godmotherLastName" TEXT,
    "godmotherCertificateProvided" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "GodparentInfo_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "BaptismInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "baptismDate" DATETIME,
    "baptismCertificateProvided" BOOLEAN NOT NULL DEFAULT false,
    "baptismParishName" TEXT,
    "baptismParishAddress" TEXT,
    "baptismParishEmail" TEXT,
    CONSTRAINT "BaptismInfo_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "PaymentInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "registrationFee" REAL NOT NULL,
    "trainingFee" REAL NOT NULL DEFAULT 0,
    "paymentMethod" TEXT NOT NULL,
    "chequeNumber" TEXT,
    "paidAt" DATETIME,
    CONSTRAINT "PaymentInfo_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "AdminScheduleInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "registrationId" INTEGER NOT NULL,
    "baptismDate" DATETIME,
    "baptismTime" TEXT,
    "celebrant" TEXT,
    "trainingDate" DATETIME,
    "trainingTime" TEXT,
    "presentationDate" DATETIME,
    "presentationTime" TEXT,
    CONSTRAINT "AdminScheduleInfo_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "Registration" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "SacramentStatus_registrationId_key" ON "SacramentStatus"("registrationId");
CREATE UNIQUE INDEX "GodparentInfo_registrationId_key" ON "GodparentInfo"("registrationId");
CREATE UNIQUE INDEX "BaptismInfo_registrationId_key" ON "BaptismInfo"("registrationId");
CREATE UNIQUE INDEX "PaymentInfo_registrationId_key" ON "PaymentInfo"("registrationId");
CREATE UNIQUE INDEX "AdminScheduleInfo_registrationId_key" ON "AdminScheduleInfo"("registrationId");
CREATE INDEX "Registration_lastName_firstName_idx" ON "Registration"("lastName", "firstName");
CREATE INDEX "Registration_registrationYear_idx" ON "Registration"("registrationYear");
