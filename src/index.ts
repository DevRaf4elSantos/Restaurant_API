import express, {Request, Response} from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from "./Router";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(router)
app.get('/', (req : Request, res : Response) => {
    res.status(200).send('Seja bem-vind@');
});

app.listen(process.env.PORT, ()=>{
    console.log("Sistema Atualizado");
    
});