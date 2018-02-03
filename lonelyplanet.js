{/* <li class="selected-tabs">
    <div class="tabs">
        <span class="num">1</span>
        <span class="tab-title"></span>
    </div>
</li> */}
$(function(){
    var contents = [
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/dHJhdmVsX3ByZWRpY3Rpb25zXzIwMTguanBnRnJpIERlYyAyOSAyMDE3IDEwOjAxOjM0IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)", 
            "title": "Drones, dating and detoxes: seven travel predictions for 2018"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y2FuYWxfdmVuaWNlX2xvbmVseXBsYW5ldC5qcGdXZWQgRGVjIDI3IDIwMTcgMTE6Mzc6NTcgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500)", 
            "title": "More than skin deep: where to seek the soul of the city"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/b3BlcmFiYWxsX3ZpZW5uYV9sb25lbHlwbGFuZXQuanBnRnJpIERlYyAyMiAyMDE3IDExOjQ0OjMwIEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)", 
            "title": "Where to go in January for culture"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Zm9vZF9wZXJ1X2xvbmVseXBsYW5ldC5qcGdXZWQgRGVjIDIwIDIwMTcgMTA6MTU6NDYgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500)",
            "title": "A journary through Peru's culinary hotspots"
        },
        // {
        //     "background-image":"linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y291cGxlb25iZWFjaF9sb25lbHlwbGFuZXQuanBnV2VkIERlYyAyMCAyMDE3IDEwOjAxOjI5IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)",
        //     "title":"Places that sound perfect for a festival escape"
        // },
        // {
        //     "background-image":"linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y2VudHJhbHBhcmtfbmV3eW9ya2NpdHlfbG9uZWx5cGxhbmV0LmpwZ1R1ZSBEZWMgMTkgMjAxNyAwOTozNDozOSBHTVQrMDAwMCAoVVRDKQ%3D%3D.jpg?q=40&sharp=10&w=2500)",
        //     "title": "Best things to do in winter in NewYork City"
        // }
    ];
    $.each(contents, function(index, objs){
        $spanNum = $("<span class='num'></span>");
        $spanNum.text(index+1);
        $spanTabtitle = $("<span class='tab-title'></span>");
        $spanTabtitle.text(objs["title"]);
        $divTabs = $("<div class='tabs'></div>");                     
        $spanNum.appendTo($divTabs);
        $spanTabtitle.appendTo($divTabs);
        $li = $("<li></li>");  
        $divTabs.appendTo($li);
        $li.appendTo($(".tab-navigation"));
    }); 
});

function selectTab(selectedTab){
    var currentSelectedTab = $(".selected-tabs");
    // $(".selected-tabs").animate({"right": "50px"});
    currentSelectedTab.removeClass("selected-tabs");
    selectedTab.addClass("selected-tabs");
}

function fillCoverTitle(){
    var contents = [
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/dHJhdmVsX3ByZWRpY3Rpb25zXzIwMTguanBnRnJpIERlYyAyOSAyMDE3IDEwOjAxOjM0IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)", 
            "title": "Drones, dating and detoxes: seven travel predictions for 2018"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y2FuYWxfdmVuaWNlX2xvbmVseXBsYW5ldC5qcGdXZWQgRGVjIDI3IDIwMTcgMTE6Mzc6NTcgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500)", 
            "title": "More than skin deep: where to seek the soul of the city"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/b3BlcmFiYWxsX3ZpZW5uYV9sb25lbHlwbGFuZXQuanBnRnJpIERlYyAyMiAyMDE3IDExOjQ0OjMwIEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)", 
            "title": "Where to go in January for culture"
        },
        {
            "background-image": "linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Zm9vZF9wZXJ1X2xvbmVseXBsYW5ldC5qcGdXZWQgRGVjIDIwIDIwMTcgMTA6MTU6NDYgR01UKzAwMDAgKFVUQyk%3D.jpg?q=40&sharp=10&w=2500)",
            "title": "A journary through Peru's culinary hotspots"
        },
        // {
        //     "background-image":"linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y291cGxlb25iZWFjaF9sb25lbHlwbGFuZXQuanBnV2VkIERlYyAyMCAyMDE3IDEwOjAxOjI5IEdNVCswMDAwIChVVEMp.jpg?q=40&sharp=10&w=2500)",
        //     "title":"Places that sound perfect for a festival escape"
        // },
        // {
        //     "background-image":"linear-gradient(to right top, #000000, rgba(0,0,0, 0) 56%), url(https://lonelyplanetstatic.imgix.net/copilot/images/Y2VudHJhbHBhcmtfbmV3eW9ya2NpdHlfbG9uZWx5cGxhbmV0LmpwZ1R1ZSBEZWMgMTkgMjAxNyAwOTozNDozOSBHTVQrMDAwMCAoVVRDKQ%3D%3D.jpg?q=40&sharp=10&w=2500)",
        //     "title": "Best things to do in winter in NewYork City"
        // }
    ];
    var index = $(".selected-tabs").index();
    var backgroundimg = contents[index]["background-image"];
    var title =  contents[index]["title"];
    $(".background").css("background-image", backgroundimg);
    // $(".background").transition({ opacity: 0.1, scale: 0.3 }, 500, 'linear');
    
    // $(".background").css({"background-image": backgroundimg, "transform": "scale(1.2)"});
    $(".title a").text(title);
}


