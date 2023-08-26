const { find } = require("../../helpers");

const getUserTypes = async (req, res) => {
  console.log(req)
  try {
    let response = await find("userType", {});
    return res.status(200).send({ status: 200, response });
  } catch (e) {
    res.status(400).send({ status: 400, message: e.message });
  }
};

module.exports = getUserTypes;
