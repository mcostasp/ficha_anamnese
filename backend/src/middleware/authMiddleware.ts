/* import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';
import { Logger } from '../utils/logger';

export const autheticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(token){
        jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
            if(err){
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user = decoded;
            next();
        });
    }else{
        res.status(401).json({ message: 'Unauthorized' });
    }
}; */