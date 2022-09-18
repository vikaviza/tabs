var tabs = document.querySelectorAll(".tab")
var buttons = document.querySelectorAll("button")

function showTab(event, id){
    for(var x of tabs){
        x.style.display = "none"
        x.style.opacity = "0"
    }
    document.getElementById(id).style.display = "block"

    setTimeout(function(){
        document.getElementById(id).style.opacity = "1"
    })

    // Button style
    for(var x of buttons){
        x.classList.remove("selected")
    }
    event.currentTarget.classList.add("selected")
}