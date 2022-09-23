class App {
    addProperty() {
        event.preventDefault()

        const typeOfProperty = document.querySelector("select[name='type'] option:checked").text
        const areaProperty = document.getElementById("area").value
        const isRented = document.querySelector("input[name='rented']").checked

        const property = new Property(typeOfProperty, areaProperty, isRented)
        this.addPropertyList(property)
        this.cleanForm()
    }

    addPropertyList(property) {
        const newList = document.createElement("li")
        const propertyInfo = `Tipo: ${property.typeOfProperty} (Área: ${property.areaProperty}m²)`

        if (property.isRented) {
            const rentedMark = this.createRentedMark()
            newList.appendChild(rentedMark)
        }

        newList.innerHTML += propertyInfo
        const removeBtn = this.createRemoveBtn()
        newList.appendChild(removeBtn)
        document.getElementById("properties").appendChild(newList)
    }

    createRentedMark() {
        const rentedMark = document.createElement("span")
        rentedMark.innerText = "ALUGADO"
        rentedMark.style.backgroundColor = "red"

        return rentedMark
    }

    createRemoveBtn() {
        const removeBtn = document.createElement("button")
        removeBtn.type = "button"
        removeBtn.innerText = "Remover"
        removeBtn.setAttribute("onclick", "app.removeProperty()")

        return removeBtn
    }

    removeProperty() {
        let list = event.target.parentNode;
        document.getElementById("properties").removeChild(list);
    }

    cleanForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }
}
