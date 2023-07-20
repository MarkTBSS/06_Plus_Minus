function plusMinus(arr) {
    var n = arr.length
    var numberOfPositiveValue = 0
    var numberOfNegativeValue = 0
    var numberOfZeroValue = 0

    for (var i = 0; i < n; i++) {
        if (arr[i] > 0) {
            numberOfPositiveValue = numberOfPositiveValue + 1
        }
        if (arr[i] < 0) {
            numberOfNegativeValue = numberOfNegativeValue + 1
        }
        if (arr[i] === 0) {
            numberOfZeroValue = numberOfZeroValue + 1
        }
    }
    
    var numberOfPositiveValueAfterMultipleN = numberOfPositiveValue / n
    var numberOfNegativeValueAfterMultipleN = numberOfNegativeValue / n
    var numberOfZeroValueAfterMultipleN = numberOfZeroValue / n

    console.log(numberOfPositiveValueAfterMultipleN.toFixed(6))
    console.log(numberOfNegativeValueAfterMultipleN.toFixed(6))
    console.log(numberOfZeroValueAfterMultipleN.toFixed(6))
}

var a = [-4, 3, -9, 0, 4, 1];
plusMinus(a)