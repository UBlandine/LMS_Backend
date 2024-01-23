
const UserModel = require('../models/user.models');
const record = async (req, res, next) =>{
  try{
    var recordedUser = await UserModel.create(req.body);
    res.status(201).json({
      message: "user recorded successfully!",
      user: recordedUser
    });
  } catch(error) {
    res.status(500).send(error);
  }
}
const list = async (req, res, next) => {
  try{
    var allUsers = await UserModel.find({});
    res.status(200).json({
      users: allUsers
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
const findById = async (req, res, next) => {

  try {
    let userId = req.query.id;
    var foundUser = await UserModel.findById(userId);
    res.status(200).json({
      user: foundUser
  });
} catch (error) {
  res.status(500).send(error);
}
  }
  const findByEmail = async (req, res, next) => {
    try {
        let userEmail = req.params.email;
        var foundUser = await UserModel.find({ email: userEmail});
        res.status(200).json({
            user: foundUser
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
  const remove = async (req, res, next) =>{
    try{
      var deletedUser = await UserModel.findByIdAndDelete(req.query.id);
      if (deletedUser) {
        res.status(200).json({ message: "boo Deleted well!" });
      } else {
        res.status(400).json({message: "user not found!"});
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
  const update = async (req, res, next) => {
    try {
        console.log(req.body);
        var updatedUSer = await UserModel.findByIdAndUpdate({_id:req.query.id},req.body);
        var user = await UserModel.find(updatedUSer._id);
        res.status(201).json({
        message:'user upda ted successfully',
        user
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
  findByEmail,findById, list, remove, record, update
}
