const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"Accept-Encoding": "application/gzip",
		"X-RapidAPI-Key": "1ae9e237e6msh9853d0e0c346e53p1639a0jsn9c73fc6649f1",
		"X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
	},
	"data": {
		"q": "English is hard, but detectably so"
	}
};


$("#btnTranslate").click(function(){

	var sourceLang = $('#ddlSrcLang').find(":selected").val();
	var targetLang = $('#ddlTargetLang').find(":selected").val();
	var text = $("#txtInputLang").val();
	
	$.ajax({
		url: 'https://script.google.com/macros/s/AKfycbzeKgLSLmW_MlebiwTjlsUj_WbVr-WMSxshcL-p1F61TAS8jSfkr4Lzi0zh43h3Wi7BKQ/exec',
		type: 'POST',
		//data: jQuery.param({ source_lang: "en", target_lang : "hi",	text : "how are you my friend"}) ,
		data: jQuery.param({ source_lang: sourceLang, target_lang : targetLang,	text : text}) ,
		contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
		success: function (response) {
			var x=$.parseJSON(response);

			 var finalText = JSON.parse(x).translatedText;

			

			$("textarea#txtOutputLang").val(finalText);
		},
		error: function () {
			alert("error");
		}
	}); 


});

