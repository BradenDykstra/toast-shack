import ToastController from "./Controllers/ToastController.js";


class App {
    constructor() {
        this.controllers = {
            toastController: new ToastController()
        }
    }
}

window['app'] = new App()