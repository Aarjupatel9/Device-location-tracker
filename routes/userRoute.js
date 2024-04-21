const express = require("express");
const DataModel = require("../models/dataModel");
const router = express.Router();

router.route("/saveData").post(saveData);
router.route("/getData/:timestamp").post(getData);
router.route("/getAllData").post(getAllData);

async function saveData(req, res) {
  const data  = req.body;
  console.log(req.body);
  var currentTime = new Date();
  if (!data) {
    res.status(404).json({ message: "device detail require" });
    return;
  }

  console.log("data insert present");
  const newData = new DataModel({
    timestamp: currentTime.getTime(),
    data: data,
  });
  var tmp = await newData.save();
  res.status(200).json({
    success: true,
    message: "device details save successfully",
    data: tmp,
  });
}

async function getData(req, res) {
  const { timestamp } = req.params;
  console.log(req.params);

  const deviceDetails = await DataModel.findOne({ timestamp: timestamp });

  if (deviceDetails) {
    res.status(200).json({
      success: true,
      message: "device details found",
      data: deviceDetails,
    });
  } else {
    res.status(200).json({
      success: false,
      message: "device details  not found",
    });
  }
}


async function getAllData(req, res) {
  const { timestamp } = req.params;
  console.log(req.params);

  const deviceDetails = await DataModel.find();

  if (deviceDetails) {
    res.status(200).json({
      success: true,
      message: "device details found",
      data: deviceDetails,
    });
  } else {
    res.status(200).json({
      success: false,
      message: "device details  not found",
    });
  }
}

module.exports = router;
