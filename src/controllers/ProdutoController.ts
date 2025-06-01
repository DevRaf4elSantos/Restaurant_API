import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";

const produtoService = new ProdutoService()

export class ProdutoController {
    consultarProduto = async (req : Request, res : Response) => {
        const retorno = await produtoService.consultarProduto();
        if(retorno == Error){
            res.status(404).json({Error});
        }else {
            res.status(200).json({retorno})
        }
    }
}