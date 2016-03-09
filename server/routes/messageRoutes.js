import express from 'express';
const router = express.Router();

import * as MessageController from '../controllers/messageController';

router.route('/')
  .get(MessageController.all)
  .post(MessageController.create);


export default router;
