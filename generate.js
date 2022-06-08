const fs = require('fs');
const path = require('path')
const { exec } = require("child_process");

const args = process.argv.slice(2);
console.log('args: ', args);


fs.readdir(args[0], (err, files) => {
  files.forEach(file => {
    const ext = path.extname(file)
    const fileTitle = file.slice(0, file.length - ext.length)
    const filePath = args[0] + fileTitle + ".png"
    if (ext == ".yaml"){
        const command = "npm run start " + args[0] + file + " " + filePath
        console.log(command)
        exec(command)
    }
  });
});