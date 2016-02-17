import User from '../models/User';

export default {

  post(req, res) {
    console.log(req.body.name);
    res.send(req.body.name);
  }
}
