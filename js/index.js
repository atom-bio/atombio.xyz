$(document).load(function(){
    $('#my_iframe').load(function(){
        console.log("my_iframe loaded!");
        window.addEventListener("message", (event) => {
            var data = event.data;
            console.log("Child is sending an event!")
            console.log(data);
          });
    });
})
