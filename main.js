//how to select a single element
var heading = document.querySelector('.heading');
heading.style.color = "blue";
heading.style.fontSize="40px";
heading.style.textAlign="center";

var subs = document.getElementsByClassName("subs");
for(var i = 0; i<=subs.length; i=i+1){
 subs[i].style.color="blue";
}

var note = document.getElementsByClassName("note");
for(var b=0; b<=note.length; b=b+1){
    note[b].style.color="blue";
   }


