import express from 'express';
import {addMember,removeMember,createGroup,
    searchGroup,getGroupById,deactiveGroup,editGroup} from '../../controller/controller.group'

let router = express.Router();

router.post('/', createGroup);
router.get('/search', searchGroup);
router.get('/:id', getGroupById);
router.delete('/deactive/:id', deactiveGroup);
router.put('/:id', editGroup);

router.put('/members/:id', addMember);
router.delete('/members/:id', removeMember);

export default router;