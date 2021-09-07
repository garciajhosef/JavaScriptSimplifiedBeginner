function print(variable1) {
    let c = 3;
    return function fun(variable2) {
        console.log(variable1);
        console.log(variable2);
        console.log(c);
    };
}

let a = print(1);
a(2);