$(function(){
    selectTab($(".tab-navigation li").first());
    fillCoverTitle();
    var timer = setInterval(function(){
        if ($(".selected-tabs").index()==$(".tab-navigation li").last().index()){
            selectTab($(".tab-navigation li").first());
        }
        else{
            selectTab($(".selected-tabs").next());            
        }
        fillCoverTitle();
    }, 8000);
    $("ul.tab-navigation li").click(function(){
        clearInterval(timer);
        selectTab($(this));
        fillCoverTitle();
    });
});

// $(function(){
//     var timer = setInterval(function(){
//         $(".background").animate({"width": "110%", "height": "110%", "transform": "scale(1)"});   
//         // $(".background").css({"width": "100%", "height": "100%"});
//     }, 50);
// })

$(function(){
    $(".search span").click(function(){
        $(".search-results").css("display", "block");
        $(".cover").css("position", "fixed");
        $(".container").css("position", "fixed");
    });
    $(".cancle").click(function(){
        $(".search-results").css("display", "none");
        $(".cover").css("position", "relative");
        $(".container").css("position", "relative");
    });
})


{/* <div class="images">
    <div class="img-container">
        <p class="category">Travel gear and tech</p>
    </div>
</div> */}
function fillInspirationContent(min=0){
    // $(".images").addClass(function(){
    //     return min;
    // })
    var ImagesTitles = [
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/RmFtaWx5IHRyYXZlbCAxLnBuZ1R1ZSBBdWcgMjIgMjAxNyAxMDo0Mzo1NCBHTVQrMDAwMCAoVVRDKQ%3D%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Food and drink1"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/aG9saS5qcGdNb24gQXByIDAzIDIwMTcgMTA6Mjc6MTQgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Festivals2"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/SG9uZXltb29ucyBhbmQgcm9tYW5kIDIucG5nVHVlIEF1ZyAyMiAyMDE3IDEwOjE2OjM2IEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Honeymoon and romance3"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/VHJhdmVsIG9uIGEgYnVkZ2V0IDEucG5nVHVlIEF1ZyAyMiAyMDE3IDEwOjQzOjAzIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Travel on a budget4"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/QmFja3BhY2tpbmcgMS5wbmdUdWUgQXVnIDIyIDIwMTcgMDk6NDQ6MDUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Backpacking5"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/QWR2ZW50dXJlIDEucG5nVHVlIEF1ZyAyMiAyMDE3IDEwOjMwOjEwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Adventure travel6"},
        {"image": "url(https://b-ssl.duitang.com/uploads/item/201509/23/20150923150229_SyjBL.jpeg)", "title": "Family holidays7"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/QXJ0IGFuZCBjdWx0dXJlIDIucG5nVHVlIEF1ZyAyMiAyMDE3IDEwOjMwOjUwIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Art and culture8"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/Rm9vZCBhbmQgZHJpbmsgNC5wbmdUdWUgQXVnIDIyIDIwMTcgMTA6MTQ6MzMgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Family holidays9"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/QmVhY2hlcywgY29hc3RzIGFuZCBpc2xhbmRzIDIucG5nVHVlIEF1ZyAyMiAyMDE3IDA5OjQ0OjEyIEdNVCswMDAwIChVVEMp.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Beaches, coasts and islands10"},
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/VHJhdmVsIGdlYXIgYW5kIHRlY2ggMS5wbmdUdWUgQXVnIDIyIDIwMTcgMTA6NDI6NDcgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520)", "title": "Travel gear and tech11"},        
        {"image": "url(https://lonelyplanetstatic.imgix.net/copilot/images/c2h1dHRlcnN0b2NrXzY2MjM2MjQ4My5qcGdXZWQgQXVnIDE2IDIwMTcgMDg6NDU6MDcgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=322&h=520&crop=focalpont&fp-x=.95)", "title": "Road trips12"},        
    ];
    $.each(ImagesTitles, function(index, objs){
        // if (index>=min && index<min+4){
            $divImgcontainer = $("<div class='img-container'></div>");
            // var index = index;
            // $divImgcontainer.addClass(index);
            $pCategory = $("<p class='category'></p>");
            $pCategory.text(objs["title"]);
            $pCategory.appendTo($divImgcontainer);
            $divImgcontainer.css("background-image", "linear-gradient(-180deg, rgba(0,0,0, 0) 53%, #000 100%), "+objs["image"]);
            $a = $("<a></a>");
            $a.attr("href", "http://www.google.com");
            $divImgcontainer.appendTo($a);
            $a.appendTo($(".images"));         
        // }
    });
    var imgswidth = ImagesTitles.length * $(".img-container").outerWidth(true);
    var imgsloopwidth = $(".img-container").outerWidth(true)*4;
    $(".images").css("width", imgswidth);
    $(".imgs-loop").css("width", imgsloopwidth);
}

