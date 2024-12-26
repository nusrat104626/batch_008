//for,while,do-while
function loopTest(){
const testData=[1,"hello",77,98,"Ostad","Test Loop"];
//initialization,condition,increment/decrement
for(let i=0;i<=testData.length-1;i++)
{
    let data =testData[i];
    //console.log(data);
    
}
}
loopTest();

function whileLoopTest(){
    const testData=[1,"hello",77,98,"Ostad","Test Loop"];
    let i=0;
    while(i<=testData.length-1){
        let data=testData[i];
        console.log(data);
        i++;
    }

}
whileLoopTest();