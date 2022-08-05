const sleepIn = () =>{
    console.log("sleepIn", true || true)
    console.log("sleepIn", true && false)
    console.log("sleepIn", false || true)
}
sleepIn()

const  monkeyTrouble = (aSmile, bSmile) =>{

}   
monkeyTrouble(true,false)

const  sumDouble = (a,b) =>{    
    if(a === b){
        console.log("sumDouble",a*=4)
    }
    else{
        console.log("sumDouble", a+=b)
    }
}   
sumDouble(2,2)

const  parrotTrouble = (talking,hour) =>{    
    if(talking == true && hour < 7 && hour > 20){
        console.log(true)
    }
    console.log("parrotTrouble", talking == true && hour < 7)
}
parrotTrouble(true,6)

const  reverseArray = (l1) =>{    
    for(let i = l1.length - 1; i >= 0; i--) {
        console.log("reverseArray", l1[i])                  
    }
}
reverseArray([2,4,3]) 

const  pushArray = (arr) =>{    
    let bmw = "bmw"
    if(arr.includes(bmw)){
        return "This have"
    }
    else{
        return arr.push(bmw)
    }
}   
pushArray(["mers","volvo"]) 

const makes10 = (a,b) =>{
    if(a == 10 || b == 10 || a+b == 10){
        console.log('makes10',true);
    }
    else{
    console.log(false)
    }
}
makes10(9,10)

function getSecondLargest(nums) {
    let largest1 = Math.max(...nums);
    let arr2 = []
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== largest1) {
            arr2.push(nums[i])
            console.log('getSecondLargest',arr2);
        }  
    }
    let resp = Math.max(...arr2)
    console.log('getSecondLargest',resp)
}
getSecondLargest([2,3,6,6,5])

function reverseString(s) {
    let arr = []    
    for(let i=0;i<s.length;i++){
        let splArr = s.split('')
        let revArr = splArr.reverse()
        let strArr = revArr.toString()
        console.log('reverseString',strArr)
    }
}
reverseString('1234')

const bigWordSmallWord = (word) =>{
    for(let i=0;i<word.length;i++){
        if(word[i].includes(word[i].toUpperCase())){
            console.log(word[i].toLowerCase())
        }
        else if(word[i].includes(word[i].toLowerCase())){
            console.log(word[i].toUpperCase())
        }
    }
}
bigWordSmallWord('SalOm bU jS')

function modifyArray(nums) {
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 !==0){
            arr.push(nums[i]*3)
        }
        else if(nums[i]%2 !==1){
            arr.push(nums[i]*2)
        }
    }
    console.log(arr)
}
modifyArray([1,2,3,4,5])

const bubbleSort = (text) =>{
    let number = ["0","1","2","3","4","5","6","7","8","9"]
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let arr2 = []
    for(let i=0;i<number.length;i++){
        for(let j=0;j<text.length;j++){
            if(text[j].includes(number[i])){
                arr2.push(text[j])
            }
        }
    }
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<text.length;j++){
            if(text[j].includes(arr[i])){
                arr2.push(text[j])
            }
        }
    }
    console.log(arr2)
}
bubbleSort("g7f6e5d4c3b2a1")

function alphNumSort(txt){
    let number = ["0","1","2","3","4","5","6","7","8","9"]
    let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let num = []
    let arr = []
    for(let i=0;i<number.length;i++){
        for(let j=0;j<txt.length;j++){
            if(txt[j].includes(number[i])){
                num.push(txt[j])
            }
        }
    }
    for(let i=0;i<array.length;i++){
        for(let j=0;j<txt.length;j++){
            if(txt[j].includes(array[i])){
                arr.push(txt[j])
            }
        }
    }
    console.log(num)
    console.log(arr)
}
alphNumSort("bcd5defa4k3l12")

