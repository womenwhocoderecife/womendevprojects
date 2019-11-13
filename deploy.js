var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
require('dotenv/config');

var config = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/",
    include: ["*"],
    exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    deleteRemote: true,
    forcePasv: true
};

console.log("Started uploading!");

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));