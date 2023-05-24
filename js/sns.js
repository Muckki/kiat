$(function(){
    $(".share").click(function(){
        $('.sns-share').show();
    })
    $(".sns-share").find('.share-modal-close').click(function(){
        $('.sns-share').hide();
    })
})


function fn_sendFB(sns) {
    var thisUrl = document.URL;
    var snsTitle = "한국산업기술진흥원 콘텐츠 만족도 조사 유튜브 편";


    if( sns == 'facebook' ) {
        var url = "http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(thisUrl);
        window.open(url, "", "width=486, height=286");
    } else if( sns == 'twitter' ) {
        var url = "http://twitter.com/share?url="+encodeURIComponent(thisUrl)+"&text="+encodeURIComponent(snsTitle);
        window.open(url, "tweetPop", "width=486, height=286,scrollbars=yes");
    }
}




$(function(){
    Kakao.init('3aec34f864efb68ac68e4dfe6cda37e3');

    Kakao.Link.createDefaultButton({
        container: '#btnKakao', // 카카오공유버튼ID
        objectType: 'feed',
        content: {
            title: "한국산업기술진흥원", // 보여질 제목
            description: "한국산업기술진흥원의 콘텐츠 만족도 조사 유튜브 편에 참여해 경품을 받아가세요!", // 보여질 설명
            imageUrl: 'kiat-survey.or.kr', // 콘텐츠 URL
            link: {
                mobileWebUrl: 'kiat-survey.or.kr',
                webUrl: 'kiat-survey.or.kr'
            }
        }
    });
})

$(".share-modal").click(function(e){
    $(".share-modal-content").click(function(){
        return false;
    })
    $(".sns-share").hide();
    

})