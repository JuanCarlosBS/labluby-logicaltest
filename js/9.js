var array = []

function appendArray() {
    const number = document.getElementById('number').value

    array.push(number)
    
    const result = document.getElementById('resultArray')
    result.innerHTML = array
}

function getIndexes(quantity, currentArray) {
    const coef = currentArray * quantity
    const response = []

    const interableArray = [...Array(quantity).keys()]

    interableArray.forEach((item, index) => {
        if (index === 0) {
            response.push(coef)
            return
        }

        response.push(coef + index)
        return
    })

    return response
}
function groupArray() {
    const response = []
    const quantity = Number(document.getElementById('quantity').value)
    array.forEach((item, index) => {
        const indexes = getIndexes(quantity, index)
        const interableArray = [...Array(indexes.length).keys()]

        const tempResponse = []

        interableArray.forEach((subItem, subIndex) => {
            const existingEntity = array[indexes[subIndex]]

            if (existingEntity) {
                tempResponse.push(existingEntity)
            }
        })
        response.push(tempResponse)
    })

    response.filter(item => item.length > 0 )

    const result = document.getElementById('resultArray')
    result.innerHTML = response.filter(item => item.length > 0 )
    console.log(response.filter(item => item.length > 0 ))
}