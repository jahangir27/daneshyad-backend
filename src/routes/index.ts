import express from 'express';
import ssoRoutes from './sso';
import userRoutes from './user';
import accessRoutes from './access';
import groupRoutes from './group';

let router = express.Router();

router.use('/sso',ssoRoutes);
router.use('/user',userRoutes);
router.use('/access',accessRoutes);
router.use('/group',groupRoutes);

export default router;