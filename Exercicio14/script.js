ariMedia = (array) => {
    let sum = 0
    array.forEach(itens => sum += itens);
    return sum / array.length
}

pondMedia = (array) => {
    let sumVal = 0, sumWg = 0    

    array.forEach(itens => {
        sumWg += itens[1]
        sumVal += (itens[0] * itens[1])
    })
    return sumVal / sumWg
}

let number = [10,20,30,10,20,20]

let number2 = [[7,2],[9,5],[3,1]]

console.log(ariMedia(number))
console.log(pondMedia(number2))