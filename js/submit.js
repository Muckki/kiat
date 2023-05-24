$(function(){
    $("#submit").click(function(){
        
        /*****************************************
            개인정보 수집 및 이용 동의 확인
        *****************************************/
        if(!$("#privacy").is(":checked")){
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return false;
        }
        /*****************************************
            이름, 전화번호 입력 안했을 시 얼럿 창 
        *****************************************/
        var tel = $("input[name=tel]").val();
        var name = $("input[name=name").val();
        var tel_str = tel.length;
        if(name == ""){
            alert("이름을 입력해주세요.");
            return false;
        }
        if(!(tel_str == 11)){
            alert("전화번호 11자리를 정확하게 입력해주세요.");
            return false;
        }
        /*****************************************
            전화번호 중복 체크
        *****************************************/
        var ps = {
            "tel": tel
        }
        
        $.ajax({
            url: "../admin/check.php",
            type: "post",
            data: ps,
            dataType: "json",
            success: function(data){
                submit();
            },
            error: function(){
                alert("설문조사에 한 번만 참여할 수 있습니다.");
            }
        })

        /*****************************************
            정보 전송
        *****************************************/
        function submit(){

            if(questionCheck()){

                /* 개인정보 동의 텍스트 */
                if($(".privacy-check").find("input[type='checkbox']").is(":checked")){
                    var privacy_check = "Y";
                }

                /*
                if($(".video-select").find("input#video_select_etc").is(":checked")){
                    var video_select = $("input[name=video_select]:checked").siblings("textarea").val();
                    if(video_select === ""){
                        alert("7번 문항의 기타에 내용을 입력해주세요.");
                        return false;
                    }
                }else{
                    var video_select = $("input[name=video_select]:checked").siblings("span").text();
                }
                */

                if($(".katKnow02").find("input#katKnow_09").is(":checked")){
                    var katKnow = $("input[name=katKnow]:checked").siblings("textarea").val();
                    if(katKnow === ""){
                        alert("한국산업기술진흥원(KAT)을 어떻게 알게 되었나요? 의 기타에 내용을 입력해주세요.");
                        return false;
                    }
                }else{
                    var katKnow = $("input[name=katKnow]:checked").siblings("span").text();
                }
                
                if($(".news01").find("input#news_06").is(":checked")){
                    var news = $("input[name=news]:checked").siblings("textarea").val();
                    if(news === ""){
                        alert("평소 한국산업기술진흥원(KIAT)에 대한 소식을 어떤 경로를 통해 접하고 있나요? 의 기타에 내용을 입력해주세요.");
                        return false;
                    }
                }else{
                    var news = $("input[name=news]:checked").siblings("span").text();
                }
    
                if($(".prMediaY02").find("input#prMediaY_08").is(":checked")){
                    var prMediaY = $("input[name=prMediaY]:checked").siblings("textarea").val();
                    if(prMediaY === ""){
                        alert("한국산업기술진흥원(KIAT)이 잘 운영하고 있는 홍보 미디어는 무엇이라고 생각하나요? 의 기타에 내용을 입력해주세요.");
                        return false;
                    }
                }else{
                    var prMediaY = $("input[name=prMediaY]:checked").siblings("span").text();
                }
    
                if($(".prMediaN03").find("input#prMediaN_08").is(":checked")){
                    var prMediaN = $("input[name=prMediaN]:checked").siblings("textarea").val();
                    if(prMediaN === ""){
                        alert("한국산업기술진흥원(KIAT)이 잘 운영하고 있지 못 한 홍보 미디어는 무엇이라고 생각하나요? 의 기타에 내용을 입력해주세요.");
                        return false;
                    }
                }else{
                    var prMediaN = $("input[name=prMediaN]:checked").siblings("span").text();
                }

                

                
                
                /* 다중 선택 질문의 경우 params에 저장하여 제출 */
                var params = {
                    "name": $("input[name=name]").val(),
                    "tel": $("input[name=tel]").val(),
                    "gender": $("input[name=gender]:checked").siblings('span').text(),
                    "age": $("input[name=age]:checked").siblings('span').text(),
                    
                    "belong": $("input[name=belong]:checked").siblings('span').text(),
                    "career": $("input[name=career]:checked").siblings('span').text(),
                    "agency": $("input[name=agency]:checked").siblings('span').text(),
                    "katKnow": $(".question").find("input[name=katKnow]:checked").siblings("span").text(),
                    "katKnowText": $(".katKnowText").val(),
                    "snsKonw": $(".question").find("input[name=snsKonw]:checked").siblings("span").text(),
                    "know": $("input[name=know]:checked").siblings('span').text(),
                    "role": $(".question").find("input[name=role]:checked").siblings("span").text(),                   
                    "target": $(".question").find("input[name=target]:checked").siblings("span").text(),
                    "news": $(".question").find("input[name=news]:checked").siblings("span").text(),
                    "newsText": $(".newsText").val(),
                    "snsNews": $(".question").find("input[name=snsNews]:checked").siblings("span").text(),
                    "prMediaY": $(".question").find("input[name=prMediaY]:checked").siblings("span").text(),
                    "prMediaYtext": $(".prMediaYtext").val(),
                    "prMediaN": $(".question").find("input[name=prMediaN]:checked").siblings("span").text(),
                    "prMediaNtext": $(".prMediaNtext").val(),
                    "contentSatis": $("input[name=contentSatis]:checked").siblings('span').text(),
                    "contentHope": $(".question").find("input[name=contentHope]:checked").siblings("span").text(),
                    "opinion": $(".opinion").find("textarea.opinion").val(),
                    "privacy_check": privacy_check
                    
                };
                $.ajax({
                    url: "../admin/survey_data.php",
                    type: "post",
                    data: params,
                    dataType: "json",
                    success: function(data){
                        alert("제출이 완료 되었습니다.");
                        location.reload();
                    },
                    error: function(request, status, error){
                        console.log("code:" + request.status + "\n" + "message:" +
                        request.responseText + "\n" + "error:" + error);
                        alert("오류가 발생했습니다. 담당자에게 문의해주세요.")
                    }
        
        
                })
            
            }

            
        }

        /*****************************************
            질문 모두 응답 했는지 체크
        *****************************************/
       function questionCheck(){
           var essential_checkQ = $(".check_question").length;
           var essential_radioQ = $(".radio_question").length;
           var checkQ = $(".question").find("input[type='checkbox']:checked").parents(".question").length;
           var radioQ = $(".question").find("input[type='radio']:checked").parents(".question").length;
          
           if( $('.belong03_01').is(':visible') == false){
            essential_radioQ = essential_radioQ -1;
           }
           if( $('.katKnow02_01').is(':visible') == false){
            essential_checkQ = essential_checkQ -1;
           }
           if( $('.news01_01').is(':visible') == false){
            essential_checkQ = essential_checkQ -1;
           }
           console.log("전체 라디오:" + essential_radioQ);
           console.log("선택 라디오:" + radioQ);
           console.log("전체 체크박스:" + essential_checkQ);
           console.log("선택 체크박스:" + checkQ);

           if(essential_checkQ === checkQ && essential_radioQ === radioQ){
               return true;
           }else{
               alert("모든 질문에 대답해주세요.");
               return false;
           
           }
           /*
           // 기간 코드 삭제
           if(new Date() <= new Date('08/15/2022 23:59:59')){
               
            }else{
                alert("설문조사 기간이 종료되었습니다.\n설문조사 기간: 22.08.08.(월) ~ 22.08.15.(월)");
                return false;
            }
        */    
        }

    })
})