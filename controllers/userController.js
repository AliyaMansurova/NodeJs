const fs = require('fs');
const usersPath = 'data/users.json';

function getUsers(req, res) {
  fs.createReadStream(usersPath)
    .pipe(res);
}

module.exports = {
  getUsers
};
