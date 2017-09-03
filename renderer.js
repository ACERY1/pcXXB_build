/**
 * Created by Acery on 2017/8/3.
 */
(function () {
	const electron = require('electron');
	const ipcRenderer = electron.ipcRenderer; // 进程间通信
	const remote = electron.remote; // provide methods for straight operate main process in render process
	const remoteApi = remote.require('./main-api.js');
	// const setting = remote.require('./setting.json');
	
	//only explose these variable
	global.remoteApi = remoteApi;
	global.ipcRenderer = ipcRenderer; // to connect the main Process
	// global.setting = setting;
})();
