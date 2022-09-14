const fileOperations = require("./index");

fileOperations.myFileWriter("newFile.txt", "This is a dummy text. ");
fileOperations.myFileReader("newFile.txt");
// fileOperations.myFileUpdater("newFile.txt", "It is used for various purposes");
// fileOperations.myFileDeleter("newFile.txt");
