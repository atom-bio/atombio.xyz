$(document).ready(function(){
    $('#my_iframe').ready(function(){
        document.head.insertAdjacentHTML("beforeend", '<base href="https://www.atombio.xyz/" target="_PARENT"></base>');
        $(this).contents().find('head').html('<base href="https://www.atombio.xyz/" target="_PARENT"></base>');
    });
});​
