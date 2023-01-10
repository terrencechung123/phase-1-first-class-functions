function Monday () {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");    
}

function Wednesday(){
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday(){
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday(){
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}


function runFiveMiles(){
    console.log("Go run");
}

function receivesAFunction(callBack){
    runFiveMiles();
    callBack();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("hi");
    }
}