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

mediana = (array) => {
    array.sort((a, b) => a - b)
    let midtest = array.length % 2

    if(midtest === 1){
        let mid = (array.length - 1) / 2
        return array[mid]
    }else{
        let mid = array.length / 2
        return ariMedia([array[mid - 1], array[mid]])
    }
}

let number = [10,20,30,10,20,20]

let number2 = [[7,2],[9,5],[3,1]]

console.log(ariMedia(number))
console.log(pondMedia(number2))
console.log(mediana([15, 14, 8, 7, 3]))