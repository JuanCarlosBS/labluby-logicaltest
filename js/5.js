var noReturnArray = [];
var array = [];

function appendArray() {

    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('resultArrayAll')
    result.innerHTML = array
}

function appendNoReturnArray() {
    const noReturnNumber = document.getElementById('noReturnNumber').value

    noReturnArray.push(noReturnNumber)

    const result = document.getElementById('resultNoReturnArray')
    result.innerHTML = noReturnArray
}

function selectNumberInArray() {

    let returnArray = []
 
    for ( i = 0 ; i < array.length; i++ ) {
        let numberVerified = true
        for ( j = 0 ; j < noReturnArray.length; j++ ) {
            if ( array[i] === noReturnArray[j] ) {
                numberVerified = false
            }
        }
        if ( numberVerified === true ) {
            returnArray.push(array[i])
        }
    }

    const result = document.getElementById('resultReturnArray')
    result.innerHTML = returnArray
}