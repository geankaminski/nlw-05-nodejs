import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();

const settingsController = new SettingsController();

//Routes params => localhost:3333/settings/1
//Query params => localhost:3333/settings/1?search=a
//Body params => { na request }

routes.post("/settings", settingsController.create)

export { routes };