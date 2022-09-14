const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) throw err;
    console.log("Created!");
  });
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  const data = await fs.readFile(fileName, "utf-8", (err) => console.log(err));
  console.log(data);
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  fs.appendFile(fileName, fileContent, (err) => {
    if (err) throw err;
    console.log("Appended!");
  });
};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  fs.unlink(fileName, function (err) {
    if (err) throw err;
    console.log("Deleted!");
  });
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
