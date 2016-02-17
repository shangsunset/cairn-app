import request from 'supertest';
import app from '../app';
// request.agent(app.listen())

describe('testing app routes', () => {
  it('responds to /api/users', (done) => {
    request(app)
      .get('/api/users')
      .expect(200, done);
  });

  it('404 everything else', (done) => {
    request(app)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('testing HTTP requests', () => {

  it('returns request body', (done) => {
    request(app)
      .post('/api/users')
      .send({
        id: 2342234,
        name: 'alvin',
        picure: 'sadfsaldfkj'
      })
      .expect(200, 'alvin')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  })
})
