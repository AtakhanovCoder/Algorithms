// the algorithm codes I solved in the hackerrank

const solveMeFirst = (a,b) =>{
    console.log(a+b)
}
solveMeFirst(3,5)

const simpleArraySum = (ar) =>{
        let res = ar.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          );
        console.log(res)
        }
simpleArraySum([15,30])

const compareTheTriplets = (a,b) =>{
        let aPoint = 0
        let bPoint = 0     
        for(let i=0;i<3;i++){
            if(a[i]>b[i]){
                aPoint++
            }
            else if(a[i]<b[i]){
                bPoint++
            }
        }
        console.log([aPoint,bPoint])
}
compareTheTriplets([5,6,7],[3,6,10])


const diagonalDifference = (arr) =>{
    let result = [0,0]
    for(let i=0;i<arr.length;i++){
        let a = arr[i][0+i]
        b = arr[i][arr.length-1-i]
        result = [result[0] + a, result[1]+b]
    }
    console.log(Math.abs(result[0]-result[1]))
}
diagonalDifference([
[1, 2, 3],
[4, 5, 6],
[9, 8, 9],
])


