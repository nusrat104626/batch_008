function sumNumber(numbers,target){
    for(let i=0;i<numbers.length-1;i++)
    {
        for(let j=i+1;j<numbers.length;j++){
            if(numbers[i]+numbers[j]==target){
                console.log("The expected numbers are"+ numbers[i]+" "+numbers[j]);
            }
            else{
                console.log("not found any combination")
            }
        }
    }

}
sumNumber([2,4,8,20,5],12);