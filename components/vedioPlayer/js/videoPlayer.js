$.fn.videoPlayer = function(){
	var $video = $(this);
	var _video = $video[0];
	var videoWrap = $video.parent();
	var body = $('body');
	var win = $(window);
	var timer,visible;

	//初始化DOM,获取新元素
	var tpl = '<div id="close" class="icon-close"></div>'
				+'<div class="controls">'
					+'<div id="playBtn" class="icon-play"></div>'
					+'<div id="progressBar" class="progressBar"></div>'
					+'<div id="progressBtn" class="icon-btn"></div>'
					+'<div id="screenSize" class="icon-screen-max"></div>'
					+'<div id="icon-volume" class="icon-volume">'
						+'<div id="volumeBar" class="volume-bar"></div>'
						+'<div id="volumeBtn" class="icon-btn"></div>'
					+'</div>'
					+'<div id="duration" class="duration"></div>'
					+'<div id="currentTime" class="currentTime"></div>'
				+'</div>'
				+'<div id="drag" class="drag"></div>'
				+'<div id="resize" class="resize"></div>';

	$video.after(tpl);

	var playBtn = $('#playBtn');
	var progressBar = $('#progressBar');
	var progressBtn = $('#progressBtn');
	var currentTime = $('#currentTime');
	var duration = $('#duration');
	var screenSize = $('#screenSize');
	var iconVolume = $('#icon-volume');
	var volumeBar = $('#volumeBar');
	var volumeBtn = $('#volumeBtn');
	var screenSize = $('#screenSize');

	$.centralize(videoWrap);
	$.drag('#drag','#video-wrapper');
	adjustVol(0.6);

	//暂停播放
	body.delegate('#playBtn','click',function(){
		togglePlay();
	});
	$video.on('ended',function(){
		playBtn.removeClass('icon-play').addClass('icon-pause');
	});

	//控制视频播放进度
	$video.on('canplay', function(){

		//视频时长
		var dTime = _video.duration; 
		//用时间的格式显示时间
		duration.text($.formateTime(dTime)); 

		$.drag('#progressBtn',false,'x','#progressBar',function(){
			var scale = (progressBar.width() - progressBtn.width())/dTime;

			_video.currentTime = (progressBtn.position().left - 35)/scale;

			if(_video.paused && playBtn.is('.icon-play')){
				_video.play();
			};
		});

		timer = setInterval(function(){
					var cTime = _video.currentTime;
					var scale = (progressBar.width() - progressBtn.width())/dTime;

					currentTime.text($.formateTime(cTime));
					progressBtn.css('left',cTime*scale + 35);

				},200);

	});

	//控制视频大小
	$.resize('#resize',$video,720,1200,function(){
		if($video.width() == 720){
			$('#screenSize')
				.removeClass('icon-screen-min')
				.addClass('icon-screen-max');
		}
		adjustDisplay();
	});

	//显示音量
	body.delegate('#icon-volume', 'click', function() {
		if(!visible){
			iconVolume.children().stop(true,true).fadeIn();
			visible = true;
		}else{
			iconVolume.children().stop(true,true).fadeOut();
			visible = false;
		}
	});
	body.delegate('#icon-volume', 'mouseout', function() {
		if(visible){
			iconVolume.children().delay(5000).fadeOut();
			visible = false;
		}
	});
	body.delegate('#icon-volume', 'dbclick', function() {
		if(iconVolume.is('.icon-volume')){
			iconVolume.removeClass('icon-volume').addClass('icon-mute');
			adjustVol(0);
		}else{
			iconVolume.removeClass('icon-mute').addClass('icon-volume');
			adjustVol();
		}
	});

	//调节音量
	$.drag('#volumeBtn',false,'y','#volumeBar',function(){
		adjustVol();		
	});

	//关闭视频窗口
	body.delegate('#close', 'click', function() {
		_video.pause();
		videoWrap.stop(true,true).fadeOut();
		//初始化播放器
		_video.currentTime = 0;
		$video.css('width',720);
		adjustDisplay();
		playBtn.removeClass('icon-pause').add('icon-play');
		$('#screenSize')
			.removeClass('icon-screen-min')
			.addClass('icon-screen-max');
	});

	//键盘控制
	win.on('keydown',function(e){
		if(e.which == 32){
			togglePlay();
		}
		if(e.which == 27 && screenSize.is('.icon-screen-min')){
			toggleFullScreen();
		}
	});

	//辅助函数
	function adjustDisplay(){
		videoWrap.css({
			'width' : $video.width(),
			'height': $video.height()
		});
		$.centralize(videoWrap);
		progressBar.css('width',currentTime.position().left - 50);
	}

	function adjustVol(_tarVol){
		if(_tarVol || _tarVol === 0){
			_video.volume = _tarVol;
		}else{
			var scale = (volumeBar.height() - volumeBtn.height())/1;
			var volume = Math.abs((volumeBtn.position().top)/scale)
							.toFixed(2) - 0.09;

			_video.volume = volume < 0 ? 0 : volume = volume > 1 ? 1 : volume;
		}
	}

	function togglePlay(){
		if(playBtn.is('.icon-play')){
			playBtn.removeClass('icon-play').addClass('icon-pause');
			_video.pause();
		}else{
			playBtn.removeClass('icon-pause').addClass('icon-play');
			_video.play();
		}
	}

	function toggleFullScreen(){
		if(screenSize.is('.icon-screen-max')){
			$video.css('width', win.width()*0.9);
			screenSize.
				removeClass('.icon-screen-max')
				.addClass('icon-screen-min');			
			adjustDisplay();			
		}else{
			$video.css('width',720);
			screenSize
				.removeClass('icon-screen-min')
				.addClass('icon-screen-max');			
			adjustDisplay();
		}
	}

}