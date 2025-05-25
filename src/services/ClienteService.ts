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

}