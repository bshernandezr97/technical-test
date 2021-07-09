const Clasification = require("../models/Clasification");
const { response } = require("express");

const addClasification = async (req, res = response) => {
  try {
    const clasification = await Clasification.create({ ...req.body });
    return res.status(201).json({
      ok: true,
      ...clasification._doc,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong, please communicate with the admin.",
    });
  }
};

const updateClasification = async (req, res = response) => {
  try {
    let clasification = await Clasification.findById(req.params.id);
    if (!clasification) {
      return res.status(400).json({
        ok: false,
        message: "Clasification id does not exists",
      });
    }
    clasification = await Clasification.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    return res.status(200).json({
      ok: true,
      ...clasification._doc,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong, please communicate with the admin.",
    });
  }
};

const deleteClasification = async (req, res = response) => {
  try {
    let clasification = await Clasification.findById(req.params.id);
    if (!clasification) {
      return res.status(400).json({
        ok: false,
        message: "Clasification id does not exists",
      });
    }
    clasification = await Clasification.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      ok: true,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong, please communicate with the admin.",
    });
  }
};

const getClasifications = async (req, res = response) => {
  try {
    let clasifications = await Clasification.find({});
    res.status(200).json({
      ok: true,
      ...clasifications,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong, please communicate with the admin.",
    });
  }
};

module.exports = {
  addClasification,
  updateClasification,
  deleteClasification,
  getClasifications,
};
