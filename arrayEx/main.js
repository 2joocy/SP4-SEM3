/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];


var all = [];

all.concat(boys);
all.concat(girls);

for(var i = 0; i < all.length ; i++){
    console.log(all[i]);
}

var allArr = all.join();
var hyphenArr = "";

for(var i = 0; i < all.length ; i++){
    hyphenArr += all[i] + "-";
}

function deleteFirst(){
   all[0].pop;
}

function deleteLast(){
    all[length-1].pop;
}

function deleteOleAndJanne(){
    for(var i = 0; i < all.length ; i++){
        if(all[i] === "Ole" || all[i] === "Janne"){
            all[i].pop;
        }
    }
}

function reverseAll(){
    all.reverse();
}

function sortArray(){
    all.sort();
}