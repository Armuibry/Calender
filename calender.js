let year = document.getElementById("year");
let month = document.getElementById("month");
let button = document.getElementById("btn");
let input = document.getElementById("input");
let divs = document.getElementsByTagName("div");
let monthValue = "";
let yearValue = "";

let dt = new Date(1);
let endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();

button.addEventListener("click",()=>{
    let value = input.value;
    for(let div of divs){
        if(div.innerHTML == value && div.className == "green"){
            div.classList.remove("green");
            div.className = "white"
            
        }
        
        else if(div.innerHTML == value && div.className == "white" ){
            div.classList.remove("white")
            div.className = "green"
            
        }
    }
})

function getCurrDate(){
    let allDates = "";
    for(let i=dt.getDay(); i >0; i--){
        allDates += "<div>" + " " + "</div>"
    }

    for(let i=1; i<=endDate; i++){
        allDates += "<div class='white'>" + i + "</div>"
    }
    
    let total = 42;
    total = total - (endDate + dt.getDay());

    for (let i = 0; i < total; i++) {
        allDates += "<div>" + " " + "</div>"
        
    }
    document.getElementById('days').innerHTML = allDates;

}


month.addEventListener("change",(e)=>{
    monthValue = e.target.value;
    if(monthValue && yearValue){
        let d = new Date(monthValue + " " + "1" + yearValue)
        let newDate = new Date(
            d.getFullYear(),
            d.getMonth() + 1,
            0
        ).getDate();
        let allDates = "";
    for(let i=d.getDay(); i >0; i--){
        allDates += "<div>" + " " + "</div>"
    }

    for(let i=1; i<=newDate; i++){
        allDates += "<div class='white'>" + i + "</div>"
    }
    
    let total = 42;
    total = total - (newDate + d.getDay());

    for (let i = 0; i < total; i++) {
        allDates += "<div>" + " " + "</div>"
        
    }
    document.getElementById('days').innerHTML = allDates;
    }
})

year.addEventListener("change",(e)=>{
    yearValue = e.target.value;
    if(yearValue && monthValue){
        let d = new Date(monthValue + " " + "1" + yearValue)
        let newDate = new Date(
            d.getFullYear(),
            d.getMonth() + 1,
            0
        ).getDate();
        let allDates = "";
    for(let i=d.getDay(); i >0; i--){
        allDates += "<div>" + " " + "</div>"
    }

    for(let i=1; i<=newDate; i++){
        allDates += "<div class='white'>" + i + "</div>"
    }
    
    let total = 42;
    total = total - (newDate + d.getDay());

    for (let i = 0; i < total; i++) {
        allDates += "<div>" + " " + "</div>"
        
    }
    document.getElementById('days').innerHTML = allDates;
    }
})

getCurrDate();






