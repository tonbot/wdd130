$(document).ready(function(){
        
    $('.fa-spinner ').hide();
    $('#status').hide();
    
    $("#submit").click(function(){
        let SenderName     =    $("#SenderName").val().trim();
        let SenderEmail    =    $("#SenderEmail").val().trim();
        let SenderSubject  =    $("#SenderSubject").val().trim();
        let SenderMessage  =    $("#SenderMessage").val().trim();
         if (SenderName == "" || SenderName == null || SenderEmail == "" || SenderEmail == null || SenderSubject == "" || SenderSubject == null || SenderMessage == "" || SenderMessage == null) {
            
            $("#status").text("All fields are required.");
            $('#status').show();

         }else{
            let FormData={
                SenderName      : SenderName,
                SenderEmail     : SenderEmail,
                SenderSubject   : SenderSubject,
                SenderMessage   : SenderMessage
            }
           // console.dir(FormData);


        $.ajax //ajax call
        ({
            url: "post/contact_post.php",
            type: "POST",
            data: FormData,
            encode:true,
            beforeSend: function() {
              $('.fa-spinner ').show();
                
             },
             complete: function(){
                $('.fa-spinner ').hide();
             },
            success: function(data)
                {
                    if (data.trim() === 'success') {
                        
                        $("#status").text("Thanks! Your message has been received.");
                        $('#status').show();
                        console.log(data)
                        
                      }
                        else {
                               
                               $("#status").text("Error! Messsage failed to send! Please check your E-mail");
                               $('#status').show();
                            console.log(data)
                            }
                   // console.log(data);
                },
            error: function(error){

        
                    $("#status").text("Thanks! Your message has been received.");
                    $('#status').show();
            } 
        }); //end of ajax  
    };
    })//end of butting click
    
    //botton focus out
    $("#submit").focusout(function(){
           $('#status').hide();
        });

})