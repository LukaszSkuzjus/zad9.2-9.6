//zad 9.2 ////////////////////////////

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames= femaleNames.concat(maleNames);
var newName = 'Marian';
if(allNames.indexOf(newName) === -1)
{
	allNames.push(newName);
}
console.log(allNames);

//zad 9.3 ///////////////////////////

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
dinosaur=dinosaur.toUpperCase();
text=text.replace("Velociraptor",dinosaur);
var halfOfTheText="";
for(var i=0;i<text.length/2;++i){
	halfOfTheText+=text[i];
}
console.log(halfOfTheText);

//zad 9.4 ///////////////////////////

function drawTree(n)
{
	for(var i=1 ;i<=n;++i)
	{
	var stars="";
	var spaces="";
		for(var j=1 ;j<=2*i-1;++j)
		{
		stars+="*";	
		}
		for(var k=n-1 ;k>=i;--k)
		{
			spaces+=" ";
		}
		console.log(spaces+stars);
	}
}
//drawTree(25);

//zad 9.5 ///////////////////////////

var referenceToAllButtons = document.getElementsByClassName("button");
for(var i=0;i<referenceToAllButtons.length;i++)
{
	console.log(referenceToAllButtons[i].innerText);
}


//zad 9.6 ///////////////////////////

var referenceToButton=document.getElementById("addElem");

referenceToButton.addEventListener("click",function(){
var referenceToUl=document.getElementById("list");
var referenceToLi=document.createElement("li");
var numberOfChildNodesOfUl=referenceToUl.children.length;
referenceToLi.innerText="item " +  numberOfChildNodesOfUl;
referenceToUl.appendChild(referenceToLi);
});
