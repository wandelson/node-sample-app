module.exports = function (app) {

    var EventosController = {
        //chamadas a páginas via get
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/menu', params);
        },
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadUsuario', params);
        },
        cadastroEvento: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/cadEvento', params);
        },
        listaEventos: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('eventos/listaEventos', params);
        },
        //cadastro de eventos
        novoEvento: function (request, response) {
            var descricao = request.body.evento.descricao;
            var data = request.body.evento.data.split('/');
            //formato dd/MM/yyyy
            var objDate = new Date(data[2], data[1] - 1, data[0]);
            var responsavel = request.body.evento.responsavel;
            //código a ser implementado
            response.redirect('/menu');
        }
    };
    return EventosController;
}; 
