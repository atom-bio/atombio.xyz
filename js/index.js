$(document).load(function(){
    $('#my_iframe').load(function(){
        console.log("hey");
        $(this).contents().find('head').html('<base href="https://www.chicatelegram.com" target="_PARENT"></base>');
    });
})
