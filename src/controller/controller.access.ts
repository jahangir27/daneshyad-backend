import { Request, Response, NextFunction } from "express";
import {Farapod} from '../services'

export const addGrant = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.access.addGrantWithAdmin(req.body.courseId,req.body.groupId,req.body.accessList));
    }catch(err:any){
        next(err);      
    }
};

export const removeGrant = async (req: Request, res: Response, next: NextFunction) => {
    null;
};