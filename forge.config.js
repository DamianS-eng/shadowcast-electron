const path = require("path");
  
module.exports = {
  packagerConfig: {
    asar: false,
    icon: process.platform === "win32"
      ? path.resolve(__dirname, "src/public/images/icon.ico")
      : path.resolve(__dirname, "src/public/images/icon.png")
  },
  makers: [
    {
      name: "@electron-forge/maker-zip"
    },
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: "Shadowcast"
      }
    },
    {
      name: "@electron-forge/maker-deb",
      platforms: ["linux"]
    },
    {
      name: "@electron-forge/maker-rpm",
      platforms: ["linux"]
    }
  ]
}
