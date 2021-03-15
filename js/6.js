var array = []
function appendArray() {

    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('resultArray')
    result.innerHTML = array
}

function selectNumberInArray() {

    let returnArray = []
 
    for ( i = 0 ; i < array.length; i++ ) {
        let numberVerified = true
        for ( j = 0 ; j < returnArray.length; j++ ) {
            if ( array[i] === returnArray[j] ) {
                numberVerified = false
            }
        }
        if ( numberVerified === true ) {
            returnArray.push(array[i])
        }
    }

    const result = document.getElementById('resultNoRepeatArray')
    result.innerHTML = returnArray
}