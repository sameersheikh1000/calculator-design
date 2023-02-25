function abc(number){
document.getElementById("screen").value += number
console.log(number)

}
function equal(equal){
 var equal=document.getElementById("screen").value
console.log(equal);
var result=eval(equal)
document.getElementById("screen").value=result

}
function allclear(){
    document.getElementById('screen').value =("")

    
}
function akclear(){
   var sameer= document.getElementById('screen').value 
   var kamran=sameer.slice(0,-1)
   document.getElementById("screen").value=kamran
    

    
}