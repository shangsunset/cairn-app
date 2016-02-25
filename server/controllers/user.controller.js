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

  if (!req.session.accessToken) {

    req.session.accessToken = req.body.accessToken;
  }
  req.session.visit += 1;
  req.session.save()

  const user = new User();
  user.name = req.body.name;
  user.fbID = req.body.fbID;
  user.picture = req.body.picture;

  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.json({ user, session: req.session });
  });
}

export function read(req, res) {

  User.findOne({ _id: req.param.id }).exec((err, user) => {
    if (err) {
      return res.status(500).send(err);
    } 

    return res.json({ user });
  });
}

export function getAccessToken(req, res) {
  console.log(req.session);
  res.send(req.session);
  // if (req.session.accessToken) {
  //   return res.json({ accessToken: req.session.accessToken });
  // }
  // return res.json({ accessToken: null });
}
