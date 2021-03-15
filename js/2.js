var array = []

function appendArray() {

    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('result')
    result.innerHTML = array
}

function invertArray() {

    invertedArray= []

    for (var i = 0; i < array.length; i++) {
        invertedArray.push(array[array.length - i - 1])
    }
    
    const result = document.getElementById('resultInv')
    result.innerHTML = invertedArray
}    