import { executeQueryDB } from "../data/Database"

export class ClienteService {
    async consultarCliente(id ?: number) : Promise<any|Error> {
        return new Promise((resolve : (value : any) => void, reject : (reason?: any ) => void) => {
            try {
                
                if(id != undefined){
                    const ssql = 'Select * from tab_clientes where id_cliente = ?';
                    executeQueryDB(ssql, [id.toString()], function(err : Error | null, result ?: Array<any>)  {
                        if(err){  
                            return reject(err)
                        } else {
                            return result;
                        }
                    })     
                }
                else {
                    const ssql = 'Select * from tab_clientes';
                    executeQueryDB(ssql, [], function(err : Error | null, result ?: Array<any>)  {
                    if(err){  
                        return reject(err)
                    } else {
                        const listaObjeto = result?.map((cliente) => ({
                            id : cliente[0],
                            nome : cliente[1],
                            mesa : cliente[2]
                        }))
                        return resolve(listaObjeto)
                }
            })}
        } catch(erro){
            
            console.log('Deu erro')
        }} 
        )
    }

    async cadastrarCliente(nome : string, mesa : number) : Promise<any|Error> {
        return new Promise((resolve : (value : any) => void, reject : (reason?: any ) => void) => {
            try {
                if(nome != undefined && nome.length > 3 && mesa != undefined ){
                    const ssql = 'INSERT INTO tab_clientes(nome_cliente, mesa_cliente) VALUES (?, ?) Returning id_cliente; ';
                    executeQueryDB(ssql, [nome, mesa.toString()], function(err : Error | null, result ?: Array<any>)  {
                    if(err){  
                        return reject(err)
                    } else { 
                        return resolve(result)
                    }
                })} 
                else {
                    throw new Error; 
                }
            }
            catch(erro){
                console.log('Deu erro')
            }} 
        )
    }

    async alterarCliente(id : number, nome : string, mesa : number) : Promise<any|Error> {
        return new Promise((resolve : (value : any) => void, reject : (reason?: any ) => void) => {
            try {
                if(nome != undefined && nome.length > 3 && mesa != undefined && id != undefined){
                    const ssql = 'UPDATE tab_clientes SET nome_cliente = ?, mesa_cliente = ? WHERE id_cliente = ?;';
                    executeQueryDB(ssql, [nome, mesa.toString(), id.toString()], function(err : Error | null, result ?: Array<any>)  {
                    if(err){  
                        return reject(err);
                    } else { 
                        return resolve(result);
                    }
                })} 
                else if(nome != undefined && nome.length > 3 && mesa == undefined && id != undefined ){
                    const ssql = 'UPDATE tab_clientes SET nome_cliente = ? WHERE id_cliente = ?;';
                    executeQueryDB(ssql, [nome, id.toString()], function(err : Error | null, result ?: Array<any>)  {
                    if(err){  
                        return reject(err);
                    } else { 
                        return resolve(result);
                    }
                })} 
                else if(nome == undefined && mesa != undefined ){
                        return resolve({mensagem : "Digite ao menos um dos campos para seguir com alteração"});
                }
                else {
                    throw new Error; 
                }
            }
            catch(erro){
                console.log('Deu erro');
                return erro;
            }} 

            
        )
    }

    async deletarCliente(id ?: number) : Promise<any|Error> {
        return new Promise((resolve : (value : any) => void, reject : (reason?: any ) => void) => {
            try {
                
                if(id != undefined){
                    const idString = id.toString()
                    const ssql = 'Delete from tab_clientes where id_cliente = ? returning id_cliente';
                    executeQueryDB(ssql, [idString], function(err : Error | null, result ?: Array<any>)  {
                        if(err){  
                            return reject(err)
                        } else {
                            return resolve(result);
                        }
                    })     
                }

            } catch(erro){
            
                console.log('Deu erro')
            }
        }
    )}} 
        