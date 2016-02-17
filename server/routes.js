export default function routes(app) {

  app.route('/')
    .get((req, res) => res.send('hello'))
}
