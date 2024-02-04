const textType = "span";

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayEminem(data);
    })
    .catch((err) => console.log("problem: ", err));

function displayEminem(data) {

    let eminem = document.getElementById("eminem");
    eminem.classList.remove("d-none");
    let arr = data.data;

    for(let i = 0; i < arr.length; i++)
    {
        let slot = data.data[i];
        let img = document.createElement("img");
        img.setAttribute("src", slot.album.cover_big);
        img.setAttribute("height", "200");
        img.setAttribute("width", "200");
        img.setAttribute("alt", "Flower");  
        img.setAttribute("id","emi_img"+i);     

        let text = document.createElement(textType);
        text.setAttribute("id","emi_text"+i);
        text.innerHTML = "";
        eminem.appendChild(text);
        eminem.appendChild(img);
    }
}   


fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displaymetallica(data);
    })
    .catch((err) => console.log("problem: ", err));

    function displaymetallica(data) {

        let metallica = document.getElementById("metallica");
        metallica.classList.remove("d-none");
        let arr = data.data;

        for(let i = 0; i < arr.length; i++)
        {
            let slot = data.data[i];
            let img = document.createElement("img");
            img.setAttribute("src", slot.album.cover_big);
            img.setAttribute("height", "200");
            img.setAttribute("width", "200");
            img.setAttribute("alt", "Flower");      
            img.setAttribute("id","met_img"+i);  
            
            let text = document.createElement(textType);
            text.setAttribute("id","met_text"+i);
            text.innerHTML = "";
            metallica.appendChild(text);
            metallica.appendChild(img);
        }
    } 


    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayqueen(data);
    })
    .catch((err) => console.log("problem: ", err));

function displayqueen(data) {

    let queen = document.getElementById("queen");
    queen.classList.remove("d-none");
    let arr = data.data;

    for(let i = 0; i < arr.length; i++)
    {
        let slot = data.data[i];
        let img = document.createElement("img");
        img.setAttribute("src", slot.album.cover_big);
        img.setAttribute("height", "200");
        img.setAttribute("width", "200");
        img.setAttribute("alt", "Flower");  
        img.setAttribute("id","que_img"+i);       
       
        let text = document.createElement(textType);
        text.setAttribute("id","que_text"+i);
        text.innerHTML = "";
        queen.appendChild(text);
        queen.appendChild(img);
    }
} 

    function buttonClick()
    {
        let eminem = document.getElementById("eminem");

        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayEmiTexts(data);
        })
        .catch((err) => console.log("problem: ", err));

        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayMetTexts(data);
        })
        .catch((err) => console.log("problem: ", err));

        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            displayQueTexts(data);
        })
        .catch((err) => console.log("problem: ", err));

    }

    function displayEmiTexts(data)
    {
        let arr = data.data;
        for(let i = 0; i < arr.length; i++)
        {
            let slot = arr[i];

            let text = document.getElementById("emi_text"+i);
            text.innerHTML = slot.album.title;
        }
    }

    function displayMetTexts(data)
    {
        let arr = data.data;
        for(let i = 0; i < arr.length; i++)
        {
            let slot = arr[i];
            let text = document.getElementById("met_text"+i);
            text.innerHTML = slot.album.title;


        }
    }

    
    function displayQueTexts(data)
    {
        let arr = data.data;
        for(let i = 0; i < arr.length; i++)
        {
            let slot = arr[i];
            let text = document.getElementById("que_text"+i);
            text.innerHTML = slot.album.title;
        }
    }