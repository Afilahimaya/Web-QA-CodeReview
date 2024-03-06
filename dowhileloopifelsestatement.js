function number(n){
    let i=1;
    do{
        if(i % 2 ==0){
            console.log(i + " is Even");
        }else {
            console.log(i + " is Odd");
        } i++;
    }while(i <= n);
}
number(10);