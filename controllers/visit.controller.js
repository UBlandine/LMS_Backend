const Visit = require('../models/visit.model');

// Controller function to handle creating a new visit
exports.createVisit = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newVisit = new Visit({ name, email, message });
    const savedVisit = await newVisit.save();
    res.status(201).json(savedVisit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to handle fetching all visits
exports.getAllVisits = async (req, res) => {
  try {
    const visits = await Visit.find();
    res.status(200).json(visits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to handle fetching a single visit by ID
exports.getVisitById = async (req, res) => {
  try {
    const visit = await Visit.findById(req.params.id);
    if (!visit) {
      return res.status(404).json({ message: 'Visit not found' });
    }
    res.status(200).json(visit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to handle updating a visit by ID
exports.updateVisit = async (req, res) => {
  try {
    const updatedVisit = await Visit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVisit) {
      return res.status(404).json({ message: 'Visit not found' });
    }
    res.status(200).json(updatedVisit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function to handle deleting a visit by ID
exports.deleteVisit = async (req, res) => {
  try {
    const deletedVisit = await Visit.findByIdAndDelete(req.params.id);
    if (!deletedVisit) {
      return res.status(404).json({ message: 'Visit not found' });
    }
    res.status(200).json({ message: 'Visit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
