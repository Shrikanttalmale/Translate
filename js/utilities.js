function copyText() {
    // Get the text field
    var copyText = document.getElementById("txtOutputLang");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
     //alert("Copied the text: " + copyText.value);
    $.toastr.success('Text copied');
  }


  $('#btnClear').click(function(){
    $('#txtInputLang').val('');
    $('#txtOutputLang').val('');
  });


  $('.hindiTxtbox').on('keypress', function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '32') {
     // $.toastr.success('Space key pressed');

     var words = $('.hindiTxtbox').val().split(' ');
     var lastWord = words[words.length - 1];

        if(lastWord!='')
        {
          var urlHindi = 'https://www.google.com/inputtools/request?text='+ lastWord +'&itc=hi-t-i0-und&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage'

          $.ajax({
            url: urlHindi,
            type: 'GET',
            //data: jQuery.param({ source_lang: "en", target_lang : "hi",	text : "how are you my friend"}) ,
            //data: jQuery.param({ source_lang: sourceLang, target_lang : targetLang,	text : text}) ,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (response) {
              var translatedText = response[1][0][1][0];

            var newText = $("textarea.hindiTxtbox").val().replace(lastWord, translatedText);
            $("textarea.hindiTxtbox").val(newText);
             

            },
            error: function () {
              //$.toastr.error('error converting');
            }
          }); 
        }
    }
  });
