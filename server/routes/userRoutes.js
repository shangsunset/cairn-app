import express from 'express';
const router = express.Router();

import * as UserController from '../controllers/userController';

/* GET users listing. */
router.route('/')
  .get(UserController.all)
  .post(UserController.create);


router.route('/:fbID/authenticate')
  .get(UserController.authenticate);


export default router;
