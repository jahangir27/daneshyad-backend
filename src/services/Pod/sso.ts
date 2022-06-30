import request from 'request';

class SSO{

    public getTkenProfile(accessToken){
        let options = {
            url: `${process.env.SSO_SERVER}token/info/`,
            method: 'POST',
            headers: {
                Authorization: `Basic  ${Buffer.from(process.env.SSO_CLIENT_ID + ":" + process.env.SSO_CLIENT_SECRET).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                token: accessToken,
                token_type_hint: 'access_token'
            }
        }
        return this.callPod(options)
    }

    private callPod(options: any): Promise<JSON> {

        return new Promise((resolve: any) => {
            request(options,
                (error: any, response: any, body: any) => {
                    if(body)
                        try{
                            if(response.headers['content-type'].indexOf('application/json') != -1){
                                var resultJson = JSON.parse(body)
                                if(!resultJson.hasError || resultJson.success)
                                    resolve(resultJson)
                            }
                            else if(response.statusCode == 200){
                                resolve(response)
                            }
    
                            resolve({
                                message:`POD Error Message : ${resultJson.message}`,
                                hasError :true ,
                                result :{
                                    requestURL : response.request.href
                                }
                            })
                                
                        }
                        catch(err){
                            resolve({
                                message:`Unknown Exception : ${response.request.href}`,
                                hasError : true ,
                                result :{
                                    requestURL : options.url
                                }
                            })
                        }
                    else {//if(!body && response.statusCode == 200)
    
                        resolve({
                            hasError : false,
                            result :{}
                        })
                    }
                });
        })
    }

}

export default new SSO();