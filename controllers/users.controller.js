const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({
    users,
  });
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = await User.create({ name, email, password, role });
  res.status(201).json({ newUser });
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    // SELECT * FROM users WHERE id = ?
    const user = await User.findOne({ where: { id } });

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found with the given id',
      });
    }

    await user.update({ name, email });

    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found with the given id',
      });
    }

    await user.update({ status: 'deleted' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
