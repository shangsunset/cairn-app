import Message from '../models/Message';

export function all(req, res) {

  Message.find({}, (err, messages) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ messages })

  })
}
