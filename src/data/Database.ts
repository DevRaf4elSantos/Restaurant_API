import firebird from 'node-firebird';

const options : firebird.Options = {

    host : 'localhost',
    port : 3050,
    database : 'C:\\BD\\RESTAURANT_API.FDB',
    user : 'SYSDBA',
    password : 'masterkey',
    lowercase_keys : false, // set to true to lowercase keys // default
    pageSize : 4096, // default when creating database
    retryConnectionInterval : 1000, // reconnect interval in case of connection drop
    blobAsText : false, // set to true to get blob as text, only affects blob subtype 1
    encoding : 'UTF8',
}

export const executeQueryDB = async (ssql : string, params : Array<string>, fcalback : (err : Error | null , result ?: any[] )=>void ) =>{ 
    await firebird.attach(options, function(err , db){
    if(err){
        console.log('erro aqui')
        return fcalback(err)
    }

    db.execute(ssql, params, function(error, resultado){
        db.detach()
        if(error){
            console.log('Entrei no error do criarpedidoBD 2')
            return fcalback(error);
        } else {
            console.log('sucesso na conexão')
            return fcalback(null, resultado)
        }
    }) 
})
}