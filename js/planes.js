//DOM
const planesDetalle = document.querySelector("#plan");
const btnVolver = document.querySelector(".volver");


//LS
let planLS = JSON.parse(localStorage.getItem('plan'))
console.table(planLS);


//Funciones
const detallarPlanes = (planLS) => {
    const { poster, titulo, horario, reservas, minimo, precio } = planLS
    return `<div class= "card content">
    <img src="${poster}">
    <h5 class="card-title">${titulo}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Horario: ${horario}</li>
      <li class="list-group-item">Reservas: ${reservas}</li>
      <li class="list-group-item">Periodo mínimo: ${minimo}</li>
      <li class="list-group-item">Valor: ${precio}</li>
    </ul>
    </div>`
}

const retornoError = () => {
    return `<div class="mensajeError">
    <div class="iconoError">"⚠"</div>
    <p>No pudimos cargar los planes</p>
 
</div>`
}

const recuperarPlanes = () => {

    if (planLS) {
        planesDetalle.innerHTML = detallarPlanes(planLS)

    }
}
recuperarPlanes()

//Evento
btnVolver.addEventListener("click", () => location.href = "index.html")