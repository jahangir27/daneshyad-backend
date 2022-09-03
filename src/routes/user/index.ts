import express from 'express';
import {registerUser,editUser} from '../../controller/controller.user'

let router = express.Router();

router.post('/user/',registerUser);
router.put('/user/',editUser);

export default router;