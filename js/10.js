firstArray = [6, 8]
secondArray = [8, 9]

function appendArray(array) {
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

function getIndexEquals() {
    const equalsArray = []
    for ( i = 0; i < firstArray.length; i++) {
        for ( j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                equalsArray.push(firstArray[i])
            }
        }
    }
    console.log(equalsArray)
    const result = document.getElementById('resultEqualArray')
    result.innerHTML = equalsArray

}