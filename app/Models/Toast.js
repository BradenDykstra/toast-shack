export default class Toast {
    constructor(data) {
        this.name = data.name
        this.darkness = data.darkness
        this.toppings = data.toppings || []
    }

    getTemplate(index) {
        let template = `<div class="col-3 bg-secondary rounded border m-4">
                <h1><span class="text-dark">Name:</span> ${this.name}</h1>
                <h3><span class="text-dark">Cooktime:</span> ${this.darkness}</h3>`
        template += this.drawDarkness(this.darkness);
        template += `<hr><h4 class="text-dark">Toppings:</h4>
                <ul>`
        template += this.drawToppings(index)
        template += `</ul>`
        template += `<form onsubmit="app.controllers.toastController.addTopping(${index}, event)">
                        <input type="text" class="form-control mb-2" name="topping" placeholder="Add a topping!">
                        <button class="btn btn-success mb-3" type="submit"><i class="fas fa-plus"></i></button>
                        </form>`
        template += `<button class="btn btn-danger mb-3" onclick="app.controllers.toastController.deleteToast(${index})">Delete</button>
            </div>`

        return template
    }
    drawDarkness(darkness) {
        let cookTemplate;
        switch (darkness) {
            case "10":
                cookTemplate = `<h4>This looks like charcoal... It used to be bread?</h4>`;
                break;
            case "9":
                cookTemplate = `<h4>Is this food anymore? Is it still edible?</h4>`;
                break;
            case "8":
                cookTemplate = `<h4>This is definitely burnt. It's way too dark.`;
                break;
            case "7":
                cookTemplate = `<h4>Are you sure this isn't burnt? It looks too dark.</h4>`;
                break;
            case "6":
                cookTemplate = `<h4>It's a little on the dark side, but it's still good.</h4>`;
                break;
            case "5":
                cookTemplate = `<h4>Perfectly balanced, as all things should be.</h4>`;
                break;
            case "4":
                cookTemplate = `<h4>It's a bit light, but there's nothing wrong with that.</h4>`;
                break;
            case "3":
                cookTemplate = `<h4>You can barely tell, but it is darker.</h4>`;
                break;
            case "2":
                cookTemplate = `<h4>Should we put this back in the toaster?</h4>`;
                break;
            case "1":
                cookTemplate = `<h4>This isn't toast yet, it's just warm bread...</h4>`;
                break;
        }
        return cookTemplate
    }
    drawToppings(index) {
        let topTemplate = "";
        this.toppings.forEach((topping, tIndex) => {
            topTemplate += `<li>${topping} <span class="text-danger span-btn" onclick="app.controllers.toastController.deleteTopping(${index}, ${tIndex})"><i class="fas fa-times"></i></span></li>`
        });
        return topTemplate
    }
}