const responseMock = require("../helpers/response-mock");
const { skill } = require("../models");

const index = (req, res) => {
  skill
    .findAll({
      attributes: ["name", "percent"],
    })
    .then((result) => {
      if (result.length) {
        responseMock.success(
          res,
          200,
          "Berhasil menampilkan data skill",
          result
        );
      } else {
        responseMock.error(res, 404, "Skill tidak ditemukan");
      }
    })
    .catch((e) => {
      responseMock.error(res);
    });
};

module.exports = { index };
