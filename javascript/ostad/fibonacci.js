//0,1,1,2,3,5,8,13,21
function fibonacci(n){
    var initialSeries=[0];
    if(n==1){
        initialSeries=initialSeries;
    }
    else{
         initialSeries=[0,1];
    }

//initialSeries.push(n);
//console.log(initialSeries);
for(let i=2;i<n;i++)
{
    var result = initialSeries[i-1]+initialSeries[i-2];
    initialSeries.push(result);
}
console.log(initialSeries);
//initialseries.pop();
}
fibonacci(10);