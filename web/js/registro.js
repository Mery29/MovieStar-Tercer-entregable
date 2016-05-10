$(document).ready(function() {
    $("#agregarUsuario").click(function () {
        enviarUsuario();
    });
    $("#enviarCategoria").click(function () {
        enviarCategoria();
    });
    $("#enviarCatalogos").click(function () {
        enviarCatalogo();
    });
    $("#login").click(function() {
       login(); 
    });
    $("#cancelarUsuarios").click(function () {
        //limpiarForm();
        $("#myModalFormulario3").modal("hide");
    });
   
});

$(document).ready(function () {
    consultarCatalogos();
});

$(document).ready(function () {
    consultarUsuarios();
});

$(document).ready(function () {
    consultarCategorias();
});

function login() {
    $.ajax({
            url: 'UsuariosServelt',
            data: {
                accion: 'iniciarSesion',
                email: $("#email").val(),
                contrasena: $("#contra").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                $('#login2').append("putaMadre");
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                $('#loginForm').trigger("reset");
                $("#deleteMessage").modal("hide");
                $('#login2').text("Cerrar sesion");
                $("#nombreUsuario").html("");
                var x = document.getElementById('nombreUsuario');
                x.innerHTML = "<p style= "+"color:#fff"+">Bienvenido "+ data.UNombre + "</p>";
            },
            type: 'POST',
            dataType: 'json'
        });
};


function consultarUsuarios() {
    $.ajax({
        url: 'UsuariosServelt',
        data: {
            accion: 'consultarUsuarios'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las personas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaUsuarios(data);

        },
        type: 'POST',
        dataType: "json"
    });
}

function consultarCategorias() {
    $.ajax({
        url: 'CategoriasServlet',
        data: {
            accion: 'consultarCategorias'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las personas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaCategorias(data);

        },
        type: 'POST',
        dataType: "json"
    });
}

function consultarCatalogos() {
    $.ajax({
        url: 'CatalogosServlet',
        data: {
            accion: 'consultarCatalogos'
        },
        error: function () { //si existe un error en la respuesta del ajax
            alert("Se presento un error a la hora de cargar la información de las personas en la base de datos");
        },
        success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
            dibujarTablaCatalogos(data);

        },
        type: 'POST',
        dataType: "json"
    });
}

function dibujarTablaUsuarios(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaUsuarios").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaUsuarios").append(head); 
    row.append($("<th><b>NOMBRE USUARIO</b></th>"));
    row.append($("<th><b>CONTRASEÑA</b></th>"));
    row.append($("<th><b>ID</b></th>"));
    row.append($("<th><b>NOMBRE</b></th>"));
    row.append($("<th><b>APELLIDOS</b></th>"));
    row.append($("<th><b>CORREO</b></th>"));
    row.append($("<th><b>FECHA DE NACIMIENTO<b></th>"));
    row.append($("<th><b>DIRECCIÓN</b></th>"));
    row.append($("<th><b>TELÉFONO FIJO</b></th>"));
    row.append($("<th><b>TELÉFONO CELULAR</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaUsuarios(dataJson[i]);
    }
}

