const userService = require("../services/user.service");
const createUserDataValiation = require("../utils/validation");

class userController {
  create = async (req, res) => {
    try {
      createUserDataValiation(req.body);
      const user = await userService.createUser(req.body);
      return res.status(201).json({
        message: "User Created successfully",
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const users = await userService.getUsers();
      if (!users || users === null) {
        return res.status(200).json({
          message: "No users present in database",
          data: users,
        });
      }
      return res.status(200).json({
        message: "Users data fetched successfully",
        success: true,
        data: users,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };

  getOne = async (req, res) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user || user === null) {
        return res.status(200).json({
          message: "No user data found",
          data: user,
        });
      }
      return res.status(200).json({
        message: "User data fetched successfully",
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  };

  update = async (req, res) => {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      return res.status(200).json({
        message: "User data updated successfully",
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  };

  delete = async (req, res) => {
    try {
      const user = await userService.deleteUser(req.params.id);
      return res.status(200).json({
        message: "User deleted successfully",
        success: true,
        data: user,
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  };
}

module.exports = new userController();
