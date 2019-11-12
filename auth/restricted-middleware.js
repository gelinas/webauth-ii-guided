// const bcrypt = require('bcryptjs'); // needed for headers version

// const Users = require('../users/users-model.js'); .. needed for headers version

module.exports = (req, res, next) => {
  // session version
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ you: "cannot pass!" });
  }

  // // headers version
  // const { username, password } = req.headers;

  // if (username && password) {
  //   Users.findBy({ username })
  //     .first()
  //     .then(user => {
  //       if (user && bcrypt.compareSync(password, user.password)) {
  //         next();
  //       } else {
  //         res.status(401).json({ message: 'Invalid Credentials' });
  //       }
  //     })
  //     .catch(error => {
  //       res.status(500).json({ message: 'Ran into an unexpected error' });
  //     });
  // } else {
  //   res.status(400).json({ message: 'No credentials provided' });
  // }
};
