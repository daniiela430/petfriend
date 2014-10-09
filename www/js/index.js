/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 $(document).ready(function(){

     $(document).on("pageinit", "#paginaInicio", function () {
        
        $.ajax({
             url: "http://www.mocky.io/v2/5432de96dd22b4c1083eb8e1",
             dataType: "jsonp",
             type: "POST",
             data: { text: "" },
             success: function (data) {

             },
             error: function (a, b, c) {
                 alert("Error recuperando mascotas");
             }
         })
                    .then(function (response) {

                        $.each(response, function (i, val) {
                            console.log(val.nombre);
                        });
                        
                    });

     });

     $("#btnIniciarSesion").click(function () {

         var correo = $("#inputCorreo").val();
         var clave = $("#inputClave").val();

         //http://www.mocky.io/v2/5432d979dd22b44b083eb8dc - false
         //http://www.mocky.io/v2/542c78c81c4e97120f338aa7 - true
         //http://www.mocky.io/v2/5432de96dd22b4c1083eb8e1 - listado

         $.ajax({
             url: "http://www.mocky.io/v2/542c78c81c4e97120f338aa7",
             dataType: "jsonp",
             type: "POST",
             data: { correo: correo, clave: clave },
             success: function (data) {

             },
             error: function () {
                 alert("Error iniciando sesión");
             }
         })
         .then(function (response) {
             if (response.respuesta && response.respuesta == "true") {
                 $.mobile.changePage("#paginaHome", { transition: "none" });
             } else {
                 alert("Correo o clave inválidos");
             }
         });

        
     });

     $(document).on("pageinit", "#paginaDirectorioHoteles", function () {

         $.ajax({
             url: "http://www.mocky.io/v2/54357e9a78a8a72f07071e7a",
             dataType: "jsonp",
             type: "POST",
             data: { text: "" },
             success: function (data) {

             },
             error: function (a, b, c) {
                 alert("Error cargando hoteles");
             }
         })
             .then(function (response) {


                 $("#hotel").append("<ul data-role='listview' data-inset='true'>");

                 $.each(response, function (i, val) {
                     $("#hotel").append("<li><a > <img  src='#' /> <h2>"+val.nombre+"</h2> <p>"+val.direccion+"</p> </a> </li>");

                 });
                 $("#hotel").append("</ul>");


             });

     });


    $("#btnRegistrarse").click(function(){
        $.mobile.changePage("#paginaRegistro",{transition:"none"});

    });

    $("#registrarMascota").click(function(){
        $.mobile.changePage("#paginaRegistroMascotas",{transition:"none"});

    });
	
	$("#menuMapa").click(function(){
        $.mobile.changePage("#paginaMapa",{transition:"none"});
	});

	$("#menuReportarComoPerdido").click(function () {
	    $.mobile.changePage("#paginaReportarComoPerdido", { transition: "none" });
	});

	
	$("#menuPerdidos").click(function(){
        $.mobile.changePage("#paginaPerdidos",{transition:"none"});
    });
	
     //FALTA PAGINA TRAKER
	$("#menutracker").click(function () {
	    $.mobile.changePage("#paginaPerdidos", { transition: "none" });
	});

	$("#menuDirectorio").click(function () {
	    $.mobile.changePage("#paginaDirectorio", { transition: "none" });
	});

     $("#registrarMascota").click(function () {
         $.mobile.changePage("#paginaRegistroMascotas", { transition: "none" });
	});

     $("#directorioHoteles").click(function () {
         $.mobile.changePage("#paginaDirectorioHoteles", { transition: "none" });
     });

     $("#directorioParques").click(function () {
         $.mobile.changePage("#paginaDirectorioParques", { transition: "none" });
     });

     $("#directorioRestaurantes").click(function () {
         $.mobile.changePage("#paginaDirectorioRestaurantes", { transition: "none" });
     });

     $("#directorioVeterinario").click(function () {
         $.mobile.changePage("#paginaDirectorioVeterinario", { transition: "none" });
     });

    	
});

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
