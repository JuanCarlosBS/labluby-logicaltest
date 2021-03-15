var firstArray = []
var secondArray = []

function appendArray(array){
    if(array === 1) {
        const number = document.getElementById('number').value

        firstArray.push(number)
        
        const result = document.getElementById('resultFirstArray')
        result.innerHTML = firstArray
    } else if (array === 2) {
        const number = document.getElementById('number').value

        secondArray.push(number)
        
        const result = document.getElementById('resultSecondArray')
        result.innerHTML = secondArray
    }
}

function arrayEquals() {
    let isEquals = true
    if (firstArray.length === secondArray.length) {
        for (let i = 0; i < secondArray.length; i++) {
            if (firstArray[i] != secondArray[i]) {
                isEquals = false
            }
        }
    } else {
        isEquals = false
    }

    const result = document.getElementById('resultEqualArray')
    result.innerHTML = isEquals
}