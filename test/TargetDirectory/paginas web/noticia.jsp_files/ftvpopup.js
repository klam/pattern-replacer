function ftvlaunch(video,quality,pid) {
	  var LeftPosition = (screen.width) ? (screen.width-665)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-430)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/videoplayer/index.cfm?id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid,'MTV6_window','toolbar=no,width=665,height=430,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}

function ftvnewlaunch(video,quality,pid) {
	  var LeftPosition = (screen.width) ? (screen.width-670)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-500)/2 : 0;
	  var popwin = window.open('http://bongo.zoomin.tv/videoplayer/index.cfm?id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid,'MTV6_window','toolbar=no,width=670,height=500,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}


//Tour de France 2005 video player launch:

function tourlaunchNL(video,quality,pid,langid) {
	  var LeftPosition = (screen.width) ? (screen.width-648)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-460)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/tourdefrance2005/videoplayer/index.cfm?id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid + '&lang='+ langid,'MTV6_window','toolbar=no,width=648,height=460,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}

function tourlaunch(video,quality,pid,langid) {
	switch(langid)
	{
		case "1":
			tourlaunchNL(video,quality,pid,"NL");
			break;
		case "2":
			tourlaunchBE(video,quality,pid,"BE");
			break;
	}
}

function tourlaunchBE(video,quality,pid,langid) {
	  var LeftPosition = (screen.width) ? (screen.width-665)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-457)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/tourdefrance2005/videoplayer/index.cfm?fuseaction=homebe&id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid + '&lang='+ langid,'MTV7_window','toolbar=no,width=665,height=457,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}