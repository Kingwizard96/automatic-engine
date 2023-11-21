const { User } = require('../models');  
const userData = [
  {
    username: 'test1',
    password: 'test1'
  },
  {
    username: 'test2',
    password: 'test2'
  },
  {
    username: 'test3',
    password: 'test3'
  }
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;

