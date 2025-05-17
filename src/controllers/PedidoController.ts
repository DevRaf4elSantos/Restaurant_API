import { Request, Response } from "express";
import { PedidoService } from "../services/PedidoService";

const pedidoService = new PedidoService();

export class PedidoController {
    
    consultarPedido = (req : Request, res : Response) => {
        return res.status(200).json(pedidoService.consultarPedidos())
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