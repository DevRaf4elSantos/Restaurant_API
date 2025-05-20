import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";
import { json } from "stream/consumers";

const pedidoService = new PedidoService();

export class PedidoController {
    
     consultarPedido =  async (req : Request, res : Response) => {
        let retorno  =  await pedidoService.consultarPedidos();
       
        res.status(200).json({retorno})
        console.log(retorno[0])
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