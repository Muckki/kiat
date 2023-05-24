
/**************************************************************
    LAST DATE: 22.05.30
    DESCRIPTION: 기타란이 있는 질문에서 'video-select'를 수정하여 사용
****************************************************/

$(function(){
    /* 기타 문항 체크 시, 나머지 문항 체크 해제 */
    $(".onlySelect").find("label").click(function(){
        if($(this).not(".onlyCheck")){
            $(this).siblings(".onlyCheck").find("input").prop("checked", false);
        }
    })
    $(".onlyCheck").click(function(){
        $(this).siblings("label").find("input").prop("checked", false);
        $(this).find("input").prop("checked", true);
    })

    /* 해당 문항 체크 노출/미노출 */
    $('.belong03_01').hide();
    $('.belong03 input').click(function(){
        if($('.belong03_chk').is(":checked")){
            $('.belong03_01').show();
        }else{
            $("input[name=career]").prop("checked", false);
            $('.belong03_01').hide();    
        }
    });
    $('.katKnow02_01').hide();
    $('.katKnow02 input').click(function(){
        if($('.katKnow02_chk').is(":checked")){
            $('.katKnow02_01').show();
        }else{
            $("input[name=snsKonw]").prop("checked", false);
            $('.katKnow02_01').hide();    
        }
    });
    $('.news01_01').hide();
    $('.news01 input').click(function(){
        if($('.news03_chk').is(":checked")){
            $('.news01_01').show();
        }else{
            $("input[name=snsNews]").prop("checked", false);
            $('.news01_01').hide();    
        }
    });

})