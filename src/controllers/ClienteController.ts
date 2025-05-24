import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

const clienteService = new ClienteService();

export class ClienteController {
    consultarCliente = async (req : Request, res : Response ) => {
        const retorno = await clienteService.consultarCliente()
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"})
        } else {
            res.status(200).json({retorno})
        }  
    }

}