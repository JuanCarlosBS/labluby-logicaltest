var array = []

function arrayAppend() {

    const key = document.getElementById('key').value
    const value = document.getElementById('value').value

    array.push([key,value])
    
    const result = document.getElementById('result')
    result.innerHTML = array
}

function toObject() {

    const arrayToObject = new Map(array)

    const object = Object.fromEntries(arrayToObject)

    const result = document.getElementById('resultObject')
    result.innerHTML = object
    console.log(object)
    
}