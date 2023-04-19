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
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
        status_code: 201
    
    
    };
    
    if(myData.id != "" && myData.name !="" && myData.email != "" && myData.age != ""){
    let dataToSend = JSON.stringify(myData);
    xhr.open('POST','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',true)
    //alert(dataToSend); 
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
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
    //alert("hola");
    if(myData.id != "" ){
    let dataToSend = JSON.stringify(myData);
    xhr.open('DELETE','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',true)
    //alert(dataToSend); 
    alert("Refrezque la página para visualizar los cambios.");
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.send(dataToSend);
    }else{
    alert("el campo debe estar lleno");
    }
        //if(xhr.readyState==4){
        if(xhr.status==204){     
            alert('Se ha eliminado');
     
        }
       
        
    
    
}

function TraerDatos(){
    $.ajax({
    
        url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type: 'GET',
        dataType:'json',
        success: function (respuesta){
        Tabla(respuesta.items);
        }
    });
}
    
function Tabla(datos){
    let Info = '';

    Info += '<thead><tr><th>Id</th><th>Nombre</th><th>Email</th><th>Edad</th></tr></thead>'
    
    Info += '<tbody>';
    
    
    for (let i=0; i<datos.length; i++ ){
        Info += '<tr>';
        
        Info += '<td>'+datos[i].id+'</td><td>'+datos[i].name+'</td><td>'+datos[i].email+'</td><td>'+datos[i].age+'</td>';

       

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

        url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/'+myData.id,
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
    
        let Name = JSON.stringify (Datos[0].name);
        let Email = JSON.stringify (Datos[0].email);
        let Age = JSON.stringify (Datos[0].age);
    

    Entradas += '<div>'
    Entradas += '<label>Nombre</label> <br>'
    Entradas += '<input id="nombre" value ='+Name+'><br>'
    Entradas += '<label>Email</label> <br>'
    Entradas += '<input id="mail" value= '+Email+'><br>'
    Entradas += '<label>Edad</label> <br>'
    Entradas += '<input id="edad" value ='+Age+'><br>'
    Entradas += '</div>'

    Entradas += '<button id="btnActualizar" value="Buscar" onclick ="Actualizar()">Actualizar</button>'
    
    $('#from').append(Entradas);


}

function Actualizar() {
    
    
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#idB").val(),
        name: $("#nombre").val(),
        email: $("#mail").val(),
        age: $("#edad").val(),
        status_code: 201
    
    
    };
    alert("hola");
    
    
    if(myData.id != "" && myData.name !="" && myData.email != "" && myData.age != ""){
    let dataToSend = JSON.stringify(myData);
    xhr.open('PUT','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',true)
    //alert(dataToSend); 
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(dataToSend);
    alert("Refrezque la página para visualizar los cambios");
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
