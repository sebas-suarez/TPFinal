let listaAutos = document.getElementById("listaAutos");
let precioFinal = document.getElementById("precioFinal");
let btnComprar=document.getElementById("realizarCompra");
let total = 0;

const autos = [
    {marca:"Fiat", modelo:"Cronos", anoFabricacion:2024, kilometros:0, foto:"../css/img/cronos.jpg",precio:35000000, stock:5},
    {marca:"Fiat", modelo:"strada", anoFabricacion:2010, kilometros:160000, foto:"../css/img/strada.jpg",precio:1000000, stock:1},
    {marca:"Fiat", modelo:"toro", anoFabricacion:2020, kilometros:60000, foto:"../css/img/toro.jpg", precio:350000000, stock:1},
    {marca:"Fiat", modelo:"Mobi", anoFabricacion:2024, kilometros:0, foto:"../css/img/Mobi.jpg", precio:25000000, stock:2}

];

function catalogoAutos(array){
    for(let i = 0; i < array.length; i++){
        listaAutos.innerHTML += 
        `
            <li class="forma">
                <img src="${array[i].foto}" width="200px" height="200px">
                <p>${array[i].marca}  ${array[i].modelo}  año:${array[i].anoFabricacion}  ${array[i].kilometros}Kms  </p>
                <p>$${array[i].precio}</p>
                <p>Unidades Dipoibles</p>
                <input type="text" id="inventario${i}" value=${array[i].stock} readonly>
                <input type="text" id="compra${i}" placeholder="Ingrese Cantidad">
                <button id="btn${i}">Agregar Al Carrito</button>
            </li>
        `
    }

    for(let i = 0; i < array.length; i++){
        document.getElementById(`btn${i}`).addEventListener("click", ()=> { comprarAutos(i, autos)});
    }
}

function comprarAutos(indice, array){
    let inventarioTotal = document.getElementById(`inventario${indice}`);
    let unidadesCompradas = document.getElementById(`compra${indice}`);
    let inventario = inventarioTotal.value;
    let compra = unidadesCompradas.value;
    let precio = array[indice].precio;

    if(compra > 0 && compra <= inventario){
        total += precio * compra;
        alert(`Agregado al carrito`);
        precioFinal.innerHTML = `Total: $${total}`
        inventarioTotal.value = inventario - compra;
    }else{
        alert(`Error al cargar elementos revise su compra`);
    }
}





catalogoAutos(autos);
btnComprar.addEventListener("click", ()=> { 
    alert(`Gracias por su compra`);
    precioFinal.innerHTML = `Total: $${0}`;});
