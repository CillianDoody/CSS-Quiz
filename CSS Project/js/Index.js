function nextPage(){
    window.location.href="Quiz.html";
}

let parent = document.getElementById("div1");
i=5;
let node1 = "";
Counter();

function Counter(){
    let header = document.createElement("h1");
    if(i != 1){
        node1 = document.createTextNode("This will go to the next page in " + i + " seconds.");
    }
    else{
        node1 = document.createTextNode("This will go to the next page in " + i + " second.");
    }
    header.appendChild(node1);
    parent.appendChild(header);

    let button = document.getElementById("Next"); 
    button.addEventListener('click', nextPage, false);

    setTimeout(function decreaseValue(){
        i--;
        parent.removeChild(header);
        if(i>0){
            Counter();
        }
        else{
            nextPage();
        }
    }, 1000);
}