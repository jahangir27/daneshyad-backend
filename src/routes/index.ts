import express from 'express';
import ssoRoutes from './sso';

let router = express.Router();

router.use(ssoRoutes);

export default router;