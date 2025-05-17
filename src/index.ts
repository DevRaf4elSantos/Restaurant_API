import express, {Request, Response} from "express";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

app.listen(process.env.PORT, ()=>{
    console.log("Sistema Rodando com sucesso");
    
});