import { Router, Request, Response} from "express";
import { PedidoController } from "./controllers/pedidoController";

const pedidoController = new PedidoController()

export const router = Router();

router.get('/pedidos', (req : Request, res : Response) => {
    pedidoController.consultarPedido(req, res)
})

router.post('/pedidos', (req : Request, res : Response) => {
    pedidoController.criarPedido(req, res)
})

router.patch('/pedidos', (req : Request, res : Response) => {
    pedidoController.alterandoPedido(req, res)
})

router.delete('/pedidos', (req : Request, res : Response) => {
    pedidoController.deletandoPedido(req, res);
});