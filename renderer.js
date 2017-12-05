/**
 * Created by Acery on 2017/8/3.
 */
(function () {
	const electron = require('electron');
	const ffmpeg = require('fluent-ffmpeg') //视频流格式转换
	// const cmd = ffmpeg()
	const ipcRenderer = electron.ipcRenderer; // 进程间通信
	const remote = electron.remote; // provide methods for straight operate main process in render process
	const remoteApi = remote.require('./main-api.js');
	const desktopCapturer = require('electron').desktopCapturer;
	const fs = require('fs')
	// const setting = remote.require('./setting.json');
	
	//only explose these variable
	global.remoteApi = remoteApi;
	global.ipcRenderer = ipcRenderer; // to connect the main Process
	global.desktopCapturer = desktopCapturer;
	global.fs = fs
	global.ffmpeg = ffmpeg
	// global.setting = setting;
})();
