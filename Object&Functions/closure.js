function demoClosure(input, output) {
    let numone = 100

    return (element) => {
            console.log(input + output + numone + element) ;
            console.log(this);
        }
}
demoClosure(100, 100)(100);