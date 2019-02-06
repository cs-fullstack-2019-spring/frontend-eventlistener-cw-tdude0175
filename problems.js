//can i have some loops brother
//this makes sure it can repeat.
function loops()
{
    userinput = "";
    while (userinput !== "n")
    {
        userinput = prompt("weclome back");
    }
}
//[if else] used for changing backgorund color
//using [classlist] REQUIRES to remove other class
//removing a class that is not there doesn't cause a bug (yet?)
function titlechange(e)
{
    titlenumber.innerHTML = e.target.innerHTML;
    if(e.target.innerHTML === '1')
    {
        titlenumber.classList.remove("red");
        titlenumber.classList.add("blue");
    }
    else
        {
            titlenumber.classList.remove("blue");
            titlenumber.classList.add("red");
        }
}

//toggle is called so you can change it back
//adding the class makes it shrink. Did not do 1 px beacause to small to easily see and hard to revert it back

function fontSize(e)
{
    e.target.classList.toggle("Small");
}

//gave them goofy names to be easier to remember
var muffinbutton = document.querySelector("#muffinButton");
var titlenumber = document.getElementById("title");
var oneButton = document.getElementById("titleChange");
var twoButton = document.getElementById("titleRework");
var lorelList = document.getElementsByClassName("h2");



//called the functions to arms
muffinbutton.addEventListener("click" ,loops);

oneButton.addEventListener("click",titlechange);

twoButton.addEventListener("click",titlechange);


//make all the [h2] tags for problem 3 have {eventListeners} easily
for(i=0; i<lorelList.length;i++)
{
    lorelList[i].addEventListener("click",fontSize);
}