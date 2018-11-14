// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
console.log('Node Version: ', process.versions.node);
console.log('Electron Version: ', process.versions.electron);

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        minWidth: 500,
        minHeight: 300,
        autoHideMenuBar: true,
        titleBarStyle: 'default', // if it set to "default", it does not crash
        show: true
    });

    // and load the index.html of the app.
    win.loadFile('index.html')

    return win;
}

function appReady() {
    mainWindow = createWindow();
    // Emitted when the window is closed.
    mainWindow.on('close', function () {
        // mainWindow.setVibrancy('');
        console.log('close');
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', appReady)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});


// if you uncomment this part, it works
/* app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});*/

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
