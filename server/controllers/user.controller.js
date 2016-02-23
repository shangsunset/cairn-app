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

  const user = new User(req.body);

  user.dudify(function(err, name) {
    if (err) throw err;
    console.log('Your new name is ' + name);
  });

  user.save((err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(user);
    return res.json({ user });
  });
}

export function read(req, res) {

  Post.findOne({ _id: req.param.id }).exec((err, user) => {
    if (err) {
      return res.status(500).send(err);
    } 

    return res.json({ user });
  });
}
