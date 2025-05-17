export class PedidoService { 
    consultarPedidos = (id ?: string) => {
        if(id && id != undefined) {
            return { id : 1, valorTotal : 3000}
        } else {
            return [
                    {
                        id : 1, 
                        valorTotal : 3000,
                    },
                    {
                        id : 2, 
                        valorTotal : 360,
                    }

                ]
        }
    }
}