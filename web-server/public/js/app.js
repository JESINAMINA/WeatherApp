console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


function addfav(favs){
    console.log(favs)
    console.log(favs.length)
    for(i=0;i<favs.length;i++){
        
    var BTN = document.createElement("BUTTON");
    BTN.innerHTML = favs[i]._id;  
    BTN.id = favs[i]._id

    BTN.onclick = function(){
       document.querySelector('input').value = this .id
       var evt = document.createEvent("Event");
        evt.initEvent("submit", true, true);
        document.getElementById("wthr").dispatchEvent(evt);}
    var foobar = document.getElementById("foo")
    foobar.appendChild(BTN)}
}



fetch('http://localhost:3000/favorites').then((response) => {
        response.json().then((data) => {
           console.log(data._id)
           addfav(data);
        })
    })



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("I'm hit")
    const checkbox = document.querySelector('input[name = "units"]:checked').value

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location + '&units=' + checkbox).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})