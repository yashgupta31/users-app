//handle api calls related to /users/.....

const express = require("express");
const router = express.Router();

const UsersControllers = require("./../controllers/users");

//getting all users
router.get("/getAllUsers", UsersControllers.getAllUsers);

//get single user data by using it's id
router.get("/getUser/:userId", UsersControllers.getSingleUser );

router.post("/saveUser", UsersControllers.saveUser);

router.patch("/updateUser/:userId", UsersControllers.updateUser);

router.delete("/deleteUser/:userId", UsersControllers.deleteUser);

module.exports = router;