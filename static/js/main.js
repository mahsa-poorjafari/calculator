/**
 * Created by mahsa on 26.05.16.
 */
$(document).ready(function() {
    $('.clear').click(function () {
        $(':input[type="text"]').val('');
        $('.valueof').html('');
    });
    $('.number, .operator').click(function () {
        $('.valueof').append(this.value);
        $('.formulla').val($('.valueof').html());
        $('.formulla').attr('value',$('.valueof').html());
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
    //When submit is clicked
    $(".equal_to").click(function(e) {
    
        //Prevent default submit. Must for Ajax post.Beginner's pit.
         e.preventDefault();

        //Prepare csrf token
         var csrftoken = getCookie('csrftoken');


        //Collect data from fields
        var formulla = $('.formulla').val();

        $.ajax({
            type: "POST",
            url: window.location.href,  // or just url: "/my-url/path/"
            data: {
                csrfmiddlewaretoken: csrftoken,
                a : 1,

            },
            success: function(data) {
                console.log(data);
                alert("Congratulations! You scored: "+ data);
            },
            error: function(xhr, textStatus, errorThrown) {
                alert("Please report this error: "+errorThrown+xhr.status+xhr.responseText);
            }
        });

        /*
         //Send data
        $.ajax({
            url : window.location.href, // the endpoint,commonly same url
            type : "POST", // http method
            data : { csrfmiddlewaretoken : csrftoken,
                formulla : 11,
                }, // data sent with the post request
            // handle a successful response
            success : function(json) {
                 console.log(json); // another sanity check
                // On success show the data posted to server as a message
                alert('here the Formulla   '+json['formulla'] +'!.');
            },
                 // handle a non-successful response
            error : function(xhr,errmsg,err) {
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
        */

    });
});