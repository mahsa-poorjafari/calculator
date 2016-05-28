/**
 * Created by mahsa on 26.05.16.
 */
$(document).ready(function() {
    $('.clear').click(function () {
        $(':input[type="text"]').val('');
        $('.valueof').html('');
        $('#log').html('');
    });
    $('.number, .operator').click(function () {
        $('.valueof').append(this.value);
        $('.formulla').val($('.valueof').html());
        $('.formulla').attr('value',$('.valueof').html());
    });

    $(".equal_to").click(function(e) {
        e.preventDefault();
        var result = eval($('.formulla').val());
        $( "#log" ).html( result );

    });


    //For getting CSRF token
    function getCookie(name) {
              var cookieValue = null;
              if (document.cookie && document.cookie != '') {
                    var cookies = document.cookie.split(';');
              for (var i = 0; i < cookies.length; i++) {
                   var cookie = jQuery.trim(cookies[i]);
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
                 }
              }
          }
        return cookieValue;
    }
    /*
    //When submit is clicked
    $(".e").click(function(e) {

        //Prevent default submit. Must for Ajax post.Beginner's pit.
         e.preventDefault();

        //Prepare csrf token
         var csrftoken = getCookie('csrftoken');


        //Collect data from fields
        var formulla = $('.formulla').val();


        var request = $.getScript({
            type: "POST",
            url: "cal/views.py",  // or just url: "/my-url/path/"
            method: "POST",
            data: {
                csrfmiddlewaretoken: csrftoken,

            },
            dataType: "html"
            /*
             success: function(data) {
             console.log(data);
             alert("Congratulations! You scored: "+ data.user_id);
             },
             error: function(xhr, textStatus, errorThrown) {
             alert("Please report this error: "+errorThrown+xhr.status+xhr.responseText);
             }
            
        });



    });
    */

});