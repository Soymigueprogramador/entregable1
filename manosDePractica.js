class TicketManager {
    #precioBaseGanancia = 0.15;
    constructor() {
        this.eventos = [];
    }
    getEventos = () => {
        return this.eventos;
    }
    agregarEvento = (nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString()) => {
        const nuevoEvento = { // Corregido: Declarar 'nuevoEvento' como una constante
            nombre,
            lugar,
            precio: precio + precio * this.#precioBaseGanancia,
            capacidad,
            fecha,
            participantes: [],
            id: this.eventos.length === 0 ? 1 : this.eventos[this.eventos.length - 1].id + 1
        };
        this.eventos.push(nuevoEvento); // Corregido: Usar 'nuevoEvento' en lugar de 'evento'
    }
    agregarUsuario = (idEventos, idUsuarios) => {
        const eventoIndex = this.eventos.findIndex(e => e.id === idEventos);
        if (eventoIndex === -1) {
            console.log('evento no encontrado');
            return;
        }
        const usuarioRegistrado = this.eventos[eventoIndex].participantes.includes(idUsuarios);
        if (usuarioRegistrado) {
            console.log('usuario ya existente');
            return;
        }
        this.eventos[eventoIndex].participantes.push(idUsuarios);
    }
    ponerEventoEnGira = (idEventos, nuevaLocalidad, nuevaFecha) => {
        const eventoIndex = this.eventos.findIndex(e => e.id === idEventos);
        if (eventoIndex === -1) {
            console.log('evento no encontrado');
            return;
        }
        const evento = this.eventos[eventoIndex];
        const newEvento = {
            ...evento,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            id: this.eventos[this.eventos.length - 1].id + 1,
            participantes: []
        }
        this.eventos.push(newEvento);
    }
}
const manejadorDeEventos = new TicketManager();
manejadorDeEventos.agregarEvento('como ganar experiencia', 'zoom', 100, 10);
manejadorDeEventos.agregarUsuario(1, 2);
manejadorDeEventos.ponerEventoEnGira(1, 'latinoamerica y españa', '01/09/2023');
console.log(manejadorDeEventos.getEventos());