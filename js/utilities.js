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
