import jwt from 'jsonwebtoken';
import User from '../models/User';

export function all(req, res) {

  User.find().exec((err, users) => {
    if (err) {
      return res.status(500).send(err);
    } 
    return res.json({ users });
  });
}

export function create(req, res) {


  const user = new User();
  user.name = req.body.name;
  user.fbID = req.body.fbID;
  user.picture = req.body.picture;

  user.save((err, user) => {
    if (err) {
      return res.status(500).json(err);
    }
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: 1440 // expires in n seconds
    });

    return res.status(200).json({ user, token });
  });
}

export function authenticate(req, res) {
  User.findOne({ fbID: req.params.fbID }, (err, user) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (!user) {
      return res.json({
        success: false,
        message: 'user not found'
      });
    } else {
      
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: 1440 // expires in n seconds...
      });
      return res.status(200).json({success: true, user, token});
    }
    
  });
}
