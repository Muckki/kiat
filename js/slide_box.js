$(function(){
    $(".btn").click(function(){
        $(".slide-box").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed:100,
            infinite:false,
            swipe:true
        })
        if($(".slick-slide:nth-child(1)").hasClass("slick-current")){
            $(".slide-box .slick-arrow.slick-prev").hide();
        }else{
            $(".slide-box .slick-arrow.slick-prev").show();
        }
        if($(".slick-slide:nth-child(4)").hasClass("slick-current")){
            $(".slide-box .slick-arrow.slick-next").hide();
        }else{
            $(".slide-box .slick-arrow.slick-prev").show();
        }
    })

    
})