$(function(){
    fillInspirationContent();
});

$(function(){
    var translateLeft = $(".imgs-loop").width();
    $(".loop-left").click(function(){
        if ($(".images").css("left") == -translateLeft*2+"px"){
            $(".images").css("left", "0px");
        }
        else if ($(".images").css("left") == -translateLeft+"px"){
            $(".images").css("left", -translateLeft*2+"px");
        }
        else {
            $(".images").css("left", -translateLeft+"px");
        }
    });
});

$(function(){
    var translateLeft = $(".imgs-loop").outerWidth(true);    
    $(".loop-right").click(function(){
        if ($(".images").css("left") == -translateLeft*2+"px"){
            $(".images").css("left", "0px");
        }
        else if ($(".images").css("left") == -translateLeft+"px"){
            $(".images").css("left", -translateLeft*2+"px");
        }
        else {
            $(".images").css("left", -translateLeft+"px");
        }
    });
});

{/* <p class="content">
Perhaps best known for her novel The House of the Spirits, Allende has sold over 65 million books worldwide, giving readers a strong sense of her homeland’s idiosyncratic people and unforgettable landscapes. She talked to us about why Chile – Lonely Planet's best country to visit in 2018 – still fires her prodigious imagination.... 
<!-- <button class="text-more" type="more">Read More ></button> -->
<a class="more" href="http://www.baidu.com"><button class="text-more" type="more">Read More ></button></a>
</p> */}
$(function(){
    $(".text-more").click(function(){
        if ($(".text-more").css("display") == "flex"){
            // $(".text-more").remove()
            $textMore = $(".text-more").clone();
            $(".content").removeClass("more");
            $(".content").add($textMore);
        }
        else {
            $amore = $("<a class='more'></a>");
            $amore.attr("href", "https://www.lonelyplanet.com/chile/travel-tips-and-articles/lonely-planet-talks-to-novelist-isabel-allende/40625c8c-8a11-5710-a052-1479d276ba58");
            $(".text-more").appendTo($amore);
            $amore.appendTo($(".content"));
            $(".text-more").css({"display": "flex", "margin-top": "50px"});            
        }
    });
});

