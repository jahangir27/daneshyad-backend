import { Request, Response, NextFunction } from "express";
import {Farapod} from '../services'

export const addMember = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.addMember(req.params.id,req.body));
    }catch(err:any){
        next(err);      
    }
};

export const removeMember = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.removeMember(req.params.id,req.body));
    }catch(err:any){
        next(err);      
    }
};

export const createGroup = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.create(req.body));
    }catch(err:any){
        next(err);      
    }
};

export const searchGroup = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.search(req.body));
    }catch(err:any){
        next(err);      
    }
};

export const getGroupById = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.getGroupById(req.params.id));
    }catch(err:any){
        next(err);      
    }
};

export const deactiveGroup = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.delete(req.params.id));
    }catch(err:any){
        next(err);      
    }
};

export const editGroup = async (req: Request, res: Response, next: NextFunction) => {
    try{
        return res.status(200).json(await Farapod.group.edit(req.params.id,req.body));
    }catch(err:any){
        next(err);      
    }
};