
window.onload = function(){
    setTimeout(()=> {$('#onload').fadeOut();},1000)
    $('body').removeClass('hidden');
    
}

window.addEventListener('DOMContentLoaded', event => {

    // FUNCION NAVBAR
    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        let botonScroll = document.getElementById("toTop")
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            botonScroll.classList.remove('botonSubir')

        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            botonScroll.classList.add('botonSubir')

        }

    };

    
    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Scroll abajo
let scroll = document.querySelectorAll ('.scrollAbajo');
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop; 
    for (var i=0; i < scroll.length; i++ ) {
        let alturaAnimado = scroll[i].offsetTop;
        if(alturaAnimado - 450 < scrollTop) {
            scroll[i].style.opacity = 1;
        }
        else {scroll[i].style.opacity = 0;};
    }
}

 //Scroll arriba
 $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });

window.addEventListener ('scroll', mostrarScroll);

//DOM
let usuario = document.getElementById("nombre")
console.log(usuario)

let menu = document.getElementsByClassName("contenedorMenu")
console.log(menu)

let buscar = document.getElementsByClassName("buscador")
console.log(buscar)

let redesSociales = document.getElementsByClassName("redes")
console.log(redesSociales)

let listaMenu = document.getElementsByTagName("ul")
console.log(listaMenu)



//Logica para proyectos
//Accedemos a los elementos html
const proyectItem = document.getElementById("item-proyecto").content
const containerItems = document.getElementById("contenedor-proyectos")
const fragment = document.createDocumentFragment()

//funcion para traer la data del JSON
const fetchData = async() => {
    try {
        const res = await fetch('../api.json')
        const data = await res.json()
        renderCards(data)
    }catch(error){
        console.log(error)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

//funcion para dibujar los elementos en el html
const renderCards = (data) => {
    data.forEach((proyecto)=>{
        console.log("proyecto: ", proyecto)
        proyectItem.querySelector('h4').textContent = proyecto.title
        proyectItem.querySelector('p').textContent = proyecto.description
        proyectItem.querySelector('img').setAttribute('src', proyecto.img)
        const clone = proyectItem.cloneNode(true)
        fragment.appendChild(clone)
    })
    containerItems.appendChild(fragment)
}

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
    console.log("validar formulario")
    let nameForm = document.getElementById("nameForm").value
    console.log("nombre: ", nameForm)
    let messageSuccess = document.getElementById("submitSuccessMessage")
    messageSuccess.querySelector('h5').textContent = nameForm + " te has unido exitosamente!"
  });
