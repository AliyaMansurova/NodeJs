import jwt from 'jsonwebtoken';

const hardcodedUser = {
  "id": "1",
  "name": "User1",
  "email": "email1@mail.ru",
  "password": "password1"
};

const authenticate = (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: { error: 'Username wasn`t entered' }
    });
  } else if (!password) {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: { error: 'Password wasn`t entered' }
    });
  } else if (hardcodedUser.password !== password) {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: { error: 'Incorrect password' }
    });
  } else {
    const user = { name: username, email: hardcodedUser.email };
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
