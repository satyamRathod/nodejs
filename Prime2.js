exports.primeFactors = (a) => {
    let b = [];
    if (a == 1) {
        return null;
    } else {
        let fact = 2;
        while (a >= fact) {
            if (a % fact == 0) {
                b.push(fact);
                a /= fact;
            } else { fact++; }
        }
    }
    return b;

};