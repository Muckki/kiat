
/**************************************************************
    LAST DATE: 22.05.30
    DESCRIPTION: 설문조사 팝업 형태의 폼
****************************************************/

$(function(){
    $(".btn").click(function(){
        $("input[type=checkbox]").prop("checked", false);
        $("input[type=radio]").prop("checked", false);
        modalOpen();
        //alert("설문조사 기간이 종료되었습니다.\n설문조사 기간: 22.08.08.(월) ~ 22.08.15.(월)");
    })
    /* 
    //배경 닫기 주석
    $("html").click(function(e){
        
        if($(e.target).hasClass('modal-bg')){
            
            modalClose();
        }
    })
    */
    $(".closeBtn").click(function(){
        
        modalClose();
    })


    function modalOpen(){
        
        $("body").addClass('fixed-scroll');
        $(".modal-survey").show();
        $(".modal-survey").addClass('on');
    }
    function modalClose(){
        $(".modal-survey-box").animate(
            {scrollTop:0},
        0)
        $("body").removeClass('fixed-scroll');
        $(".modal-survey").hide();
        $(".modal-survey").removeClass('on');
        // 모달 껐을 때 슬릭 종료 (모달 껐을 때 슬라이드 맨 첨으로 돌리고 싶으면 활성화)
        //$('.slide-box').slick("unslick")
    }
    
    

})