import request from 'supertest';
import server from '../server';

describe('testing server routes', () => {

  it('responds to /api/users', (done) => {
    request(server)
      .get('/api/users')
      .expect(200, done);
  });

  it('404 everything else', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});

describe('testing HTTP requests', () => {

  it('returns request body', (done) => {
    request(server)
      .post('/api/users')
      .send({
        name: 'alvin',
        picture: 'sadfsaldfkj'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
})
