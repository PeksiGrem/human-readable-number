module.exports = function toReadable (number) {
    let countOfHungred = Math.floor(number / 100);
    let countOfOneDozen = number - countOfHungred * 100;
    let countOfDozen = Math.floor((number - (countOfHungred * 100)) / 10);
    let countOfUnit = (number - (countOfHungred * 100 + countOfDozen * 10));
    let result = [];
    switch (countOfHungred) {
        case 1:
            result.push("one hundred")
            break;
        case 2:
            result.push("two hundred")
            break;
        case 3:
            result.push("three hundred")
            break;
        case 4:
            result.push("four hundred")
            break;
        case 5:
            result.push("five hundred")
            break;
        case 6:
            result.push("six hundred")
            break;
        case 7:
            result.push("seven hundred")
            break;
        case 8:
            result.push("eight hundred")
            break;
        case 9:
            result.push("nine hundred")
            break;
        default:
            break;
    }
    if (countOfOneDozen < 20){
    switch (countOfOneDozen) {
        case 1:
            result.push("one")
            break;
        case 2:
            result.push("two")
            break;
        case 3:
            result.push("three")
            break;
        case 4:
            result.push("four")
            break;
        case 5:
            result.push("five")
            break;
        case 6:
            result.push("six")
            break;
        case 7:
            result.push("seven")
            break;
        case 8:
            result.push("eight")
            break;
        case 9:
            result.push("nine")
            break;
        case 10:
            result.push("ten")
            break;
        case 11:
            result.push("eleven")
            break;
        case 12:
            result.push("twelve")
            break;
        case 13:
            result.push("thirteen")
            break;
        case 14:
            result.push("fourteen")
            break;
        case 15:
            result.push("fifteen")
            break;
        case 16:
            result.push("sixteen")
            break;
        case 17:
            result.push("seventeen")
            break;
        case 18:
            result.push("eighteen")
            break;
        case 19:
            result.push("nineteen")
            break;
        default:
            break;
    }
    }
    else {
        switch (countOfDozen) {
            case 2:
                result.push("twenty")
                break;
            case 3:
                result.push("thirty")
                break;
            case 4:
                result.push("forty")
                break;
            case 5:
                result.push("fifty")
                break;
            case 6:
                result.push("sixty")
                break;
            case 7:
                result.push("seventy")
                break;
            case 8:
                result.push("eighty")
                break;
            case 9:
                result.push("ninety")
                break;
            default:
                break;
        }
        
        switch (countOfUnit) {         
            case 1:
                result.push("one")
                break;
            case 2:
                result.push("two")
                break;
            case 3:
                result.push("three")
                break;
            case 4:
                result.push("four")
                break;
            case 5:
                result.push("five")
                break;
            case 6:
                result.push("six")
                break;
            case 7:
                result.push("seven")
                break;
            case 8:
                result.push("eight")
                break;
            case 9:
                result.push("nine")
                break;
            default:
                break;
            }
    }
    
    let readable = result.join(' ');
    if(countOfUnit === 0 && countOfDozen === 0 && countOfHungred === 0){
        return result = "zero";
    }
    return readable;
}
