import { Router} from "express";
import { createUser } from "../Controller/User/createUser";
import { listUser } from "../Controller/User/listUser";
import { updateUser } from "../Controller/User/updateUser";
import { deleteUser } from "../Controller/User/deleteUser";
import { createDocumento } from "../Controller/TipoDocumentos/createDocumento";
import { listDocumento } from "../Controller/TipoDocumentos/listDocumento";
import { createUnidade } from "../Controller/UnidadeOrcamentaria/createUnidadeOrcamentaria";
import { listUnidade } from "../Controller/UnidadeOrcamentaria/listUnidadeOrcamentaria";
import { createOrgao } from "../Controller/Orgao/createOrgao";
import { getOrgaoWithUnidade } from "../Controller/Orgao/OrgaoWithUnidade";
import { deleteDocumento } from "../Controller/TipoDocumentos/deleteDocumento";
import { Auth } from "../Controller/Auth/Auth";
import { isLogin } from "../middleware/isLogin";

export const router = Router();


// Login
router.post('/login', Auth);
// Rota Users
router.post('/user', createUser);
router.get('/user', listUser);
router.put('/user/:email', updateUser);
router.delete('/user/:id', deleteUser);
// Unidade Orçanamentaria
router.post('/unidade-orcanamentaria', createUnidade);
router.get('/unidade-orcanamentaria', listUnidade);
// Rota Documento
router.post('/documento', createDocumento);
router.get('/documento', listDocumento);
router.delete('/documento/:id', deleteDocumento)
// Rota Orgao
router.post('/orgao', createOrgao);
router.get('/orgao-unidade/:orgaoId', getOrgaoWithUnidade);