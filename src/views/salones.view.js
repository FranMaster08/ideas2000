

export class SalonesView {
    constructor(controller) {
        this.controller = controller;
    }

    dibujarSalones() {
        console.log(this.controller.traerTodosLosSalones());
    }
    agregarSalon(salon) {
        this.controller.agregarSalon(salon);
    }
}
