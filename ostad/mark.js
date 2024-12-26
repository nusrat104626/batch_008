function test(mark){
const mark_f="Your grade id F";
const mark_d="Your grade id D"
const mark_c="Your grade id C"
const mark_b="Your grade id B"
const mark_a="Your grade id A"
if (mark >=0 && mark<=59){
    return mark_f;
}
else if (mark >59 && mark<=69){
    console.log("Your grade is: D")
}
else if (mark >69 && mark<=79){
   
    console.log("Your grade is: C")
}
else if (mark >79 && mark<=89){
    console.log("Your grade is: B")
}
else if (mark >89 && mark<=100){
    console.log("Your grade is: A")
}
else{
    return invalid;
}






}
console.log(test(60));