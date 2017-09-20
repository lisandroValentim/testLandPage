/*function confere(){
        var nome1= document.form1.name.value
        var email1= document.form1.email.value
        var message1= document.form1.message.value
          if(nome1=="" || message=="" || email1==""){
            alert("Por favor, preencha todos os campos")
          }
          else{
            document.getElementById('form1').submit()
            location='teste.zip'
            }
      } */

function adicionar()
{ /*
    localStorage.setItem(name.value, email.value, message.value);
    alert("Contato enviado.");
    name.value = email.value = message.value = "";
*/
var tbContato = localStorage.getItem("tbContato");// Recupera os dados armazenados
	tbContato = JSON.parse(tbContato); // Converte string para objeto
	if(tbContato == null) // Caso não haja conteúdo, iniciamos um vetor vazio
	tbContato = [];
var contato = JSON.stringify({
		Nome     : $("#name").val(),
		Email    : $("#email").val(),
		Messagem : $("#message").val()
	});
	tbContato.push(contato);
	localStorage.setItem("tbContato", JSON.stringify(tbContato));
	alert("Registro adicionado.");
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
	return true;



}

