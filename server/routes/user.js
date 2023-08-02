const express = require("express");
const userRouter = express.Router();
const userModel = require("../models/user");

// Get all food outlets details
userRouter.get("/", async (req, res) => {
  try {
    let users = await userModel.find();

    res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
});

// Insert Employee details
userRouter.post("/", async (req, res) => {
  try {
    const user = new userModel({
      empName: req.body.empName,
      empEmail: req.body.empEmail,
      empAddress: req.body.empAddress,
      empMobileNo: req.body.empMobileNo,
    });

    const newUser = await user.save();
    res.status(200).send(newUser);
    console.log(newUser);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
});

// Login Router
userRouter.post("/login", async (req, res) => {
  const { empEmail, empPassword } = req.body;
  console.log("email:" + empEmail, "passwors:" + empPassword);
  let user = await userModel.findOne({ empEmail });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (empPassword === user.empPassword) {

    if (res.status(200)) {
      return res.json({ status: "ok"});
    } else {
      return res.json({ status: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
});


// Delete User details by UserNo
userRouter.delete("/:empName", async (req, res) => {
  let user = await userModel.findOne({
    empName: req.params.empName,
  });
  if (!user) {
    return res.status(404).send("Invalid User No");
  }
  try {
    const deleteFood = await userModel.deleteOne({
      empName: req.params.empName,
    });
    //res.status(200).json(deleteFood);
    res.status(200).send("Record Delete Successfully!");
  } catch (ex) {
    return res.status(500).send(`Error: ${ex.message}`);
  }
});

module.exports = userRouter;
