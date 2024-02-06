//1ci sual
// var result
// function Topla(num1, num2, callback) {
//     result = num1 + num2
//     return callback(result)
// }
// function Cixma(num1, num2, callback) {
//     result = num2 - num1
//     return callback(result)
// }
// function Vurma(num1, num2, callback) {
//     result = num1 * num2
//     return callback(result)
// }
// function Bolme(num1, num2, callback) {
//     result = num2 / num1
//     return callback(result)
// }
// function Output(result) {
//     console.log(result);
// }
// number1 = 3
// number2 = 6
// operator = "+"
// switch (operator) {
//     case "+": 
//         Topla(number1, number2, Output)
//         break;
//     case "-": 
//         Cixma(number1, number2, Output)
//         break;
//     case "*": 
//         Vurma(number1, number2, Output)
//         break;
//     case "/": 
//         Bolme(number1, number2, Output)
//         break;
//     default:
//         console.log("Duzgun operator daxil edin!");
//         break;
// }



//2ci sual
// var newArr=[]
// function tekededler(arr,callback) {
//     newArr=arr.filter(number=>number%2==1)
//     return callback(newArr,Output) 
// }
// var bolunenArr=[]
// function bolunen(array,callback) {
//     bolunenArr=array.filter(number=>number%15==0)
//     return callback(bolunenArr)
// }
// function Output(arr) {
//     console.log(arr);
// }
// var array=[1,3,65,54,15,43,45,76]
// tekededler(array,bolunen)