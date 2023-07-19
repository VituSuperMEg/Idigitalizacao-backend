-- CreateTable
CREATE TABLE "orgao" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "expediente" TEXT NOT NULL,
    "cod_orgao" TEXT NOT NULL,
    "unidadeId" INTEGER NOT NULL,

    CONSTRAINT "orgao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orgao_descricao_key" ON "orgao"("descricao");

-- AddForeignKey
ALTER TABLE "orgao" ADD CONSTRAINT "orgao_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidade_orcamentaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
