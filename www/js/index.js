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

     $("#btnIniciarSesion").click(function () {

         var correo = $("#inputCorreo").val();
         var clave = $("#inputClave").val();

         //http://www.mocky.io/v2/5432d979dd22b44b083eb8dc - false
         //http://www.mocky.io/v2/542c78c81c4e97120f338aa7 - true

         $.ajax({
             url: "http://www.mocky.io/v2/5432d979dd22b44b083eb8dc",
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

    $("#btnRegistrarse").click(function(){
        $.mobile.changePage("#paginaRegistro",{transition:"none"});

    });

    $("#registrarMascota").click(function(){
        $.mobile.changePage("#paginaRegistroMascotas",{transition:"none"});

    });
	
	$("#menuMapa").click(function(){
        $.mobile.changePage("#paginaMapa",{transition:"none"});
    });
	
	$("#menuPerdidos").click(function(){
        $.mobile.changePage("#paginaPerdidos",{transition:"none"});
    });
	

	
});

function menu(){
var d = new Date();
   d.setFullYear("1990");
   document.write(d);
   }





   





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
