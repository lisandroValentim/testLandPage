$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      var tbContato = localStorage.getItem("tbContato");// Recupera os dados armazenados
          tbContato = JSON.parse(tbContato); // Converte string para objeto
          if(tbContato == null) // Caso não haja conteúdo, iniciamos um vetor vazio
          tbContato = [];
      var contato = JSON.stringify({
          Nome     : $("#name").val(),
          Fone     : $("#phone").val(),
          Email    : $("#email").val(),
          Mensagem : $("#message").val()
        });
        tbContato.push(contato);
        localStorage.setItem("tbContato", JSON.stringify(tbContato));
        // Tempo de fechamento da mensagem
        var timeClose = 4000;
        // Success message
        $('#success').html("<div class='alert alert-success'>");
        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
        .append("</button>");
        $('#success > .alert-success')
        .append("<strong>Obrigado!</strong> Sua mensagem foi enviada.");
        $('#success > .alert-success')
        .append('</div>');
        setInterval(function(){
            $('.alert').fadeOut('slow');    
        },timeClose);
        //clear all fields
        $('#contactForm').trigger("reset");
        /*alert("Registro adicionado.");
          $("#name").val("");
          $("#phone").val("");
          $("#email").val("");
          $("#message").val("");
          return true;      */
      /*$.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });*/
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});

// Apresta mensagem para o usuario 
/*var alertMSG = function(string, type){
    
    // Tempo de fechamento da mensagem
    var timeClose = 4000;
    
    switch (type){
        case 1 :
        $('.alertMSG').html(
            '<div class="alert alert-success">'+string+'</div>'
            );
        setInterval(function(){
            $('.alert').fadeOut('slow');    
        },timeClose);
        break;
        case 2 :
        $('.alertMSG').html(
            '<div class="alert alert-info">'+string+'</div>'
            );
        setInterval(function(){
            $('.alert').fadeOut('slow');    
        }, timeClose);
        break;
        case 3 :
        $('.alertMSG').html(
            '<div class="alert alert-warning">'+string+'</div>'
            );
        setInterval(function(){
            $('.alert').fadeOut('slow');    
        }, timeClose);
        break;
        case 4 :
        $('.alertMSG').html(
            '<div class="alert alert-danger">'+string+'</div>'
            );
        setInterval(function(){
            $('.alert').fadeOut('slow');    
        }, timeClose);
        break;
    }    
}*/
