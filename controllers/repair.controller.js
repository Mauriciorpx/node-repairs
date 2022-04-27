const { Repair } = require('../models/repair.model');

const getAllPendingRepairs = async (req, res) => {
  const repair = await Repair.findAll({
    where: { status: 'pending' },
  });

  res.status(200).json({
    repair,
  });
};

const getAllRepairs = async (req, res) => {
  const repair = await Repair.findAll();

  res.status(200).json({
    repair,
  });
};

const createRepair = async (req, res) => {
  const { date, userId } = req.body;

  const newRepair = await Repair.create({ date, userId });

  res.status(201).json({ newRepair });
};

const getRepairById = async (req, res) => {
  try {
    const { id } = req.params;
    // SELECT * FROM users WHERE id = ?
    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'User not found with the given id',
      });
    } /* else if ({ status !='pending' }) {
      return res.status(404).json({
        status: 'error',
        message: 'The repair with the given ID is not pending',
      });
    } */

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found with the given id',
      });
    }

    await repair.update({ status: 'completed' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'Repair not found with the given id',
      });
    }

    await repair.update({ status: 'cancelled' });
    res.status(200).json({ status: 'Success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPendingRepairs,
  getAllRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
