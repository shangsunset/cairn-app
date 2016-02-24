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

  req.session.accessToken = req.accessToken;

  const user = new User();
  user.name = req.name;
  user.fbID = req.fbID;
  user.picture = req.picture;

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

export function getAccessToken(req, res) {
  console.log(req.session);
  if (req.session.accessToken) {
    return res.json({ accessToken: req.session.accessToken });
  }
  return null;
}
