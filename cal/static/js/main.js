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
    });
    // AJAX GET
    $('.equal_to').click(function(){

        $.ajax({
            type: "GET",
            url: "",
            success: function(data) {
                alert(data);
            },
            failure: function(data) {
                alert('Got an error dude');
            }
            
        });

    });


});