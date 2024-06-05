let current = "dark";


//XD????????????????????????
let whole = "";
let topBarDark = "";
let fileDark = "";
let topButtonDark = "";
let topButton2Dark = "";
let contentsDark = "";
let optionsDark = "";
let textDivDark = "";
let textDark = "";

function start(){
    let textbox = document.getElementById("textspot");
    textbox.value = document.cookie;
}

function clearCookies(){
    document.cookie = "put ur text here :3";
    alert("cleared!");
}


function saveCookie(){
    let textbox = document.getElementById("textspot");
    document.cookie = textbox.value;
    console.log(document.cookie)
    alert("saved to cookies!");
}

function printing(){
   var printwindow = window.open('', 'PRINT', 'height=400,width=600');
   let text = document.getElementById("textspot").value; 
   printwindow.document.write('</head><body><pre>');
   printwindow.document.write(text);
   printwindow.document.write('</pre></body></html>');
   printwindow.print();
   printwindow.close();
}

function saveLocal(){
    const link = document.createElement("a");
    const text = document.getElementById("textspot").value;
    const file = new Blob([text], {type: 'text/plain'});

    link.href = URL.createObjectURL(file);
    link.download = "file.txt";
    link.click();
    URL.revokeObjectURL(file);
    alert("saved!");
}

function switchTheme(){
    let topBar = document.getElementById("topBar");
    let file = document.getElementById("file");
    let topButton = document.getElementById("topButton");
    let topButton2 = document.getElementById("topButton2");
    let contents = document.getElementById("contents");
    let options = document.getElementById("options");
    let textDiv = document.getElementById("textbox");
    let text = document.getElementById("textspot");
    

    //ughhhhhhh there is probably a better way of doing this but im a bitch and will do it like This OMEGALOL?, dude im dying why am i making it like this omfghisudoagjhsda
    if(current != "light"){
        whole = document.body.style.backgroundColor;
        topBarDark = [topBar.style.backgroundColor, topBar.style.color];
        fileDark = [file.style.backgroundColor, file.style.color];
        topButtonDark = [topButton.style.backgroundColor, topButton.style.color];
        topButton2Dark = [topButton2.style.backgroundColor, topButton2.style.color];
        contentsDark = [contents.style.backgroundColor, contents.style.color];
        optionsDark = [options.style.backgroundColor, options.style.color];
        textDivDark = [textDiv.style.backgroundColor, textDiv.style.color];
        textDark = [text.style.backgroundColor, text.style.color];
    }

    console.log(whole);
    

    if(current == "dark"){
        document.body.style.backgroundColor = "#edf2ff";
        text.style.backgroundColor = "#b6bbc7";

        //chat gpt my beloved :3 (i had 0 clue how to do this with the damn tarnsitojn i hate the world :angry:)
        var textElements = document.querySelectorAll('.text');
                // Loop through each element and change its color
                textElements.forEach(function(element) {
                    element.style.color = 'rgba(0, 0, 0, 1)'; // Change to desired color
                });
        topButton.style.backgroundColor = "#b1bddb";
        topButton2.style.backgroundColor = "#b1bddb";
        topButton.style.color = "black";
        topButton2.style.color = "black";
        topBar.style.backgroundColor = "#8fa7cf"
        console.log("bleghh");
        
        current = "light";
        document.getElementById("themes").innerHTML = "switch to dark mode";
    }else{
        document.body.style.backgroundColor = whole;
        text.style.backgroundColor = textDark[0];

        //chat gpt my beloved :3 (i had 0 clue how to do this with the damn tarnsitojn i hate the world :angry:)
        var textElements = document.querySelectorAll('.text');
                // Loop through each element and change its color
                textElements.forEach(function(element) {
                    element.style.color = textDark[1]; // Change to desired color
                });
        topButton.style.backgroundColor = topButtonDark[0];
        topButton2.style.backgroundColor = topButton2Dark[0];
        topButton.style.color = topButtonDark[1];
        topButton2.style.color = topButton2Dark[1];
        topBar.style.backgroundColor = topBarDark[0];
        current = "dark";
        document.getElementById("themes").innerHTML = "switch to light mode";
    }
}
