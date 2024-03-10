import express, { Express } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorMiddleware';
import customerRoutes from './routes/customerRoutes';
import servicesRoutes from './routes/servicesRoutes';
import tpquestionsRoutes from './routes/tpquestionsRoutes';
import questionsRoutes from './routes/questionsRoutes';
import formsRoutes from './routes/formsRoutes';
import serviceRoutes from './routes/serviceRoutes';
import formRoutes from './routes/formRoutes';

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

        this.app.use('/api/customer', customerRoutes);
        this.app.use('/api/services', servicesRoutes);
        this.app.use('/api/tpquestions', tpquestionsRoutes);
        this.app.use('/api/questions', questionsRoutes);
        this.app.use('/api/forms', formsRoutes);
        this.app.use('/api/service', serviceRoutes);
        this.app.use('/api/form', formRoutes);

    }

    private errorHandler(): void {
        this.app.use(errorHandler);
    }
}
export default new App().app;