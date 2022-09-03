import { Request, Response, NextFunction } from "express";

export const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ success: true, message: "done", data: {} });
    } catch (err) {
        next(err);
    }
};

export const editCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({ success: true, message: "done", data: {} });
    } catch (err) {
        next(err);
    }
};