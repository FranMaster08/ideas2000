import { ISalonService } from '../common/Isalon.js';
export class SalonesController {
    constructor(salonService = ISalonService) {
        this.salonService = salonService;
    }
    traerTodosLosSalones() {
        const salones = this.salonService.traerTodosLosSalones();
        return salones;
    }
    agregarSalon(salon) {
        return this.salonService.agregarSalon(salon);
    }
    agregarProfesorAlSalon(salonId, profesor) {
        return this.salonService.agregarProfesorAlSalon(salonId, profesor);
    }
    agregarAlumnoAlSalon(salonId, alumno) {
        return this.salonService.agregarAlumnoAlSalon(salonId, alumno);
    }

}
