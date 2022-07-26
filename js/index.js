$(document).ready(function(){
    $('#my_iframe').ready(function(){
        document.head.insertAdjacentHTML("beforeend", '<base href="https://www.chicatelegram.com/" target="_PARENT"></base>');
    });
});​
