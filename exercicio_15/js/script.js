/*
    * - Quando clicar no botão de adicionar, a casa deve ser adicionada numa lista logo abaixo do formulário.
    * - Quando for adicionada, deve vir com um botão de "Remover"
    Todo - Quando remover for clicado, o elemento é removido da lista.
    
    ? removeChild
    ? Sintaxe: var filhoRemovido = elemento.removeChild(filho);
               elemento.removeChild(filho);

    ? parentNode
    ? Sintaxe: parentNode = node.parentNode
*/

function addHouse() {
    // Infos
    const residenceNumber = document.getElementById("residence").value
    const district = document.getElementById("district").value
    const city = document.getElementById("city").value

    // Create List & Use Infos
    const newList = document.createElement("li")
    newList.innerText = "Número: " + residenceNumber + " Bairro: " + district + " Cidade: " + city 

    // Create Remove Button
    const removeBtn = document.createElement("button")
    removeBtn.type = "button"
    removeBtn.innerText = "Remover"
    removeBtn.setAttribute("onclick", "removeHouse(this)")

    // Append
    newList.appendChild(removeBtn)
    document.getElementById("houseList").appendChild(newList)
}

function removeHouse(button) {
    let list = button.parentNode;
    document.getElementById("houseList").removeChild(list);
}