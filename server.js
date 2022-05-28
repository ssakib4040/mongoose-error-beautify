const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

// mongoose connect
mongoose.connect(process.env.MONGO_URI);

// main package
const mongooseErrorBeautify = require("./index");

// schema
const User = require("./Schema/User");

async function init() {
  try {
    const newUser = new User({
      name: "John",
    });

    await newUser.save();

    console.log(newUser);
  } catch (error) {
    // console.log(error);
    // mongooseErrorBeautify(error);
    console.log(mongooseErrorBeautify(error));
  }
}

init();

// console.log(mongooseErrorBeautify());
