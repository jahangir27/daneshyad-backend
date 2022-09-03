import Common from './common';

class Group {

    async addMember(groupId:number,bodyData:string){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/members/${groupId}`;
        
        const addMemberResult:any = await Common.call("POST", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                bodyData
        );

        return addMemberResult;
   
    }

    async removeMember(groupId:number,bodyData:string){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/members/${groupId}`;
        
        const result:any = await Common.call("DELETE", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                bodyData
        );

        return result;
   
    }

    async getGroupById(groupId:number){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/${groupId}`;
        
        const result:any = await Common.call("GET", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                }
        );

        return result;
   
    }

    async create(bodyData:string){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/`;
        
        const result:any = await Common.call("POST", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                bodyData
        );

        return result;
   
    }

    async delete(groupId:number){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/deactive/${groupId}`;
        
        const result:any = await Common.call("PUT", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                }
        );

        return result;
   
    }

    async edit(groupId:number,bodyData:string){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/${groupId}`;
        
        const result:any = await Common.call("PUT", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                bodyData
        );

        return result;
   
    }

    async search(bodyData:string){
        
        const url = `${process.env.FARAPOD_SERVER_ADDRESS}api/group/`;
        
        const result:any = await Common.call("GET", url, 
                {
                    _token_: process.env.DANESHYAD_API_TOKEN,
                    _token_issuer_: 1,
                },
                bodyData
        );

        return result;
   
    }

}

export default new Group();