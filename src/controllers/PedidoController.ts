import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";

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

    criarPedido = (req : Request, res : Response) => {
        return res.status(200).json({Status : 'Criando Pedido'})
    }

    alterandoPedido = (req : Request, res : Response) => {
        return res.status(200).json({Status : "Alterando Pedido"})
    }

    deletandoPedido = (req : Request, res : Response) => {
        return res.status(200).json({Status : "Deletando Pedido"})
    }
}