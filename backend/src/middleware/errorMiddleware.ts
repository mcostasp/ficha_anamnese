import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import { Logger } from '../utils/logger';

export const errorHandler = ( err: createHttpError.HttpError, req: Request, res: Response, next: NextFunction ) => {
    Logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500).json({ error: err.message });
};