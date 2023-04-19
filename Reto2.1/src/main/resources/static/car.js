var btnRegistroAjax = document.getElementById ('btnCrearRegistro');
var btnEliminar = document.getElementById ('btnEliminar');
var btnBorrar = document.getElementById ('btnBorrar');



function CrearRegistro(){
    
    
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        status_code: 201
    
    
    };
    
    if(myData.id != "" && myData.brand !="" && myData.model != "" && myData.category_id != ""){
    let dataToSend = JSON.stringify(myData);
    xhr.open('POST','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car',true)
    alert("Se ha guardado el registro, recargue la página por favor"); 
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

function Eliminar(){
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#idE").val(),
        status_code: 204

    };
    alert("hola");
    if(myData.id != "" ){
    let dataToSend = JSON.stringify(myData);
    xhr.open('DELETE','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car',true)
    //alert(dataToSend); 
    alert("Refrezque la página para visualizar los cambios");
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
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

    url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car',
    type: 'GET',
    dataType:'json',
    success: function (respuesta){
    Tabla(respuesta.items);
    }
});


}

function Tabla(datos){
    let Info = '';

    Info += '<thead><tr><th>Id</th><th>Marca</th><th>Modelo</th><th>Categoría</th></tr></thead>'
    
    Info += '<tbody>';
    
    
    for (let i=0; i<datos.length; i++ ){
        Info += '<tr>';
        
        Info += '<td>'+datos[i].id+'</td><td>'+datos[i].brand+'</td><td>'+datos[i].model+'</td><td>'+datos[i].category_id+'</td>';

       

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

        url:'https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car/'+myData.id,
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
    
        let Marca = JSON.stringify (Datos[0].brand);
        let Modelo = JSON.stringify (Datos[0].model);
        let Categoria = JSON.stringify (Datos[0].category_id);
    

    Entradas += '<div>'
    Entradas += '<label>Marca</label> <br>'
    Entradas += '<input id="marca" value ='+Marca+'><br>'
    Entradas += '<label>Modelo</label> <br>'
    Entradas += '<input id="modelo" value= '+Modelo+'><br>'
    Entradas += '<label>Categoría</label> <br>'
    Entradas += '<input id="categoría" value ='+Categoria+'><br>'
    Entradas += '</div>'

    Entradas += '<button id="btnActualizar" value="Buscar" onclick ="Actualizar()">Actualizar</button>'
    
    $('#from').append(Entradas);


}

function Actualizar() {
    
    
    var xhr=new XMLHttpRequest();
    let myData={
        id: $("#idB").val(),
        brand: $("#marca").val(),
        model: $("#modelo").val(),
        category_id: $("#categoría").val(),
        status_code: 201
    
    
    };
    alert("hola");
    if(myData.id != "" && myData.brand !="" && myData.model != "" && myData.category_id != ""){
    let dataToSend = JSON.stringify(myData);
    xhr.open('PUT','https://g76034da9bc5971-bdretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car',true)
    //alert(dataToSend); 
    alert("Refrezque la página para visualizar los cambios");
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
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
    btnEliminar.addEventListener('click',Eliminar);
