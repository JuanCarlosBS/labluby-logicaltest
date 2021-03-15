function multiplyCharacter() {

    let quantity = Number(document.getElementById('quantity').value)
    const character = document.getElementById('character').value
    
    let array = []

    while (quantity != 0) {
        array.push(character)
        quantity -= 1
    }
    
    const result = document.getElementById('result')
    result.innerHTML = array
}