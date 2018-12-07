exports.getPrimeFactors = (num) => {
    let a = [];
    if (num == 1) { return null; }
    else {
        let fact = 2;
        while (num >= fact) {
            if (num % fact == 0) {
                a.push(fact);
                num /= fact;
            } else { fact++; }
        }
    }
    return a;
}