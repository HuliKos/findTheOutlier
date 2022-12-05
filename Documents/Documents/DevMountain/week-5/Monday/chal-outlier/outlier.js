function findTheOutlier (input) {
    let odds = []
    let even = []

    // for(i=0; i<input.length; i++){
        // if(input[i]%2 === 0){
        //     even.push(input[i])
        // } else {
        //     odds.push(input[i])
        // }
    // }
// Replacing the quoted out portion
        input.forEach(el => el%2 === 0 ? even.push(el): odds.push(el))

    // if (odds.length === 1) {
    //     return odds[0]
    // } else {
    //     return even[0]
    // }
// Replacing the quoted out portion above
        return odds.length === 1 ? odds[0] : even [0]

}


console.log(findTheOutlier ([2, 4, 0, 100, 4, 11, 2602, 36]))