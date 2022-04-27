const express = require('express');

const {
  getAllPendingRepairs,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
  getAllRepairs,
} = require('../controllers/repair.controller');

const router = express.Router();

router.get('/', getAllPendingRepairs);
router.get('/all', getAllRepairs);
router.post('/', createRepair);

router
  .route('/:id')
  .get(getRepairById)
  .patch(updateRepair)
  .delete(deleteRepair);

module.exports = { repairsRouter: router };
