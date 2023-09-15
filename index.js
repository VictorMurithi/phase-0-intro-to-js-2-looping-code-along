function writeCards(names, event){
const thankYou =[];

    for(let n= 0;n < names.length;n++){
        const note = [`Thank you, ${names[n]}, for the wonderful ${event} gift!`];
        thankYou.push(...note);
        console.log(thankYou);
    }
    return thankYou;
}
function countDown(firstNumber){
    for(let p = firstNumber;p>=0;p--)
    console.log(p);
}