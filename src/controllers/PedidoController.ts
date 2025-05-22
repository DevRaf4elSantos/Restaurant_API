import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";
import { PedidoModel } from "../model/PedidoModel";

const pedidoService = new PedidoService();

export class PedidoController {
    
    consultarPedido =  async (req : Request, res : Response) => {
        let retorno  =  await pedidoService.consultarPedidos();
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"})
        } else {
            res.status(200).json({retorno})
        }        
    }

    criarPedido = async (req : Request, res : Response) => {
        const nome = req.body.nome;
        let retorno  =  await pedidoService.alterarPedido(nome);
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"})
        } else {
            res.status(200).json({retorno})
        } 
    }

    alterandoPedido = (req : Request, res : Response) => {
        return res.status(200).json({Status : "Alterando Pedido"})
    }

    deletandoPedido = (req : Request, res : Response) => {
        return res.status(200).json({Status : "Deletando Pedido"})
    }
}