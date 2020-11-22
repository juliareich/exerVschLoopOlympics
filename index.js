//Premilinaries
//1
for (i = 0; i < 10; i++) {
    console.log(i)
}


//2
for(i = 9; i >= 0; i--){
    console.log(i)
}

//3
var fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
   console.log(fruit[i])
}
//Bronze
//1
function arr(max){
    var returnArr = [];
    for(var i = 0; i < max; i++){
        returnArr[i] = i;
    }
    return returnArr;
}
console.log(arr(10))

//2
for(i = 0; i < 101; i = i + 2){
    console.log(i)
}

//3
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
function fruitArr(max){
    var newFruitArr = [];
        for(var i = 0; i < fruit.length; i= i + 2){
            newFruitArr[i] = fruit[i];
            }
        return newFruitArr;
}
console.log(fruitArr(fruit.length))
    


    //Silver
    //1
   
    var peopleArray = [
        {
          name: "Harrison Ford",
          occupation: "Actor"
        },
        {
          name: "Justin Bieber",
          occupation: "Singer"
        },
        {
          name: "Vladimir Putin",
          occupation: "Politician"
        },
        {
          name: "Oprah",
          occupation: "Entertainer"
        }
      ]

for(i = 0; i < peopleArray.length; i++){
        console.log(peopleArray[i].name)
    }

//2

function namesArr(max){
    var names = [];
    var occs = [];
    for(var i = 0; i < peopleArray.length; i++){
        names[i] = peopleArray[i].name;
        occs[i] = peopleArray[i].occupation;
    }
    return names + " " + occs;
}
console.log(namesArr(peopleArray[i]))

//3

function twoArrays(max){
    var namesAlt = [];
    var occupations = [];
    for (var i = 0; i < peopleArray.length; i++){
        if( i % 2 === 0) {
        namesAlt[i] = peopleArray[i].name;}
        else {
        occupations[i] = peopleArray[i].occupation;}

    }
    return namesAlt + " " + occupations;
}

console.log(twoArrays(peopleArray[i]))

//Gold
//1

function array(max){
    var returnArray = [];
    var nestedArray = [];
    for(var i = 0; i < max; i++){
        returnArray[i] = nestedArray = [];
        for( var j = 0; j < max; j++){
            nestedArray[j] = 0;
        }
        //return nestedArray;
    }
    return returnArray;
}
console.log(array(3))

//2

function arrayA(max){
    var returnArrayA = [];
    var nestedArrayA = [];
    for(var i = 0; i < max; i++){
        returnArrayA[i] = nestedArrayA = [];
        for( var j = 0; j < max; j++){
            nestedArrayA[j] = i;
        }
        //return nestedArray;
    }
    return returnArrayA;
}
console.log(arrayA(3))

//3
function arrayB(max){
    var returnArrayB = [];
    var nestedArrayB = [];
    for(var i = 0; i < max; i++){
        returnArrayB[i] = nestedArrayB = [];
        for( var j = 0; j < max; j++){
            nestedArrayB[j] = j;
        }
    }
    return returnArrayB;
}
console.log(arrayB(3))

//4
var x = "x";
function arrayC(max){
    var returnArrayC = [];
    var nestedArrayC = [];
    for(var i = 0; i < max; i++){
        returnArrayC[i] = nestedArrayC = [];
        for( var j = 0; j < max; j++){
            nestedArrayC[j] = "x";
        }
    }
    return returnArrayC;
}
console.log(arrayC(3))