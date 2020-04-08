//youtube script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var video1;
var video2;
var video3;
var video4;
var video5;

onYouTubeIframeAPIReady = function () {
    video1 = new YT.Player('video-1', {
        height: '350',
        width: '600',
        videoId: 'Cd0JH1AreDw',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
    video2 = new YT.Player('video-2', {
        height: '350',
        width: '400',
        videoId: 'JXjgFrO07-M',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
     video3 = new YT.Player('video-3', {
        height: '350',
        width: '500',
        videoId: 'AEKy1AS75Zs',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
     video4 = new YT.Player('video-4', {
        height: '350',
        width: '500',
        videoId: '-WLHr1_EVtQ',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
     video5 = new YT.Player('video-5', {
        height: '350',
        width: '500',
        videoId: 'e4PTvXtz4GM',  // youtube video id
        playerVars: {
            'autoplay': 0,
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

$(".video-player").hide();

onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
        $(this).parents('.media').find('.media-body').fadeIn('normal');
    }
}

$(document).on('click', '.Btn_play_video', function () {
    $(this).hide();
    $(this).parents('.media.featured').find('.media-body').hide();
    $(this).parents('.media').find(".video-player").show();
    $(this).parents('.media').find('.video-thumbnail').hide();
    var playNum = $(this).parents('.media').find(".video-player").attr('id');
    if (playNum =="video-1") {
        video1.playVideo();
    }
    if (playNum =="video-2") {
        video2.playVideo();
    }
    if (playNum =="video-3") {
        video3.playVideo();
    }
    if (playNum =="video-4") {
        video4.playVideo();
    }
    if (playNum =="video-5") {
        video5.playVideo();
    }
});