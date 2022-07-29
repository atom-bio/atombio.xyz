$(document).ready(function(){
    $('#my_iframe').ready(function(){
        window.addEventListener("message", (event) => {
            var data = event.data;
            if (data.type == 'link'){
                window.location = data.content
            }
        },false);
    });
})