{/* <div class="video-boxes">
    <div class="box">
        <a href="http://www.google.com"><div class="play-icon"></div></a>
        <div class="video-image">
            <a href="https://www.baidu.com"></a>
        </div>
        <div class="video-name"><a href="http://www.google.com">Just back from: Swaziland</a></div>                    
    </div>
</div> */}
$(function(){
    var videos = [
        {"video-url": "https://www.lonelyplanet.com/video/just-back-from-swaziland/v/vid/430", "video-name": "Just back from: Swaziland", "video-image": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5535658643001-brightcove-just-back-from-swaziland-20170817-054802.jpg?sharp=10&q=50&w=430&h=250&fit=crop)"},
        {"video-url": "https://www.lonelyplanet.com/video/discover-new-zealands-best-beaches/v/vid/323", "video-name": "Discover New Zealand's best beaches", "video-image": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5456224509001-brightcove-discover-new-zealands-best-beaches-20170613-060232.jpg?sharp=10&q=50&w=430&h=250&fit=crop)"},
        {"video-url": "https://www.lonelyplanet.com/video/the-best-of-mount-everest/v/vid/309", "video-name": "The best of Mount Everest", "video-image": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5431811240001-brightcove-the-best-of-mount-everest-20170526-060328.jpg?sharp=10&q=50&w=430&h=250&fit=crop)"},
    ];
    $.each(videos, function(index, objs){
        $divPlayIcon = $("<div class='play-icon'></div>")
        $a = $("<a></a>");
        $a.attr("href", objs["video-url"]);
        $a.append($divPlayIcon);
        $divVideoImages = $("<div class='video-image'></div>");
        $divVideoImages.css("background-image", objs["video-image"]);
        // $divVideoImages.append($a);
        $divVideoName = $("<div class='video-name'></div>");
        $divVideoNameA = $("<a></a>");
        $divVideoNameA.attr("href", objs["video-url"]);
        $divVideoNameA.text(objs["video-name"]);
        $divVideoNameA.appendTo($divVideoName);
        if (index==1) {
            $divBox = $("<div class='box middle'></div>");
        }
        else {
            $divBox = $("<div class='box'></div>");
        }
        $divBox.append($divVideoImages);
        $divBox.append($divVideoName);
        $divBox.append($a);
        $divBox.appendTo($(".video-boxes"));
    });
});


