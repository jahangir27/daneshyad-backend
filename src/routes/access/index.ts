import express from 'express';
import {addGrant,removeGrant} from '../../controller/controller.access'

let router = express.Router();

router.post('/admin',addGrant);
router.delete('/admin',removeGrant);

export default router;