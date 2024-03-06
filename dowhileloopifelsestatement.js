function findOddEven(n){
    let i=0;
    do{
        if(i % 2 ==0){
            console.log(i + " is Even");
        }else {
            console.log(i + " is Odd");
        } i++;
    }while(i <= n);
}
findOddEven(10); 