function dibujarTablaCategorias(dataJson){
    $("#tablaCategorias").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaCategorias").append(head); 
    row.append($("<th><b>NOMBRE</b></th>"));
    row.append($("<th><b>OBSERVACIONES</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaCategorias(dataJson[i]);
    }
}

function dibujarFilaCategorias(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de un usuario
    
    var row = $("<tr />");
    $("#tablaCategorias").append(row); 
    row.append($("<td>" + rowData.CNombre + "</td>"));
    row.append($("<td>" + rowData.CObs + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarCategoriasPorNombre('+rowData.UUsuario+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarCategoria('+rowData.UId+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}




function dibujarFilaUsuarios(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de un usuario
    
    var row = $("<tr />");
    $("#tablaUsuarios").append(row); 
    row.append($("<td>" + rowData.UUsuario + "</td>"));
    row.append($("<td>" + rowData.UContraseña + "</td>"));
    row.append($("<td>" + rowData.UId + "</td>"));
    row.append($("<td>" + rowData.UNombre + "</td>"));
    row.append($("<td>" + rowData.UApellidos + "</td>"));
    row.append($("<td>" + rowData.UCorreo + "</td>"));
    row.append($("<td>" + rowData.UFechaNac + "</td>"));
    row.append($("<td>" + rowData.UDireccion + "</td>"));
    row.append($("<td>" + rowData.UTelCasa + "</td>"));
    row.append($("<td>" + rowData.UTelCel + "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarUsuariosByUser('+rowData.UUsuario+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarUsuario('+rowData.UId+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function dibujarTablaCatalogos(dataJson) {
    //limpia la información que tiene la tabla
    $("#tablaCatalogos").html(""); 
    
    //muestra el enzabezado de la tabla
    var head = $("<thead />");
    var row = $("<tr />");
    head.append(row);
    $("#tablaCatalogos").append(head); 
    row.append($("<th><b>TIPO</b></th>"));
    row.append($("<th><b>NOMBRE</b></th>"));
    row.append($("<th><b>DIRECTOR</b></th>"));
    row.append($("<th><b>ACTOR PRINCIPAL</b></th>"));
    row.append($("<th><b>CATEGORIA</b></th>"));
    row.append($("<th><b>CANTIDAD</b></th>"));
    row.append($("<th><b>PRECIO ALQUILER<b></th>"));
    row.append($("<th><b>PRECIO VENTA</b></th>"));
    row.append($("<th><b>ACCIÓN</th>"));
    
    for (var i = 0; i < dataJson.length; i++) {
        dibujarFilaCatalogos(dataJson[i]);
    }
}

function dibujarFilaCatalogos(rowData) {
    //Cuando dibuja la tabla en cada boton se le agrega la funcionalidad de cargar o eliminar la informacion
    //de un usuario
    
    var row = $("<tr />");
    $("#tablaCatalogos").append(row); 
    row.append($("<td>" + rowData.CTipo + "</td>"));
    row.append($("<td>" + rowData.CNombre + "</td>"));
    row.append($("<td>" + rowData.UDirector + "</td>"));
    row.append($("<td>" + rowData.CActorPrin + "</td>"));
    row.append($("<td>" + rowData.categorias + "</td>"));
    row.append($("<td>" + rowData.CCantidad + "</td>"));
    row.append($("<td>" + rowData.CPrecioAlqu+ "</td>"));
    row.append($("<td>" + rowData.CPrecioComp+ "</td>"));
    row.append($('<td><button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="consultarCatalogosPorId('+rowData.UUsuario+');">'+
                        '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>'+
                    '</button>'+
                    '<button type="button" class="btn btn-default btn-xs" aria-label="Left Align" onclick="eliminarCatalogo('+rowData.UId+');">'+
                        '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>'+
                    '</button></td>'));
}

function enviarCatalogo(){
    if(validarCatalogo()){
        $.ajax({
            url: 'CatalogosServlet', 
            data:{
                accion: 'agregarCatalogo',
                tipo: $("#tipo").val(),
                nombre: $("#nombreCatalogo").val(),
                director: $("#nombreDirector").val(),
                cantidad: $("#cantidad").val(),
                actor: $("#actorPrincipal").val(),
                categoria: $("#nombreCategoria").val(),
                precioA: $("#precioAlquiler").val(),
                precioV: $("#precioVenta").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    $("#myModalFormulario2").modal("hide");
                    alert(" El catalogo fue agregado correctamente");
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                        $("#myModalFormulario2").modal("hide");
                        alert("El catalogo NO se ingreso correctamente");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                        $("#myModalFormulario2").modal("hide");
                        alert("Hubo un error");
                    }
                }

            },
            type: 'POST'
        });
    }
}


function enviarCategoria(){
    if(validarCategoria()){
        $.ajax({
            url: 'CategoriasServlet', 
            data:{
                accion: 'agregarCategoria',
                nombre: $("#nombreCategoria").val(),
                observaciones: $("#observaciones").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    $("#myModalFormulario").modal("hide");
                    alert("La categoría se ingreso correctamente");
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                        $("#myModalFormulario").modal("hide");
                        alert("La categoría NO se ingreso correctamente");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                        $("#myModalFormulario").modal("hide");
                        alert("Hubo un error");
                    }
                }

            },
            type: 'POST'
        });
    }
}

    
function enviarUsuario() {
    if (validarUsuario()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'UsuariosServelt',
            data: {
                accion: 'agregarUsuario',
                usuario: $("#user").val(),
                contrasena: $("#pass").val(),
                idUsuario: $("#id").val(),
                nombre: $("#fname").val(),
                apellidos: $("#lname").val(),
                direccion: $("#direccion").val(),
                fechaNacimiento: $("#cumple").val(),
                sexo: $("#sexo").val(),
                correo: $("#email2").val(),
                telCasa: $("#phone").val(),
                telCel: $("#celphone").val(),
                observaciones: $("#observaciones").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    consultarUsuarios();
                    alert("el usuario se ingreso correctamente");
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }

            },
            type: 'POST'
        });
    } else {
        mostrarMensaje("alert alert-danger", "Digite la información correcta", "Error!");
    }
   
}

