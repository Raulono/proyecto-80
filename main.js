var names_of_people=[];
function submit(){
    var guestname=document.getElementById("name2").value;
    names_of_people.push(guestname)
    console.log(names_of_people);
    console.log(guestname);
    var longitud=names_of_people.length;
    document.getElementById ("display name").innerHTML=names_of_people.toString();
}
function sorting(){
 names_of_people.sort();
 var i=names_of_people.join ("<br>");
 document.getElementById("sorted").innerHTML=i.toString();   
}
function show(){
    var i=names_of_people.join ("<br>");
    document.getElementById("p1").innerHTML=i.toString(); 
    document.getElementById("sortbutton").style.display="block";
}
function search(){
    var s=document.getElementById ("name1").value;
var found=0;
var j;
for (j=0;j<names_of_people.length;j++);
{
if(s==names_of_people[j]){
found=found+1;
}   
}
document.getElementById("p2").innerHTML="name found"+ found+" times";
}