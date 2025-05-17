import express from "express";
const teste = express()

teste.listen(process.env.PORT, ()=>{
    console.log("Sistema Rodando com sucesso");
    
})