{/* <div class="current-video">
    <div class="slide-video">
        <div class="video-play current">
            <a href="https://www.lonelyplanet.com/video/lonely-planets-best-country-to-visit-in-2018/v/vid/532">
                <video class="play-video" width="1160px" height="354px" autoplay="autoplay" loop="loop">
                    <source src="http://www.w3school.com.cn/i/movie.ogg" />
                </video>
                <div class="autoplay-video-title">Best in Travel 2018</div>
                <div class="playicon">
                    <div class="circle"></div>
                    <div class="play-icon-circle video"></div>
                </div>
            </a>
        </div>
        <div class="video-play">
            <a href="https://www.lonelyplanet.com/video/lonely-planets-best-country-to-visit-in-2018/v/vid/532">
                <div class="current-video-title">Lonely Planet's best country to visit in 2018</div>
                <div class="current-video-intro">Lonely Planet writer Mark Johanson travels the length of Chile – from the Patagonian fjords of the south to the Atacama Desert in the north...</div>
                <div class="playicon">
                    <div class="circle image"></div>
                    <div class="play-icon-circle"></div>
                </div>
            </a>
        </div>
    </div>
</div> */}
$(function(){
    var videoInfos = [
        {"videoTitle": "Best in Travel 2018", "videoUrl": "/video/lonely-planets-best-country-to-visit-in-2018/v/vid/532", "sourceUrl": "http://www.w3school.com.cn/i/movie.ogg", "post": "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=1290&h=354&fit=crop"},
        {"videoTitle": "Lonely Planet's best country to visit in 2018", "videoIntro": "Lonely Planet writer Mark Johanson travels the length of Chile – from the Patagonian fjords of the south to the Atacama Desert in the north...", "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400588001-brightcove-lonely-planets-best-country-to-visit-in-2018-20171026-052235.jpg?sharp=10&q=40&w=1290&h=354&fit=crop)", "videoUrl": "/video/lonely-planets-best-country-to-visit-in-2018/v/vid/532"},
        {"videoTitle": "Lonely Planet's best city to visit in 2018", "videoIntro": "Lonely Planet writer Cristian Bonetto is blown away by Seville's food...", "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615428536001-brightcove-lonely-planets-best-city-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=40&w=1290&h=354&fit=crop)", "videoUrl": "/video/lonely-planets-best-region-to-visit-in-2018/v/vid/535"},
        {"videoTitle": "Lonely Planet's best region to visit in 2018", "videoIntro": "Lonely Planet writer Louise Bastock explores Belfast...", "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615409469001-brightcove-lonely-planets-best-region-to-visit-in-2018-20171028-052138.jpg?sharp=10&q=40&w=1290&h=354&fit=crop)", "videoUrl": "/video/lonely-planets-best-city-to-visit-in-2018/v/vid/541"},
        {"videoTitle": "Lonely Planet's best value destination to visit in 2018", "videoIntro": "Lonely Planet writer Shawn Low dives into the Estonian capital's Soviet past...", "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615445675001-brightcove-lonely-planets-best-value-destination-to-visit-in-2018-20171028-052138.jpg?sharp=10&q=40&w=1290&h=354&fit=crop)", "videoUrl": "/video/lonely-planets-best-value-destination-to-visit-in-2018/v/vid/544"},
    ];
    $.each(videoInfos, function(index, objs){
        $a = $("<a></a>");
        $a.attr("href", "https://www.lonelyplanet.com" + objs["videoUrl"]);
        if (index==0) {
            $curvideoPlay = $("<div class='video-play current'></div>");
            $videoplayVideo = $("<video class='play-video' controls muted></video>");
            // $videoplayVideo.attr({autoplay: "autoplay", loop: "loop", width: "1160px", height:"354px", src: objs["sourceUrl"], poster: objs["post"]});
            $videoplayVideo.attr({width: "1160px", height:"354px", src: objs["sourceUrl"], poster: objs["post"]});
            $divautovideoTitle = $("<div class='autoplay-video-title'></div>");
            $divautovideoTitle.text(objs["videoTitle"]);
            $divplayIcon = $("<div class='playicon'></div>");
            $divCircle = $("<div class='circle'></div>");
            $divplayiconCircleVideo = $("<div class='play-icon-circle video'></div>");
            $divplayIcon.append($divCircle);
            $divplayIcon.append($divplayiconCircleVideo);
            $videoplayVideo.appendTo($a);
            $divautovideoTitle.appendTo($a);
            $divplayIcon.appendTo($a);
            $curvideoPlay.append($a);
        }
        else {
            $curvideoPlay = $("<div class='video-play'></div>");            
            $divvideoTitle = $("<div class='current-video-title'></div>");
            $divvideoTitle.text(objs["videoTitle"]);
            $divvideoIntro = $("<div class='current-video-intro'></div>");
            $divvideoIntro.text(objs["videoIntro"]);
            $divplayIcon = $("<div class='playicon'></div>");
            $divCircleImage = $("<div class='circle image'></div>");
            $divplayiconCircle = $("<div class='play-icon-circle'></div>");
            $divplayIcon.append($divCircleImage);
            $divplayIcon.append($divplayiconCircle);
            $a.append($divvideoTitle);
            $a.append($divvideoIntro);
            $a.append($divplayIcon);
            $a.appendTo($curvideoPlay);
            $curvideoPlay.css("background-image", objs["backgroundImage"]); 
        }
        $curvideoPlay.appendTo($(".slide-video"));
    });
});


$(function(){
    $(".loop-right.playicon").click(function(){
        var currentElem = $(".video-play.current");
        currentElem.removeClass('current');
        if (currentElem.next().length==0) {
            $(".video-play").first().addClass('current');
        }
        else {
            currentElem.next().addClass('current');   
        }
    });
})

{/* <div class="video-classify">
        <div class="classifyname">
            <a href="/video/explore-every-day/v/cha/4">
                <span class="classify_title">Explore every day</span>
                <span class="view_all">view All ></span>
            </a>
        </div>
        <div class="video_cards">
            <div class="slide-video-cards">
                <a href="/video/discover-5-unusual-honeymoons/v/vid/613?tag=eed">
                    <div class="card first">
                        <div class="video_image"></div>
                        <div class="cover_hover">
                            <div class="hover_image"></div>
                            <div class="playicon_small">
                                <div class="circle_image_small"></div>
                                <div class="play_icon_circle_small"></div>
                            </div>
                        </div>
                        <div class="video_name">Discover 5 unusual honeymoons</div>
                    </div>
                </a>
            </div>
        </div>
        <div class="loop-left small">></div>
        <div class="loop-right small">></div> 
    </div> */}
