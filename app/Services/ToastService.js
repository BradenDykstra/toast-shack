import Toast from "../models/Toast.js";

//Private
let _state = {
    toasts: []
}


//Public
export default class ToastService {
    addTopping(index, newTop) {
        _state.toasts[index].toppings.push(newTop);
        this.saveToast();
    }
    deleteToast(index) {
        _state.toasts.splice(index, 1);
        this.saveToast();
    }
    addToast(newToast) {
        _state.toasts.push(new Toast(newToast));
        this.saveToast();
    }
    deleteTopping(index, tIndex) {
        _state.toasts[index].toppings.splice(tIndex, 1);
        this.saveToast();
    }

    get Toasts() {
        return _state.toasts.map(toast => new Toast(toast));
    }

    loadToast() {
        let savedToast = JSON.parse(localStorage.getItem("Toast"));
        if (savedToast) {
            _state.toasts = savedToast;
        }
    }

    saveToast() {
        localStorage.setItem("Toast", JSON.stringify(_state.toasts));
    }

}
