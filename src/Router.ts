import { Router, Request, Response} from "express";
import { PedidoController } from "./controllers/PedidoController";
import { ClienteController } from "./controllers/ClienteController";
import { ProdutoController } from "./controllers/ProdutoController";

const pedidoController = new PedidoController()
const clienteController = new ClienteController();
const produtoController = new ProdutoController();


export const router = Router();

router.get('/pedidos', (req : Request, res : Response) => {
    pedidoController.criarPedido(req, res);
})

router.post('/pedidos', (req : Request, res : Response) => {
    pedidoController.criarPedido(req, res);
})

router.patch('/pedidos', (req : Request, res : Response) => {
    pedidoController.alterandoPedido(req, res);
})

router.delete('/pedidos', (req : Request, res : Response) => {
    pedidoController.deletandoPedido(req, res);
});


router.get('/clientes', (req : Request, res : Response) => {
    clienteController.consultarCliente(req, res);
})

router.post('/clientes', (req : Request, res : Response) => {
    clienteController.cadastrarCliente(req, res);
})

router.patch('/clientes', (req : Request, res : Response) => {
    clienteController.alterarCliente(req, res);
})

router.delete('/clientes', (req : Request, res : Response) => {
    clienteController.deletarCliente(req, res);
});


router.get('/produto', (req : Request, res : Response) => {
    produtoController.consultarProduto(req, res);
})
