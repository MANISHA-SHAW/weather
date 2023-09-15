let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "3735a390947ecf1818613f38ea7f061a";
const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)

    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if(jsonData.cod == 400){
        alert("Please enter location")
        image.src="error1.png";
        city.innerHTML="";
        temp.innerHTML="";
        type.innerHTML="";
    }
    if(jsonData.cod == 404){
        alert("Please enter valid location")
        image.src="error2.png";
        city.innerHTML="jsonData.name";
        temp.innerHTML="";
        type.innerHTML="";
    }
    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="./image/Clouds.jpg"
    }
    else if(type.innerHTML =="Clear"){
    image.src="./image/Clear.jpg"
    }
    else if(type.innerHTML =="Thunder Strom"){
        image.src="./image/Strom.jpg"
        }
        else if(type.innerHTML =="Rain"){
            image.src="./image/Rain.jpg"
            }
            else if(type.innerHTML =="Snow"){
                image.src="./image/Snow.jpg"
                }
                else if(type.innerHTML =="Haze"){
                    image.src="./image/Haze.jpg"
                    }
                    else if(type.innerHTML =="Mist"){
                        image.src="./image/Mist.jpg"
                        }
                        input.value=""                  
}
function myfun(){
    search=input.value;
    data(search)
}