function validarCategoria(){
    var validacion = true;
    $("#groupNombreCategoria").removeClass("has-error");
    if ($("#nombreCategoria").val() === "" || $("#nombreCategoria").val().length > 15) {
        $("#groupNombreCategoria").addClass("has-error");
        validacion = false;
    }
    return validacion;
}

function validarCatalogo(){
    var validacion = true;
    $("#groupNombre").removeClass("has-error");
    $("#groupDirector").removeClass("has-error");
    $("#groupActorPrincipal").removeClass("has-error");
    $("#groupPrecioAlquiler").removeClass("has-error");
    $("#groupPrecioVenta").removeClass("has-error");
    $("#groupCantidad").removeClass("has-error");
    
    if ($("#nombreCatalogo").val() === "" || $("#nombreCategoria").val().length > 15) {
        $("#groupNombre").addClass("has-error");
        validacion = false;
    }
    if ($("#nombreDirector").val() === "" || $("#nombreDirector").val().length > 15) {
        $("#groupDirector").addClass("has-error");
        validacion = false;
    }
    if ($("#actorPrincipal").val() === "" || $("#actorPrincipal").val().length > 15) {
        $("#groupActorPrincipal").addClass("has-error");
        validacion = false;
    }
    if (!testInputData("precioAlquiler", numbersOnly) || $("#precioAlquiler").val().length > 8) {
        $("#groupPrecioAlquiler").addClass("has-error");
        validacion = false;
    }
    if (!testInputData("precioVenta", numbersOnly) || $("#precioVenta").val().length > 8) {
        $("#groupPrecioVenta").addClass("has-error");
        validacion = false;
    }
    if (!testInputData("cantidad", numbersOnly) || $("#cantidad").val().length > 8) {
        $("#groupCantidad").addClass("has-error");
        validacion = false;
    }
    
    return validacion;
}
 
 
 function validarUsuario() {
    var validacion = true;
    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupUser").removeClass("has-error");
    $("#groupPass").removeClass("has-error");
    $("#groupId").removeClass("has-error");
    $("#groupName").removeClass("has-error");
    $("#groupLastName").removeClass("has-error");
    $("#groupEmail").removeClass("has-error");
    $("#groupFecha").removeClass("has-error");
    $("#groupPhone").removeClass("has-error");
    $("#groupCelPhone").removeClass("has-error");
    $("#groupDireccion").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if (!testInputData("celphone", numbersOnly) || $("#celphone").val().length > 8) {
        $("#groupCelPhone").addClass("has-error");
        validacion = false;
    }
    
    if (!testInputData("phone", numbersOnly) || $("#phone").val().length > 8) {
        $("#groupPhone").addClass("has-error");
        validacion = false;
    }
    
    if (!testInputData("id", numbersOnly) || $("#id").val().length > 9) {
        $("#groupId").addClass("has-error");
        validacion = false;
    }
   
    if ($("#fname").val() === "" || $("#fname").val().length > 15) {
        $("#groupName").addClass("has-error");
        validacion = false;
    }
    
    if ($("#direccion").val() === "" || $("#direccion").val().length > 45) {  //lastname
        $("#groupDireccion").addClass("has-error");
        validacion = false;
    }
    
    if ($("#lname").val() === "" || $("#lname").val().length > 25) {  //lastname
        $("#groupLastName").addClass("has-error");
        validacion = false;
    }
    
    if ($("#user").val() === "" || $("#user").val().length > 15) {
        $("#groupUser").addClass("has-error");
        validacion = false;
    }
    
    if ($("#pass").val() === "" || $("#pass").val().length > 15) {
        $("#groupPass").addClass("has-error");
        validacion = false;
    }
    
    if ($("#email2").val() === "" || $("#email2").val().length > 15) {
        $("#groupEmail").addClass("has-error");
        validacion = false;
    }
    
    return validacion;
}

