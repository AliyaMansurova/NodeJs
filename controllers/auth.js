import jwt from 'jsonwebtoken';

const hardCodedUser = {
  "id": "1",
  "name": "User1",
  "email": "email1@mail.ru",
  "password": "password1"
};

const authenticate = (req, res) => {
  const { username, password } = req.body;

  if (!hardCodedUser || hardCodedUser.password !== password) {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: { error: 'Wrong username or password' }
    });
  } else {
    const user = { name: username, email: hardCodedUser.email };
    const token = jwt.sign(user, 'secret', {expiresIn: 360});
    res.status(200).send({
      code: 200,
      message: 'OK',
      data: { user },
      token
    });
  }
};

module.exports = {
  authenticate
};
