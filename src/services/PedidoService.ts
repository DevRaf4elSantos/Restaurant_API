import { executeQueryDB } from "../data/Database";

export class PedidoService {
    async  consultarPedidos (id ?: string) : Promise<any|Error> {
        return new Promise((resolve : (value: any[] | undefined)  => void, reject : (reason?: any ) => void ) => {
        try {            
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

            } catch(err){
                console.log('Entrei nesse erro do pedido')
                return reject(err)
            }

         })
        }

    async alterarPedido(nome ?: string) : Promise<any | Error> {
        return new Promise((resolve: (value : unknown) => void, reject : (reason? :any) => void) => {
            try {
                if(nome != undefined){
                    const ssql = 'select * from tab_clientes where id_cliente = ?'
                    executeQueryDB(ssql, [nome], function(err : Error | null, result ?: Array<any>)  {
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
                } else{
                    return reject(Error);
                }
             
            } catch(Error){
                console.log('ERRORRRRRRR');
            }
        })
    }
    }
