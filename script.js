let input = document.querySelector('#input')
let submitButton = document.querySelector('#submitButton')
let textarea = document.querySelector('#textarea')

submitButton.addEventListener('click', GetCharacterInfo)

function GetCharacterInfo()
{
    let fullUri = 'https://www.swapi.tech/api/people/?name=' + input.value
    fetch(fullUri)
        .then(res => res.json())
        .then(data => 
        {
            let properties = data.result[0].properties
            textarea.value = `Name: ${properties.name} \nheight: ${properties.height} \nmass: ${properties.mass} \ngender: ${properties.gender} \nhair colour: ${properties.hair_color}`
        })
        .catch(textarea.value = 'Incorrect input') 
} 