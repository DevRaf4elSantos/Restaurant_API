import { executeQueryDB } from "../data/Database"

export class PedidoService {
    async  consultarPedidos (id ?: string) : Promise<any|Error> {
        return new Promise((resolve : (value: any[] | undefined)  => void, reject : (reason?: any ) => void ) => {
        const ssql = 'Select * from tab_clientes';
                    
        executeQueryDB(ssql, [], function(err : Error | null, result ?: Array<any>)  {
                if(err){  
                    return reject(err)
                } else {
                    const listaObjeto = result?.map((v) => ({
                        id : v[0],
                        nome : v[1],
                        mesa : v[2]
                    }))
                    return resolve(listaObjeto)
                }
            })

         })
        }
    }