function testInputData(myfield, restrictionType) {
  var myData = document.getElementById(myfield).value;
  if(myData!==''){
   if(restrictionType.test(myData)){
    return true;
   }else{
     return false;
   }
  }
  return;
    
 }
 
 function mostrarMensaje(classCss, msg, neg) {
    //se le eliminan los estilos al mensaje
    $("#mesajeResult").removeClass();

    //se setean los estilos
    $("#mesajeResult").addClass(classCss);

    //se muestra la capa del mensaje con los parametros del metodo
    $("#mesajeResult").fadeIn("slow");
    $("#mesajeResultNeg").html(neg);
    $("#mesajeResultText").html(msg);
    $("#mesajeResultText").html(msg);
}
 
 function enviar() {
    if (validar()) {
        //Se envia la información por ajax
        $.ajax({
            url: 'UsuariosServelt',
            data: {
                accion: 'agregarUsuario',
                usuario: $("#user").val(),
                contrasena: $("#pass").val(),
                idUsuario: $("#id").val(),
                nombre: $("#fname").val(),
                apellidos: $("#lname").val(),
                direccion: $("#direccion").val(),
                fechaNacimiento: $("#cumple").val(),
                sexo: $("#sexo").val(),
                correo: $("#email2").val(),
                telCasa: $("#phone").val(),
                telCel: $("#celphone").val(),
                observaciones: $("#observaciones").val()
            },
            error: function () { //si existe un error en la respuesta del ajax
                mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador (Error del ajax)", "Error!");
            },
            success: function (data) { //si todo esta correcto en la respuesta del ajax, la respuesta queda en el data
                var respuestaTxt = data.substring(2);
                var tipoRespuesta = data.substring(0, 2);
                if (tipoRespuesta === "C~") {
                    mostrarMensaje("alert alert-success", respuestaTxt, "Correcto!");
                    alert("el usuario se ingreso correctamente");
                } else {
                    if (tipoRespuesta === "E~") {
                        mostrarMensaje("alert alert-danger", respuestaTxt, "Error!");
                    } else {
                        mostrarMensaje("alert alert-danger", "Se genero un error, contacte al administrador", "Error!");
                    }
                }

            },
            type: 'POST'
        });
    } else {
        mostrarMensaje("alert alert-danger", "Digite la información correcta", "Error!");
    }
   
}

function validar() {
    var validacion = true;
    //Elimina estilo de error en los css
    //notese que es sobre el grupo que contienen el input
    $("#groupUser").removeClass("has-error");
    $("#groupPass").removeClass("has-error");
    $("#groupId").removeClass("has-error");
    $("#groupName").removeClass("has-error");
    $("#groupLastName").removeClass("has-error");
    $("#groupEmail").removeClass("has-error");
    $("#groupFecha").removeClass("has-error");
    $("#groupPhone").removeClass("has-error");
    $("#groupCelPhone").removeClass("has-error");
    $("#groupDireccion").removeClass("has-error");

    //valida cada uno de los campos del formulario
    //Nota: Solo si fueron digitados
    if (!testInputData("celphone", numbersOnly) || $("#celphone").val().length > 8) {
        $("#groupCelPhone").addClass("has-error");
        validacion = false;
    }
    
    if (!testInputData("phone", numbersOnly) || $("#phone").val().length > 8) {
        $("#groupPhone").addClass("has-error");
        validacion = false;
    }
    
    if (!testInputData("id", numbersOnly) || $("#id").val().length > 9) {
        $("#groupId").addClass("has-error");
        validacion = false;
    }
   
    if ($("#fname").val() === "" || $("#fname").val().length > 15) {
        $("#groupName").addClass("has-error");
        validacion = false;
    }
    
    if ($("#direccion").val() === "" || $("#direccion").val().length > 45) {  //lastname
        $("#groupDireccion").addClass("has-error");
        validacion = false;
    }
    
    if ($("#lname").val() === "" || $("#lname").val().length > 25) {  //lastname
        $("#groupLastName").addClass("has-error");
        validacion = false;
    }
    
    if ($("#user").val() === "" || $("#user").val().length > 15) {
        $("#groupUser").addClass("has-error");
        validacion = false;
    }
    
    if ($("#pass").val() === "" || $("#pass").val().length > 15) {
        $("#groupPass").addClass("has-error");
        validacion = false;
    }
    
    if ($("#email2").val() === "" || $("#email2").val().length > 15) {
        $("#groupEmail").addClass("has-error");
        validacion = false;
    }
    
    return validacion;
}
 var numbersOnly = /^\d+$/;
 var numbersOnly = /^\d+$/;
 var decimalOnly = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
 var uppercaseOnly = /^[A-Z]+$/;
 var lowercaseOnly = /^[a-z]+$/;
 var stringOnly = /^[A-Za-z0-9]+$/;
