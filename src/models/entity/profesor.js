export class Profesor {
    constructor(id, name, subject, salones = []) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.salones = salones;
    }

    addSalon(salon) {
        this.salones.push(salon);
    }

    getSalones() {
        return this.salones;
    }

    getSalonById(salonId) {
        return this.salones.find(salon => salon.id === salonId);
    }
}