const nearHundred = (num) =>{
    if(num >= 90 && num <= 110){
        console.log(true)
    }
    else if(num >= 190 && num <= 210){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
nearHundred(111)

const bigNum = (a,b) =>{
    if(a > b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
bigNum(10,20)

const isLandScape = (width,height) =>{
    console.log(width > height)
}
isLandScape(1920,1080)

const fizzBuz = (input) =>{
    if(Number(typeof input) !== "number"){
        console.log("not num")
    }
    else if(input%3 ===0){
        console.log("fizz")
    }   
    else if(Number(input)%5 ===0){
        console.log("buzz")
    }
    else if(Number(input)%3 ===0 && Number(input)%5 ===0){
        console.log("fizzBuzz")
    }
    else{
        console.log(input)
    }
} 
fizzBuz(10)

// agar inpuut 3 bo'linsa qaytadi fizz
// agar inpuut 5 bo'linsa qaytadi  buzz
// agar inpuut 3 ga ham 5ga ham bo'linsa fizzBuzz qaytadi
// agar inpuut 3 ga ham 5ga ham bo'linmasa inputni ozi qaytadi
// agar son bo'lmasa "not num" qaytadi


const checkSpeed = (speed) =>{
    let point = 0;
    let penalty = speed / 5
    console.log(penalty)
    if(penalty == 12){
        console.log(penalty,"the document was withdrawn")
    }
} 
checkSpeed(55)

const sum = (limit) =>{  
    let sum = 0;
    if(limit%3 ===0){
        console.log(sum+=limit)
    }   
    else if(limit%5 ===0){
        console.log(sum+=limit)
    }
} 
sum(10)

let car = {
    model: "Toyota",
    make: "Estima",
    year: 2016,
    price: 50000
}
const showProperties = (obj) =>{  
    let object = {
        firstName: "Toyibxon",
        lastName: "Atakhanov",
        age: 15
    }
} 
showProperties()

const calculateGrade = (marks) =>{
    // 0-50: F
    // 51-60: D
    // 61-70: C
    // 71-80: B  
    // 81-100: A
    for(let i=0;i<marks.length;i++){
        let summa = 0
        if(marks[i]>0 && marks[i]<50){
            console.log(marks[i],"F")
            summa+=marks[i]
        }
        else if(marks[i]>51 && marks[i]<60){
            console.log(marks[i],"D")
        }
        else if(marks[i]>61 && marks[i]<70){
            console.log(marks[i],"C")
        }
        else if(marks[i]>71 && marks[i]<80){
            console.log(marks[i],"B")
        }
        else if(marks[i]>81 && marks[i]<100){
            console.log(marks[i],"A")
        }
    }
}
calculateGrade([81,74,86,59,77])

function diff21(n){
    
}
diff21(10)

function missingChar(str, n){
    if(str){
        let start = str.slice(0,n)
        let end = str.slice(n+1)
        console.log("missingChar",start+end)
    }
}
missingChar('code', 2)

function frontBack(str){
    let end = str.length - 1
    console.log("frontback",str[end]+str.slice(1,-1)+str[0])
}
frontBack('code')

function front3(str){
    let len3 = str.slice(0,3)
    console.log(len3+len3+len3)
}
front3('Chocolate')

function backAround(str){
    let end = str.length -1
    console.log(str[end]+str+str[end])
}
backAround('Hello')

function front22(str){
    let start = str.slice(0,2)
    console.log(start+str+start)
}
front22('kitten')

function delDel(str){
    for(let i=0;i<str.length;i++){
        if(str[1] == "d" && str[2] == "e" && str[3] == "l"){
            let first = str[0]
            let second = str.slice(4)
            console.log(first+second)
        }
    }
}
delDel('adelbc')

function startOz(str){
    for(let i=0;i<str.length;i++){
        if(str[0] == "o" && str[1] == "z"){
            console.log(str[0]+str[1])
        }
        else{
            console.log(str[0])
        }
    }
}
startOz('ozymandias')

function intMax(a,b,c){
    let arr = []
    arr.push(a,b,c)
    let res = 1
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>res){
            res = arr[i]
        }   
        else if(arr[i]<res){
            res = arr[i]
        }
    }
    console.log(res)
}
intMax(1,2,3)

function close10(a, b){
    if(a < b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
close10(8, 13)