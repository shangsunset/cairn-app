import Message from '../models/Message';

export function all(req, res) {

  Message.find({}, (err, messages) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ messages });

  });
}

export function post(req, res) {

  const message = new Message(req.body);

  message.save((err, message) => {
    if (err) {
      return res.status(500).json(err);
    }
    return json.status(200).json({ message });
  });

}
