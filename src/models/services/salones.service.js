
export class SalonesService {
    constructor() {
        this.salones = [];
    }

    traerTodosLosSalones() {
        return this.salones;
    }

    agregarSalon(salon) {
        return this.salones.push(salon);
    }

    agregarProfesorAlSalon(salonId, profesor) {
        const salon = this.salones.find(s => s.id === salonId);
        if (salon) {
            salon.addProfesor(profesor);
        }
    }

    agregarAlumnoAlSalon(salonId, alumno) {
        const salon = this.salones.find(s => s.id === salonId);
        if (salon) {
            salon.addAlumno(alumno);
        }
    }
}

