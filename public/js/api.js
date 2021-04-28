const request = require('request')

module.exports = {
    /*
    ** This method returns a promise
    ** which gets resolved or rejected based
    ** on the result from the API
    */
    make_API_call : function(url){
        return new Promise((resolve, reject) => {
            request(url, 
                {   json: true, 
                    headers : 
                    {"X-Instance" : "rainbow", "X-Lang"  : "fr",
                    "X-Widget-Version"  : "3.0.1",
                    "Content-Type" : "application/json",
                    "Accept"  : "*/*"} },
            (err, res, body) => {

            if (err) reject(err)
            resolve(body)
            });
        })
    }
}