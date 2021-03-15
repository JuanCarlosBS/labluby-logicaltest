var array = []

function appendArray() {
    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('resultArray')
    result.innerHTML = array
}

function unifyArray() {
    const flattened = array.flat(Infinity)

    const result = document.getElementById('resultUniqueArray')
    result.innerHTML = flattened
    console.log(flattened)
}