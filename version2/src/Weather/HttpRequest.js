const request = require('request');
const rp = require('request-promise');


const getResourceWithPromise = (url) => {

    let promise = new Promise(function(resolve, reject) {  

        request ({url,json: true}, (error,response)=> {

            if (error){
                console.log(error)
                reject(error)
            }else{
                resolve(response.body)
            }
        })
    })

    return promise
}


const getResource = function (url,callback){
    request ({url,json: true}, (error,response)=> {

        if (error){
            console.log(error)
           callback(error,undefined)
        }else{
            callback(undefined,response)
        }})

}


module.exports = { getResourceWithPromise, getResource}