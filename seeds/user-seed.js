const { User } = require('../models');  
const userData = [
  {
    username: 'alesmonde0',
    twitter: 'alesmonde0',
    github: 'alesmonde0',
    email: ''
    },
    {
    username: 'jwilloughway1',
    twitter: 'jwilloughway1',
    github: 'jwilloughway1',
    email: ''
    },
    {
    username: 'iboddam2',
    twitter: 'iboddam2',
    github: 'iboddam2',
    email: ''
    }
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;

