/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

var btnEliminar = document.getElementById ('btnEliminar');
var btnRegistroAjax = document.getElementById ('btnCrearRegistro');

function CrearRegistro(){
    //alert("hola");
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#id").val(),
        messagetext: $("#mensaje").val(),
        status_code: 201
    
    
    };
    
    if(myData.id != "" && myData.messagetext !="" ){
    let dataToSend = JSON.stringify(myData);
    xhr.open('POST','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',true)
    //alert(dataToSend); 
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.send(dataToSend);
    alert("Se ha guardado el registro, refrezque la página por favor.");   
    
    /*             
       if(xhr.readyState==4){
        if(xhr.status==200){     
            console.log('Se ha guardado');
     
        }}
        */
    }
    
        
    }
    
    
function Eliminar(){
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#idE").val(),
        status_code: 204

    };
   // alert("hola");
    if(myData.id != "" ){
    let dataToSend = JSON.stringify(myData);
    xhr.open('DELETE','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',true)
    //alert(dataToSend); 
    alert("Refrezque la página para visualizar los cambios");
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.send(dataToSend);
    }else{
    alert("el campo debe estar lleno");
    }
        //if(xhr.readyState==4){
        if(xhr.status==204){     
            alert('Se ha guardado');
     
        }
       
        
    
    
}

function TraerDatos(){
    $.ajax({
    
        url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type: 'GET',
        dataType:'json',
        success: function (respuesta){
        Tabla(respuesta.items);
        }
    });
}
    
function Tabla(datos){
    let Info = '';

    Info += '<thead><tr><th>Id</th><th>Mensaje de texto</th></tr></thead>'
    
    Info += '<tbody>';
    
    
    for (let i=0; i<datos.length; i++ ){
        Info += '<tr>';
        
        Info += '<td>'+datos[i].id+'</td><td>'+datos[i].messagetext+'</td>';

       

        Info += '</tr>';
        

    }
    Info += '</tobody>'
    
    $('#Data').empty();
    $('#Data').append(Info);
    
}


function Buscar (){
    let myData={
        id: $("#idB").val()
        

    };
    
    //let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message/'+myData.id,
        type: 'GET',
        //data: dataToSend,
        dataType:'json',
        success: function (respuesta){
            let registro = JSON.stringify(respuesta.items);
            alert(registro);
            fromActualizar(respuesta.items);
            var idB = document.getElementById ('#idB');


            
        }
        
    });

    
    

}
function fromActualizar(Datos){
    let Entradas = "";
    
        let Mensaje = JSON.stringify (Datos[0].messagetext);
        
    

    Entradas += '<div>'
    Entradas += '<label>Nombre</label> <br>'
    Entradas += '<input id="texto" value ='+Mensaje+'><br>'
    Entradas += '</div>'

    Entradas += '<button id="btnActualizar" value="Buscar" onclick ="Actualizar()">Actualizar</button>'
    
    $('#from').append(Entradas);


}

function Actualizar() {
    
    
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#idB").val(),
        messagetext: $("#texto").val(),
        status_code: 201
    
    
    };
    
    
    
    if(myData.id != "" && myData.messagetext !="" ){
    let dataToSend = JSON.stringify(myData);
    xhr.open('PUT','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',true)
    //alert(dataToSend); 
    alert("Refrezque la página para visualizar los cambios");
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(dataToSend);
    }else{
    alert("todos los campos deben estar llenos");
    }
        //if(xhr.readyState==4){
        if(xhr.status==201){     
            alert('Se ha guardado');
     
        }
       
        
    
        

}

    btnBuscar.addEventListener('click',Buscar);    
    btnRegistroAjax.addEventListener('click',CrearRegistro);
    btnEliminar.addEventListener('click', Eliminar);
    
