const userRepository = require("../repositories/user.repository");

class userService {
  async createUser(data) {
    return await userRepository.createUser(data);
  }

  async getUsers() {
    return await userRepository.getAllUsers();
  }

  async getUserById(id) {
    return await userRepository.getUserById(id);
  }

  async updateUser(id, data) {
    return await userRepository.updateUser(id, data);
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id);
  }
}

module.exports = new userService();
