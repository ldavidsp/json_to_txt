const fs = require("fs");
const { getStartPoints, getRows, getData } = require("./src/lib.js");

const main = function (params) {
  const data = getData(params, fs);
  const headers = Object.keys(data[0]);
  const startPoints = getStartPoints(data, headers);
  const rows = getRows(data, headers, startPoints);

  //newLineCode ex. "\r\n", "\n"
  const newLineCode = params.newLine || "\n";
  return rows.join(newLineCode);
};

module.exports = main;
