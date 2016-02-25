import express from 'express';
const router = express.Router();

import * as UserController from '../controllers/user.controller';

/* GET users listing. */
router.route('/')
  .get(UserController.all)
  .post(UserController.create);

router.get('/token', UserController.getAccessToken);

// router.route('/:id')
//   .get(UserController.read);


export default router;
