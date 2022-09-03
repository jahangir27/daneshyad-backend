import { Request, Response, NextFunction } from "express";
import {Pod} from '../services';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await Pod.PodUser.registerUser(req.body.username,req.body.cellphoneNumber,req.body.email);
      res.status(200).json({ success: true, message: "done", data: user });
    } catch (err) {
      next(err);
    }
  };

  export const editUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({ success: true, message: "done", data: {} });
    } catch (err) {
      next(err);
    }
  };