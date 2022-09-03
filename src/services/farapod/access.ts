import Common from './common';

class Access {

    async addGrantWithAdmin(courseId:number,groupId:number,accessList:string[]){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/course/access`;
        
        const addGrantResult:any = await Common.call("POST", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                JSON.stringify({
                    courseId : courseId,
                    groupId : groupId,
                    accessList : accessList
                })
        );

        return addGrantResult;
   
    }

}

export default new Access();