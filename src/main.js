import { SalonesService } from './models/services/salones.service.js';
import { SalonesController } from "./controllers/salones.controller.js";
import { SalonesView } from "./views/salones.view.js";
import { Salon } from './models/entity/salon.js';

const servicioSalonesInstance = new SalonesService();
const salonesControllerInstance = new SalonesController(servicioSalonesInstance);
const salonesViewInstance = new SalonesView(salonesControllerInstance);
salonesViewInstance.agregarSalon(
    new Salon("A101", "Matematicas", "1er Piso", [], [])
)
salonesViewInstance.dibujarSalones();