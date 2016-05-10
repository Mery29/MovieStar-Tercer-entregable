<%-- 
    Document   : usuariosAdmin
    Created on : 08-may-2016, 0:34:55
    Author     : Mery Zúñiga
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Usuario Administrador</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
        <link rel="stylesheet" type="text/css" href="css/font-awesome-4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/creative.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/registro.js"></script> 
        <script src="js/bootstrap.min.js"></script>
        <script src="js/ajSlider.js"></script>
        <script src="js/myJs.js"></script> 
        <script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
        <link rel="shortcut icon" href="media/icon.ico">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/custom.css">
        <link rel="shortcut icon" href="media/icon.ico">   
        <link rel="stylesheet" href="css/style.css"> 
        <link href="css/datetimepicker.min.css" rel="stylesheet" type="text/css"/>
        <script src="js/datetimepicker.js" type="text/javascript"></script>
    </head>
    <body>
        <nav class="navbar navbar-default">  
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navegacion">
                    <span class="sr-only">Desplegar navegación</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    <a class="pull-left" href="#"> <img src="media/logo.png" alt="logo"> </a>
                </div>  
                <div class="collapse navbar-collapse bottom col-md-8 col-lg-8" id="navegacion">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.jsp">Inicio</a></li>
                        <li><a href="#footer">Nosotros</a></li>
                        <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Películas<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="peliculasComedia.html">Comedia</a></li>
                        <li><a href="peliculasRomance.html">Romance</a></li>
                        <li><a href="peliculasTerror.html">Terror</a></li>
                        <li><a href="peliculasFiccion.html">Ciencia ficción</a></li>
                        <li><a href="peliculasDrama.html">Drama</a></li>
                        <li><a href="peliculasEspiritualidad.html">Espiritualidad</a></li>
                        <li><a href="peliculasAccion.html">Acción</a></li>
                        <li><a href="peliculasInfantiles.html">Infantiles</a></li>
                    </ul>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Series<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="seriesComedia.html">Comedia</a></li>
                        <li><a href="seriesTerror.html">Terror</a></li>
                        <li><a href="seriesFiccion.html">Ciencia ficción</a></li>
                        <li><a href="seriesDrama.html">Drama</a></li>
                        <li><a href="seriesAccion.html">Acción</a></li>
                        <li><a href="seriesInfantiles.html">Infantiles</a></li>
                    </ul>
                    <li><a href="contactenos.html">Contáctanos</a></li>
                    </ul>
                </div> 
                <form class="navbar-form navbar-right" method="post">
                    <a data-toggle="modal" data-target="#deleteMessage" class="btn btn-primary"><span class="glyphicon"></span>Iniciar Sesion</a>
                    <div id="deleteMessage" class="modal fade in" tabindex="-1" role="dialog" aria-hidden="false">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">x</button>
                                    <h3>Iniciar sesion en MovieStar</h3>
                                </div>
                                <div class="modal-body">
                                    <p><input type="text" name="eid" id="email" placeholder="Correo Electrónico"></p>
                                    <p><input type="password" name="passwd" placeholder="Contraseña"></p>
                                    <p><button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                                          <a href="#">¿Olvidaste la contraseña?</a>
                                    </p>
                                </div>
                                <div class="modal-footer">
                                      ¿Eres nuevo en MovieStar?
                                      <a href="registro.jsp" class="btn btn-primary">Regístrate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form class="navbar-form navbar-right" role="search">
                    <div class="form-group">
                      <input type="search" class="form-control " placeholder="Buscar por nombre, Director, Actor principal o Categoría">
                    </div>
                    <button type="submit" class="btn btn-info"><span class="glyphicon glyphicon-search"></span></button>
                </form>
            </div> </nav>
           
           
           
  <div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
        Gestión de Categorías
      </a>
    </div>
    <div id="collapseOne" class="accordion-body collapse">
        <div class="accordion-inner">
            <div class="container">
                <div class="modal fade" id="myModalFormulario" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Categorias
                            </div>
                            <div class="modal-body" id="myModalMessage">
                                <form role="form" onsubmit="return false;" id="formPersonas">
                                    <div class="form-group" id="groupNombreCategoria">
                                        <label for="nombre">Nombre:</label>
                                        <input type="text" class="form-control" id="nombreCategoria" placeholder="Nombre" >
                                    </div>

                                    <div class="form-group">
                                        <label for="observaciones">Observaciones:</label>
                                        <textarea class="form-control" maxlength="400" rows="3" id="observaciones"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <input type="hidden" value="agregarCategoria" id="categoriasAction"/>
                                        <button type="submit" class="btn btn-primary" id="enviarCategoria">Guardar</button>
                                        <button type="reset" class="btn btn-danger" id="cancelarCategorias">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
              <h2>Categorías</h2>
              <br/>
              <center>
                  <button type="button" class="btn btn-primary btn-block centered" data-toggle="modal" data-target="#myModalFormulario" id="btnInsertarCategorias">Insertar Categoría</button>
              </center>
             </div>
        </div>
        <table class="table table-hover table-condensed" id="tablaCategorias"></table>
  </div>
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
        Gestión de Catálogos
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse">
        <div class="accordion-inner">
            <div class="container">
                <div class="modal fade" id="myModalFormulario2" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Catalogos
                            </div>
                            <div class="modal-body" id="myModalMessage">
                                <form role="form" onsubmit="return false;" id="formPersonas">
                                    <div class="form-group" id="groupTipo">
                                        <label for="tipo">Tipo:</label>
                                        <select id="tipo" name="tipo" class="form-control">
                                            <option value="pelicula">Pelicula</option>
                                            <option value="serie">Serie</option>
                                        </select>
                                    </div>
                                    <div class="form-group" id="groupNombre">
                                        <label for="nombre">Nombre:</label>
                                        <input type="text" class="form-control" id="nombreCategoria" placeholder="Nombre" >
                                    </div>
                                    <div class="form-group" id="groupDirector">
                                        <label for="director">Director:</label>
                                        <input type="text" class="form-control" id="nombreDirector" placeholder="Director" >
                                    </div>
                                    <div class="form-group" id="groupActorPrincipal">
                                        <label for="actorPrincipal">Actor principal:</label>
                                        <input type="text" class="form-control" id="actorPrincipal" placeholder="Actor principal" >
                                    </div>
                                    <div class="form-group" id="groupCategoria">
                                        <label for="tipo">Tipo:</label>
                                        <select id="categoria" name="tipo" class="form-control">
                                            <option value="romance">Romance</option>
                                            <option value="comedia">Comedia</option>
                                            <option value="terror">Terror</option>
                                            <option value="drama">Drama</option>
                                            <option value="ciencia">Ciencia Ficción</option>
                                            <option value="accion">Accion</option>
                                            <option value="infantiles">Infantiles</option>
                                            <option value="espiritualidad">Espiritualidad</option>
                                        </select>
                                    </div>
                                    <div class="form-group" id="groupCantidad">
                                        <label for="cantidad">Cantidad existente:</label>
                                        <input type="text" class="form-control" id="cantidad" placeholder="Catidad" >
                                    </div>
                                    <div class="form-group" id="groupPrecioAlquiler">
                                        <label for="precioAlquiler">Precio alquiler:</label>
                                        <input type="text" class="form-control" id="precioAlquiler" placeholder="Digite el precio en colones">
                                    </div>
                                    <div class="form-group" id="groupPrecioVenta">
                                        <label for="precioVenta">Precio venta:</label>
                                        <input type="text" class="form-control" id="precioVenta" placeholder="Digite el precio en colones">
                                    </div>
                                    <div class="form-group">
                                        <input type="hidden" value="agregarCatalogo" id="catalogosAction"/>
                                        <button type="submit" class="btn btn-primary" id="enviarCatalogos">Guardar</button>
                                        <button type="reset" class="btn btn-danger" id="cancelarCatalogos">Cancelar</button>
                                    </div>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>  
              <h2>Catálogos</h2>
              <br/>
              <center>
                  <button type="button" class="btn btn-primary btn-block centered" data-toggle="modal" data-target="#myModalFormulario2" id="btnInsertarCatalogo">Insertar Catálogo</button>
              </center>
            </div>
          </div>
        <table class="table table-hover table-condensed" id="tablaCatalogos"></table>
    </div>
  </div>
    <div class="accordion-group">
        <div class="accordion-heading">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
            Gestión de Usuarios
          </a>
        </div>
        <div id="collapseThree" class="accordion-body collapse">
            <div class="accordion-inner">
                <div class="container">
                <div class="modal fade" id="myModalFormulario3" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" id="myModalTitle">Insertar / Modificar Usuarios
                            </div>
                            <div class="modal-body" id="myModalMessage">
                                <form role="form" onsubmit="return false;" id="formPersonas">
                                    <div class="form-group" id="groupTipoUsuario">
                                        <label for="tipoUsuario">Tipo de usuario:</label>
                                        <select id="tipo" name="tipoUsuario" class="form-control">
                                            <option value="usuarioCliente">Usuario cliente</option>
                                            <option value="usuarioAdministrador">Usuario Administrador</option>
                                        </select>
                                    </div>
                                    <div class="form-group" id="groupUsuario">
                                        <label for="usuario">Usuario:</label>
                                        <input type="text" class="form-control" id="usuario" placeholder="Usuario" >
                                    </div>
                                    <div class="form-group" id="groupContraseña">
                                        <label for="contraseña">Contraseña:</label>
                                        <input type="password" class="form-control" id="nombreContraseña">
                                    </div>
                                    <div class="form-group" id="groupNombre">
                                        <label for="nombre">Nombre:</label>
                                        <input type="text" class="form-control" id="nombre">
                                    <div class="form-group" id="groupApellidos">
                                        <label for="apellidos">Apellidos:</label>
                                        <input type="text" class="form-control" id="apellidos">
                                    </div>
                                    <div class="form-group" id="groupCorreo">
                                        <label for="correo">Correo:</label>
                                        <input type="text" class="form-control" id="correo">
                                    </div>
                                    <div class="form-group" id="groupFechaNac">
                                        <label for="fechaNac">Fecha de nacimiento:</label>
                                        <input type="text" class="form-control" id="fechaNac" >
                                    </div>
                                    <div class="form-group" id="groupDireccion">
                                        <label for="direccion">Dirección:</label>
                                        <input type="text" class="form-control" id="direccion>
                                    </div>
                                    <div class="form-group" id="groupTelCasa">
                                        <label for="telCasa">Teléfono de casa:</label>
                                        <input type="text" class="form-control" id="telCasa">
                                    </div>
                                    <div class="form-group" id="groupTelCel">
                                        <label for="telCel">Teléfono celular:</label>
                                        <input type="text" class="form-control" id="telCel">
                                    </div>
                                    <div class="form-group">
                                        <input type="hidden" value="agregarUsuarios" id="usuariosAction"/>
                                        <button type="submit" class="btn btn-primary" id="enviarUsuarios">Guardar</button>
                                        <button type="reset" class="btn btn-danger" id="cancelarUsuarios">Cancelar</button>
                                    </div>
                                 </form>
                            </div>
                        </div>
                    </div>
                  </div> 
                </div>
                <h2>Usuarios</h2>
                <br/>
                <center>
                   <button type="button" class="btn btn-primary btn-block centered" data-toggle="modal" data-target="#myModalFormulario3" id="btnInsertarUsuarios">Insertar Usuarios</button>
                </center>
                </div>
            </div>
            <table class="table table-hover table-condensed" id="tablaUsuarios"></table>
        </div>
    </div>
  </div>  
    </body>
</html>



