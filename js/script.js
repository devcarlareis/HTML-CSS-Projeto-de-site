//instrução para utilizar o jquery quando o documento estiver pronto, o html no caso.
//açoes
$(document).ready(function() {

    //var recebe um seletor de classe que vai mapear o botão, temos o botão
    var btnMenuMobile = $('.btn-menumobile')

    //adicionando evento de click
    $(btnMenuMobile).on('click', function() {

        //quando o botão for clickado a class será mudada
        //insere a class se não tem, tira se tem
        $('.nav-container ul').toggleClass('open');
    })
})
