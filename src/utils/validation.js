const validator = require("validator");

function createUserDataValiation(data) {
  const { name, email, age } = data;

  if (!name) {
    throw new error("Please enter name of the user..");
  } else if (!email) {
    throw new error("Please enter email of the user..");
  } else if (!age) {
    throw new error("Please enter age of the user..");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Please enter valid Email");
  } else if (!validator.isNumeric(age)) {
    throw new Error("Please enter age in Number");
  }
}

module.exports = createUserDataValiation;
