//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];


let findWords = function (){
    let match_array = [];
    for (let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i]) == true){
            match_array.push("Matched dog_name")
        } else {
            match_array.push("No Matches")
        }
    }
    return match_array
}
console.log(findWords())

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let array_name = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(aray_name){
    for(let i = 0; i < array_name.length; i++){
        if(i%2 === 0){
            array_name[i] = "even index"
        }
    } 
    return array_name
}

console.log(replaceEvens(array_name))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]  