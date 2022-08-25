
function Subset(SetA,SetB){
    let sunset = new Set(SetA);

    for(let i of SetB){
        if(SetA.has(i)){
            return true;
        }
        return false;
    }
    return false;
}