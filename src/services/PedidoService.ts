export class PedidoService { 
    
    consultarPedidos = (id ?: string) => {
        if(id && id != undefined ) {
            return {
                id_pedido : 2,
                valor_pedido : 300,
                id_cliente: 2
            }
        
        } else {
            return [
                        {
                            id_pedido : 2,
                            valor_pedido : 300,
                            id_cliente: 2
                         },
                         {
                            id_pedido : 3,
                            valor_pedido : 520,
                            id_cliente: 1
                         },
                    ]
        }
    }
}