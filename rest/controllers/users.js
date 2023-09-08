//Logic, calculations, main code, functions
const UserModel = require("./../models/users");

exports.getAllUsers = async (req, res) => {
    res.json(await UserModel.find());
};

//get single user data by using it's id
exports.getSingleUser = async (req, res) => {
    try {
        res.json(await UserModel.find({ _id: req.params.userId }));
    } catch (err) {
        res.send("<h1>No Data Found For User id: " + req.params.userId + "</h1>");
    };
};

// to create new user!
exports.saveUser = async(req, res) => {
    const newUser = new UserModel(req.body);
    res.send(await newUser.save());
};

exports.updateUser = async(req, res) => {
   const data = await UserModel.findOneAndUpdate(
        { _id: req.params.userId },
        //{ fullName: req.body.fullName },
        req.body, 
        { new: true }
        );
    res.send(data);
}

exports.deleteUser = async(req, res) => {
    const deletedUser = await UserModel.findOneAndDelete({_id: req.params.userId});
    res.send(deletedUser ? deletedUser : "Please Check User Id!");
}