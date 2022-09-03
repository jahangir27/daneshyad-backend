import querystring from 'querystring';

class User{

    public registerUser(username:string,cellphoneNumber:string,email:string,){

            // var queryStr = querystring.stringify({
            //     client_id : process.env.SSO_CLIENT_ID ,
            //     client_secret : process.env.SSO_CLIENT_SECRET ,
            //     username : username ,
            //     cellphoneNumber : cellphoneNumber,
            //     email : email
            // });
            // var options = {
            //     method: 'PUT',
            //     url: `${process.env.POD_CORE_ADDRESS}/nzh/biz/registerUser/`,
            //     headers: {
            //         _token_: process.env.DANESHYAD_API_TOKEN ,
            //         _token_issuer_: 1
            //     },
            //     form:queryStr
            // }
    
            // return this.sendRequest(options);

    }

}

export default new User();