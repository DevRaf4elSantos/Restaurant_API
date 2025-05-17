import express, {Request, Response} from "express";
import cors from 'cors';
import { PedidoController } from "./controllers/pedidoController";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

const pedidoController = new PedidoController()

app.get('/', (req : Request, res : Response) => {
    res.status(200).send('Seja bem-vind@');
});


app.get('/pedidos', (req : Request, res : Response) => {
    pedidoController.consultarPedido(req, res)
})

app.listen(process.env.PORT, ()=>{
    console.log("Sistema Atualizado");
    
});