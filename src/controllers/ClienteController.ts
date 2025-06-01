import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

const clienteService = new ClienteService();

export class ClienteController {
    consultarCliente = async (req : Request, res : Response ) => {
        const id = req.body.id;
        if(id != undefined){
            const retorno = await clienteService.consultarCliente(id);
            if(retorno == Error){
                res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"});
            } else {
                res.status(200).json({retorno});
            } 
        } else {
            const retorno = await clienteService.consultarCliente();
            if(retorno == Error){
                res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"});
            } else {
                res.status(200).json({retorno});
            } 
        } 
         
    }

    cadastrarCliente = async (req : Request, res : Response ) => {
        const nomeCliente = req.body.nome;
        const mesaCliente = req.body.mesa;
        const retorno = await clienteService.cadastrarCliente(nomeCliente, mesaCliente);
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"});
        } else {
            res.status(201).json({retorno});
        }  
    }

    alterarCliente = async (req : Request, res : Response ) => {
        const idCliente = req.body.id;
        const nomeCliente = req.body.nome;
        const mesaCliente = req.body.mesa;
        const retorno = await clienteService.alterarCliente(idCliente, nomeCliente, mesaCliente);
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"});
        } else {
            res.status(201).json({retorno});
        }  
    }

    deletarCliente = async (req : Request, res : Response ) => {
        const idCliente = req.body.id;
        const retorno = await clienteService.deletarCliente(idCliente);
        if(retorno == Error){
            res.status(404).json({mensagem : "Error Página ou Dado Não Encontrado"});
        } else {
            res.status(201).json({retorno});
        }  
    }

}