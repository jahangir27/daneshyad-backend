import App from './src';

const app = new App();
require('dotenv').config()

export default app.startServer() ;