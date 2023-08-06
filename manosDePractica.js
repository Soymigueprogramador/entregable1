class TicketManager {
    constructor() {
        this.eventos = []
    }
    addEvento(nombre, lugar, capacidad, fecha) {
        let nuevoEvento = {
            nombre,
            lugar: lugar,
            capacidad,
            fecha
        }
        if (this.eventos.length === 0) {
            nuevoEvento.id = 1
        } else {
            nuevoEvento.id = this.eventos.length + 1
        }
        this.eventos.push(nuevoEvento)
    }
    getEventos() {
        return this.eventos
    }
}
let tm = new TicketManager()
console.log(tm.getEventos())
tm.addEvento('clase de bajo jazz', 'presencial en la mare', 4, new Date(2023, 1, 4))
tm.addEvento('clase de elementos tecnicos del jazz', 'presencial en la mare', 20, new Date(2023, 2, 4))
tm.addEvento('clase de instrumento armonico', 'presencial en la mare', 4, new Date(2023, 3, 4))
console.log(tm.getEventos())