$(function(){
    var videos = [
        {
            "classifyTitle": "Best in Travel 2018", 
            "classifyUrl": "/video/best-in-travel-2018/v/cha/10",
            "pictures": [
                {
                    "videoUrl": "/video/lonely-planets-best-destinations-to-visit-in-2018/v/vid/542?tag=bit18",
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400608001-brightcove-lonely-planets-best-destinations-to-visit-in-2018-20171028-052139.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Lonely Planet's best destinations to visit in 2018"
                },
                {
                    "videoUrl": "/video/lonely-planets-best-region-to-visit-in-2018/v/vid/535?tag=bit18",
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615409469001-brightcove-lonely-planets-best-region-to-visit-in-2018-20171028-052138.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Lonely Planet's best region to visit in 2018"
                },
                {
                    "videoUrl": "/video/coasteering-in-northern-ireland/v/vid/536?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615377174001-brightcove-coasteering-in-northern-ireland-20171123-061954.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Coasteering in Northern Ireland"
                },
                {
                    "videoUrl": "/video/seaweed-foraging-on-the-causeway-coast/v/vid/538?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615400596001-brightcove-seaweed-foraging-on-the-causeway-coast-20171027-052003.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Seaweed foraging on the Causeway Coast"
                },
                {
                    "videoUrl": "/video/traditional-music-and-dancing-in-belfast/v/vid/537?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615409475001-brightcove-traditional-music-and-dancing-in-belfast-20171027-052004.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Traditional music and dancing in Belfast"
                },
                {
                    "videoUrl": "/video/lonely-planets-best-value-destination-to-visit-in-2018/v/vid/544?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615445675001-brightcove-lonely-planets-best-value-destination-to-visit-in-2018-20171028-052138.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Lonely Planet's best value destination to visit in 2018"
                },
                {
                    "videoUrl": "/video/snorkelling-around-estonias-underwater-prison/v/vid/547?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615409493001-brightcove-snorkelling-around-estonias-underwater-prison-20171026-052121.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Snorkelling around Estonia's underwater prison"
                },
                {
                    "videoUrl": "/video/walking-along-the-edge-of-the-tallinn-tv-tower/v/vid/546?tag=bit18",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5615417042001-brightcove-walking-along-the-edge-of-the-tallinn-tv-tower-20171027-052005.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Walking along the edge of the Tallinn TV Tower"
                }
            ]
        },
        {
            "classifyTitle": "Explore every day",
            "classifyUrl": "/video/solo-travel-in-the-spiritual-heart-of-bali/v/vid/645?tag=eed",
            "pictures": [
                {
                    "videoUrl": "/video/just-back-from-valencia-spain/v/vid/644?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5708116457001-brightcove-solo-travel-how-to-get-away-from-it-all-in-bali-20180115-113229.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Solo travel in the spiritual heart of Bali"
                },
                {
                    "videoUrl": "/video/solo-travel-in-the-spiritual-heart-of-bali/v/vid/645?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5708113386001-brightcove-when-to-go-to-oman-20180112-131833.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "When to go to Oman"
                },
                {
                    "videoUrl": "/video/when-to-go-to-oman/v/vid/642?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5690893293001-brightcove-discover-5-unusual-honeymoons-20180110-110423.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Discover 5 unusual honeymoons"
                },
                {
                    "videoUrl": "/video/discover-5-unusual-honeymoons/v/vid/613?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5680600479001-brightcove-discover-le-morne-brabant-mauritius-20171223-062018.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Discover Le Morne Brabant, Mauritius"
                },
                {
                    "videoUrl": "/video/discover-le-morne-brabant-mauritius/v/vid/603?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5680585158001-brightcove-when-to-go-to-bolivia-20171223-062018.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "When to go to Bolivia"
                },
                {
                    "videoUrl": "/video/when-to-go-to-bolivia/v/vid/600?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5680580506001-brightcove-the-worlds-most-colourful-natural-wonders-20171223-062019.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "The world's most colourful natural wonders"
                },
                {
                    "videoUrl": "/video/the-worlds-most-colourful-natural-wonders/v/vid/599?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5672778704001-brightcove-discover-mexico-away-from-the-crowds-20171219-063242.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Discover Mexico away from the crowds"
                },
                {
                    "videoUrl": "/video/discover-mexico-away-from-the-crowds/v/vid/591?tag=eed",
                    
                    "backgroundImage": "url(https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5670263399001-brightcove-just-back-from-amsterdam-and-beyond-20171215-062107.jpg?sharp=10&q=50&w=430&h=250&fit=crop)",
                    "classifyName": "Just back from: Amsterdam and beyond"
                }
            ]
        },
    ];
    $.each(videos, function(index, objs){
        $divvideoClassify = $("<div class='video-classify'></div>");
        $divclassifyName = $("<div class='classifyname'></div>");
        $divclassifynameA = $("<a></a>");
        $divclassifynameA.attr("href", "https://www.lonelyplanet.com" + objs["classifyUrl"]);
        $spanclassifyTitle = $("<span class='classify_title'></span>");
        $spanclassifyTitle.text(objs["classifyTitle"]);
        $spanviewAll = $("<span class='view_all'></span>");
        $spanviewAll.text("view All >");
        $spanclassifyTitle.appendTo($divclassifynameA);
        $spanviewAll.appendTo($divclassifynameA);
        $divclassifyName.append($divclassifynameA);

        $divvideoCards = $("<div class='video_cards'></div>");
        $divslidevideoCards = $("<div class='slide-video-cards'></div>");

        $.each(objs["pictures"], function(index2, objs2){
            $divslidevideocardsA = $("<a></a>");
            $divslidevideocardsA.attr("href", "https://www.lonelyplanet.com" + objs2["videoUrl"]);
            if (index2%4==0) {
                $divCard = $("<div class='card first'></div>");                
            }
            else if (index2%4==3) {
                $divCard = $("<div class='card last'></div>");  
            }
            else {
                $divCard = $("<div class='card'></div>");                
            }
            $divvideoImage = $("<div class='video_image'></div>");
            $divvideoImage.css("background-image", objs2["backgroundImage"]);
            $divcoverHover = $("<div class='cover_hover'></div>");
            $divhoverImage = $("<div class='hover_image'></div>");
            $divplayiconSmall = $("<div class='playicon_small'></div>");
            $divcircleimageSmall = $("<div class='circle_image_small'></div>");
            $divplayiconcircleSmall = $("<div class='play_icon_circle_small'></div>");
            $divcircleimageSmall.appendTo($divplayiconSmall);
            $divplayiconcircleSmall.appendTo($divplayiconSmall);
            $divcoverHover.append($divhoverImage);
            $divcoverHover.append($divplayiconSmall);
            $divvideoName = $("<div class='video_name'></div>");
            $divvideoName.text(objs2["classifyName"]);
            $divCard.append($divvideoImage);
            $divCard.append($divcoverHover);
            $divCard.append($divvideoName);
            $divCard.appendTo($divslidevideocardsA);
            $divslidevideocardsA.appendTo($divslidevideoCards);
        });
        $divslidevideoCards.appendTo($divvideoCards);
        $divloopleftSmall = $("<div class='loop-left small'></div>");
        $divloopleftSmall.text("<");
        $divlooprightSmall = $("<div class='loop-right small'></div>");
        $divlooprightSmall.text(">");
        $divvideoClassify.append($divclassifyName);
        $divvideoClassify.append($divvideoCards);
        $divvideoClassify.append($divloopleftSmall);
        $divvideoClassify.append($divlooprightSmall);
        $("body").append($divvideoClassify);
        var slidevideoCardsWidth = $(".card.first").outerWidth(true) + ($(".card").outerWidth(true)+8)*2 + $(".card.last").outerWidth(true);
        $(".slide-video-cards").css("width", slidevideoCardsWidth*2);    
    });
});

$(function(){
    $(".loop-right.small").click(function(){
        $(this).siblings().children(".slide-video-cards").css("left", "-1160px");
        $(this).css("display", "none");
        $(this).siblings(".loop-left.small").css("display", "block");
    });
    $(".loop-left.small").click(function(){
        $(this).siblings().children(".slide-video-cards").css("left", "0px");
        $(this).css("display", "none");
        $(this).siblings(".loop-right.small").css("display", "block");
    });
});