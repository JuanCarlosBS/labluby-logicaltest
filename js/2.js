var array = []

function appendArray() {

    const number = document.getElementById('number').value

        array.push(number)
    
    const result = document.getElementById('result')
    result.innerHTML = array
}

function invertedArray() {

    invertArray= []

    for (var i = 0; i < array.length; i++) {
        invertArray.push(array[array.length - i - 1])
    }
    
    const result = document.getElementById('resultInv')
    result.innerHTML = invertArray
}    