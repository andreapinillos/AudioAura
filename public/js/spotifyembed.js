$('.playlistbutton').click(function() {
             event.preventDefault(); 
             $('#the-player').html($("textarea.embed-code").val());
 
            });

$('.playlistbutton').click(function () {
    switch (c) {
        case 1:
        $('#the-player').html($("textarea.embed-code-red").val());
             break;
        case 2:
        $('#the-player').html($("textarea.embed-code-pink").val());
             break;
        case 3:
        $('#the-player').html($("textarea.embed-code-orange").val());
             break;
        case 4:
        $('#the-player').html($("textarea.embed-code-yellow").val());
             break;
        case 5:
        $('#the-player').html($("textarea.embed-code-green").val());
             break;
        case 6:
        $('#the-player').html($("textarea.embed-code-blue").val());
             break;
        case 7:
        $('#the-player').html($("textarea.embed-code-purple").val());
             break;
        case 8:
        $('#the-player').html($("textarea.embed-code-brown").val());
             break;
        case 9:
        $('#the-player').html($("textarea.embed-code-white").val());
             break;
        case 10:
        $('#the-player').html($("textarea.embed-code-grey").val());
             break;
    }
});


// $('bars').on('click',function(){
//     $(this).css('color','red').siblings('').css('color','black');
// });

// $('#redRect').on('click',function(){
//     $('.redBlock').css("opacity", "1");
//     $('.redBlocks').css("box-shadow", "0 0 20px red");
//     $("#currentMood").text("Passionate");

// });


// $('.colors').click(function() {
//     $(this).siblings('.bars').removeClass('active');
//     $(this).addClass('active');
// });
var c = 0;
$('.bars').click(function () {
    switch ($(this).attr('id')) {
        case 'redRect':
        c = 1;
        $('.redBlock').css("opacity", "1");
        $('.redBlocks').css("box-shadow", "0 0 20px red");
        $("#currentMood").text("Passionate");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'pinkRect':
        c = 2;
        $('.pinkBlock').css("opacity", "1");
        $('.pinkBlocks').css("box-shadow", "0 0 20px pink");
        $("#currentMood").text("Cheery");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'orangeRect':
        c = 3;
        $('.orangeBlock').css("opacity", "1");
        $('.orangeBlocks').css("box-shadow", "0 0 20px orange");
        $("#currentMood").text("Energetic");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'yellowRect':
        c = 4;
        $('.yellowBlock').css("opacity", "1");
        $('.yellowBlocks').css("box-shadow", "0 0 20px yellow");
        $("#currentMood").text("Happy");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'greenRect':
        c = 5;
        $('.greenBlock').css("opacity", "1");
        $('.greenBlocks').css("box-shadow", "0 0 20px #1ed760");
        $("#currentMood").text("Calm");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'blueRect':
        c = 6;
        $('.blueBlock').css("opacity", "1");
        $('.blueBlocks').css("box-shadow", "0 0 20px #3EABFD");
        $("#currentMood").text("Determined");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'purpleRect':
        c = 7;
        $('.purpleBlock').css("opacity", "1");
        $('.purpleBlocks').css("box-shadow", "0 0 20px #A855FC");
        $("#currentMood").text("Romantic");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'brownRect':
        c = 8;
        $('.brownBlock').css("opacity", "1");
        $('.brownBlocks').css("box-shadow", "0 0 20px #906638");
        $("#currentMood").text("Concerned");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'whiteRect':
        c = 9;
        $('.whiteBlock').css("opacity", "1");
        $('.whiteBlocks').css("box-shadow", "0 0 20px white");
        $("#currentMood").text("Serene");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.greyBlock').css( "opacity", ".6" );
        $('.greyBlocks').css("box-shadow", "0 0 0 0");
             break;
        case 'greyRect':
        c = 10;
        $('.greyBlock').css("opacity", "1");
        $('.greyBlocks').css("box-shadow", "0 0 20px #808080");
        $("#currentMood").text("Sad");
        $('.redBlock').css( "opacity", ".6" );
        $('.redBlocks').css("box-shadow", "0 0 0 0");
        $('.pinkBlock').css( "opacity", ".6" );
        $('.pinkBlocks').css("box-shadow", "0 0 0 0");
        $('.orangeBlock').css( "opacity", ".6" );
        $('.orangeBlocks').css("box-shadow", "0 0 0 0");
        $('.yellowBlock').css( "opacity", ".6" );
        $('.yellowBlocks').css("box-shadow", "0 0 0 0");
        $('.greenBlock').css( "opacity", ".6" );
        $('.greenBlocks').css("box-shadow", "0 0 0 0");
        $('.blueBlock').css( "opacity", ".6" );
        $('.blueBlocks').css("box-shadow", "0 0 0 0");
        $('.purpleBlock').css( "opacity", ".6" );
        $('.purpleBlocks').css("box-shadow", "0 0 0 0");
        $('.brownBlock').css( "opacity", ".6" );
        $('.brownBlocks').css("box-shadow", "0 0 0 0");
        $('.whiteBlock').css( "opacity", ".6" );
        $('.whiteBlocks').css("box-shadow", "0 0 0 0");
             break;
    }
});

// $("#redRect").on({
//     mouseenter: function(){
//         $(this).css("opacity", "1");
//     }, 
//     mouseleave: function(){
//         $(this).css("opacity", ".6");
//     }, 
//     click: function(){
//         $(this).css("opacity", "1");
//         $(this).off("mouseleave")
//     } 
// });


// $("#redRect").mouseover(function(){
//     $("#currentMood").text("Passionate");
// });

// $("#pinkRect").mouseover(function(){
//     $("#currentMood").text("Cheerful");
// });

// $("#orangeRect").mouseover(function(){
//     $("#currentMood").text("Energetic");
// });

// $("#yellowRect").mouseover(function(){
//     $("#currentMood").text("Happy");
// });

// $("#greenRect").mouseover(function(){
//     $("#currentMood").text("Calm");
// });

// $("#blueRect").mouseover(function(){
//     $("#currentMood").text("Determined");
// });

// $("#purpleRect").mouseover(function(){
//     $("#currentMood").text("Romantic");
// });

// $("#brownRect").mouseover(function(){
//     $("#currentMood").text("Concerned");
// });

// $("#whiteRect").mouseover(function(){
//     $("#currentMood").text("Serene");
// });

// $("#greyRect").mouseover(function(){
//     $("#currentMood").text("Sad");
// });

