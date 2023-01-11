// function getData(){
//     const firstName=document.getElementById(fname);
//     const lastName= document.getElementById(lname);
//     const Numb= document.getElementById(num);
//     var file={
//         FirstName:firstName,
//         LastName:lastName,
//         MobileNo:Numb
//     }
        
//     document.getElementById(print).innerHTML(<p> console.log(file)</p>)
//     saveAs(file, "data.txt");
// }

import json_file from json
 

const form =document.getElementById('form')
form.addEventListener('submit', function(event){
    event.preventDefault()
    var FirstName =document.getElementById('fname').value
    var LastName=document.getElementById('lname').value
    var Mobile =document.getElementById('num').value
    // console.log(FirstName)
    // console.log(LastName)
    // console.log(Mobile)
    var data={
    FirstName:FirstName,
    LastName:LastName,
    MobileNo:Mobile
}
//  txt = CreateObject("Scripting.FileSystemObject");  
// var s = txt.CreateTextFile(".\Data.txt", true);
// s.WriteLine(data);
// s.close();

    data= JSON.stringify(data);
    var file = new Blob([data],{type:Text}); //why we use blob ?

      //  json.dump  why ??
    //   s = open("myfile.json", "w")
    //   json.dump(data,s);


    var anchor = document.createElement("a");
    anchor.href =URL.createObjectURL(file);
    anchor.download = "data.txt";
    anchor.click();
})

