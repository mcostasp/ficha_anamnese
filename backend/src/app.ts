import express, { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorMiddleware';
import customerRoutes from './routes/customerRoutes';

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.errorHandler();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(morgan('combined'));
    }

    private routes(): void {
        this.app.use('/api/customer', customerRoutes)
    }

    private errorHandler(): void {
        this.app.use(errorHandler);
    }
}
export default new App().app;