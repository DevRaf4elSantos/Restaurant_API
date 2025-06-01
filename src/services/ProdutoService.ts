import { executeQueryDB } from "../data/Database";

export class ProdutoService {
    async consultarProduto( id ?: number) : Promise <any|Error> { 
        return new Promise((resolve : (value : any[] | undefined) => void , reject : (reason ?: any) => void) =>{
            try {
                const ssql = 'Select * from tab_produtos;'
                executeQueryDB(ssql, [], function(err : Error | null, result ?: any[]){
                    if(err){
                        return reject(err);
                    } else {
                        const listaProdutos = result?.map((produto) => ({
                            id : produto[0],
                            nome : produto[1],
                            preco : produto[2],
                            qtd_estoque : produto[3]
                        }))
                        return resolve(listaProdutos)
                    }
                })
            } catch(erro){
                reject(erro)
            }
        })
    }
}