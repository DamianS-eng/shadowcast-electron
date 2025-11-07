module.exports = {
  packagerConfig: {
    asar: false,
    icon: "src/public/images/icon"
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
