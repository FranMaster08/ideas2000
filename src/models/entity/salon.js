
export class Salon {
    constructor(id, name, address, alumnos = [] ,profesores = []) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.alumnos = alumnos;
        this.profesores = profesores;
    }

    addAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    getAlumnos() {
        return this.alumnos;
    }
    getAlumnosById(alumnoId) {
        return this.alumnos.find(alumno => alumno.id === alumnoId);
    }
    getProfesores() {
        return this.profesores;
    }
    addProfesor(profesor) {
        this.profesores.push(profesor);
    }
   


}       