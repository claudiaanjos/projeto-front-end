function ativaScrollSuave(selector) {

    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');

document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("name").value != "" && document.getElementById ("email").value != ""){
        alert("Sua inscrição foi realizada. Aguarde por mais informações no e-mail.")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}
