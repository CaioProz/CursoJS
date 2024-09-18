ariMedia = (array) => {
    let sum = 0
    array.forEach(itens => sum += itens);
    return sum / array.length
}

// Forma feita pelo curso

// const average = (...numbers) => {
//     const sum = numbers.reduce((accum, num) => accum + num, 0)
//     return sum / numbers.length
//   }
  
//   console.log(`Média Aritmética Simples: ${average(3, 6, 10, 9)}`)

pondMedia = (array) => {
    let sumVal = 0, sumWg = 0    

    array.forEach(itens => {
        sumWg += itens[1]
        sumVal += (itens[0] * itens[1])
    })
    return sumVal / sumWg
}

// const weightedAverage = (...entries) => {
//     const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
//     const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
//     return sum / weightSum
//   }
  
//   console.log(`Média Ponderada: ${weightedAverage(
//     { number: 9, weight: 3 },
//     { number: 7 },
//     { number: 10, weight: 1 },
//   )}`)

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

// const median = (...numbers) => {
//     const orderedNumbers = [...numbers].sort((a, b) => a - b)
//     const middle = Math.floor(orderedNumbers.length / 2)
//     if (orderedNumbers.length % 2 !== 0) {
//       return orderedNumbers[middle]
//     }
//     const firstMedian = orderedNumbers[middle - 1]
//     const secondMedian = orderedNumbers[middle]
//     return average(firstMedian, secondMedian)
//   }
  
//   console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
//   console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)


// const mode = (...numbers) => {
//     // [ [n, qtd], [n, qtd], [n, qtd] ]
//     const quantities = numbers.map(num => [
//       num,
//       numbers.filter(n => num === n).length
//     ])
//     quantities.sort((a, b) => b[1] - a[1])
//     return quantities[0][0]
//   }
  
//   console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

let number = [10,20,30,10,20,20]

let number2 = [[7,2],[9,5],[3,1]]

console.log(ariMedia(number))
console.log(pondMedia(number2))
console.log(mediana([15, 14, 8, 7, 3]))

moda([7,7,7,3,2,15,23,35,42])