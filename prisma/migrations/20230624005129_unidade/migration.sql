-- CreateTable
CREATE TABLE "unidade_orcamentaria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "unidade_orcamentaria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unidade_orcamentaria_descricao_key" ON "unidade_orcamentaria"("descricao");
