import express from 'express';
const router = express.Router();

import controller from '../controllers/user';

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.send('respond with a resource');
  })
  .post(controller.post);

export default router;
