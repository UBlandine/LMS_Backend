const mongoose = require('mongoose');

const User = require('..models/userModel'); 

async function createUser(name, email, password, address) {
  const newUser = new User({
    name,
    email,
    password,
    address,
  });

  try {
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
    return savedUser;
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      console.error('Error: Duplicate key violation');
    } else {
      console.error('Error saving user:', error);
    }
    throw error; 
  }
}

module.exports = {
  createUser,
};
