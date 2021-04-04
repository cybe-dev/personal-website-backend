const responseMock = require("../helpers/response-mock");
const { portfolio } = require("../models");

const index = (req, res) => {
  const { offset = 0, limit = 4 } = req.query;

  portfolio
    .findAndCountAll({
      offset: parseInt(offset),
      limit: parseInt(limit),
    })
    .then((result) => {
      if (result.count) {
        responseMock.success(
          res,
          200,
          "Berhasil menampilkan data portofolio",
          result
        );
      } else {
        responseMock.error(res, 404, "Portofolio tidak ditemukan");
      }
    })
    .catch((e) => {
      responseMock.error(res);
    });
};

module.exports = { index };
