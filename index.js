// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block > 42){
        return block - 42
    } else {
        return 42 - block
    }

}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
    
}

function distanceTravelledInFeet(a, b){
    if (b > a) {
    return (b - a) * 264
    } else {
        return (a -b) * 264
    }
}

function calculatesFarePrice(start, destination){
    let x = distanceTravelledInFeet(start, destination)
    if (x <= 400) {
        return 0
    } else if (x > 400 && x <= 2000) {
        return (x - 400) * .02
    } else if (x > 2000 && x < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }

}