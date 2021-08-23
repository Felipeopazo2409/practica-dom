'use strict'

let submit = document.getElementById("boton");
let lista_completa = document.getElementById('lista_completa');
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    //Obtengo los datos del input
    let texto_input = document.getElementById("texto");
    console.log(texto_input.value);
    //Creo un nuevo elemento de la lista
    let li = document.createElement('li');
    li.className = 'item';
    li.innerText = texto_input.value;

    //Creo un boton para agregar a la li
    let boton = document.createElement('button');
    boton.className = 'btn eliminar';
    boton.textContent = 'X';
    li.appendChild(boton);

    lista_completa.appendChild(li);
});

lista_completa.addEventListener('click',(e)=>{
    if(e.target.classList.contains('eliminar')){
        let li = e.target.parentElement; //Obtengo el elemento padre html
        console.log(li);
        if(confirm("Desea eliminar el item?")){
            lista_completa.removeChild(li);
        }
    }
});




