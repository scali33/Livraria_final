const axios = require('axios')
module.exports={

    excluirCookie:(res)=>{
        //res.cookie('Authorization', 'undefined', {maxAge: 60 * 60 * 100000})
        res.cookie('Authorization', 'undefined', { expires: new Date(0) })

    }
    
}