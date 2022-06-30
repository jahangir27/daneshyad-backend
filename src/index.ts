import express from 'express';
import http from 'http';
import passport from 'passport';
import session from 'express-session';
import routes from './routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';

class Application {
    app = express();

    async startServer() {
        try {
            this.setConfig();
            this.configCORS();
            await this.configRoutes();
            this.configServer();
        }
        catch (error) {
            console.log(error.message);
        }
    }

    configCORS() {
        this.app.use(cors());
    }

    configServer() {
        const httpPort = process.env.PROXY_SERVICE_PORT;
        const httpServer = http.createServer(this.app);
        httpServer.listen(httpPort, () => {
            console.log('server run on port ' + process.env.PROXY_SERVICE_PORT + ' ...');
        });
    }

    async configRoutes() {
        this.app.use(await routes);
    }

    setConfig() {
        this.app.use(cookieParser(process.env.SSO_CLIENT_SECRET));
        this.app.use(session({
            resave: false,
            saveUninitialized: true,
            secret: process.env.SSO_CLIENT_SECRET
        }));
        require('./middleware/passport');
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.set('trust proxy', 1);
    }
}

export default Application;