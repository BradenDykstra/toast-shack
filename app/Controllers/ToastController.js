import ToastService from "../Services/ToastService.js";

//Private
let _toastService = new ToastService()

function _draw() {
    let template = ''
    _toastService.Toasts.forEach((toast, index) => {
        template += toast.getTemplate(index)
    })
    document.querySelector("#toast").innerHTML = template
}


//Public
export default class ToastController {
    constructor() {
        _toastService.loadToast()
        _draw()
    }

    addToast(event) {
        event.preventDefault()
        let form = event.target
        let newToast = {
            name: form.name.value,
            darkness: form.cooktime.value
        }
        _toastService.addToast(newToast);
        _draw();
    }

    deleteToast(index) {
        _toastService.deleteToast(index);
        _draw();
    }

    addTopping(index, event) {
        event.preventDefault()
        let form = event.target
        let newTop = form.topping.value
        _toastService.addTopping(index, newTop)
        _draw()
    }

    deleteTopping(index, tIndex) {
        _toastService.deleteTopping(index, tIndex);
        _draw();
    }

}