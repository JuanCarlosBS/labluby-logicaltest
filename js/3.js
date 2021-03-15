var array = [0, false, undefined, null, '']

function appendArray() {

    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('result')
    result.innerHTML = array
}

function clearArray() {

    clearedArray = []

    for (i = 0; i < array.length; i++) {
        if (!array[i] === undefined || !array[i] === null || !array[i] === '' || !array[i] === false || !array[i] === 0) {
            clearedArray.push(array[i])
        }
    }

    const result = document.getElementById('resultClear')
    result.innerHTML = clearedArray

}