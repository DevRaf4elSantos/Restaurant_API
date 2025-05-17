import { Request, Response } from "express";

export class PedidoController {
    consultarPedido = (req : Request, res : Response) => {
        const body = req.body;
        console.log(body)
        return res.status(200).json({Status : 'Consultando'})
    }
}