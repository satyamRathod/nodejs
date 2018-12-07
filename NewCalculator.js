const rotate = (k) => {
    let a = [1, 2, 3, 4, 5, 6];
    if (k != undefined) {
        if (a.length <= k) { k = k % a.length; }
        while (k > 0) {
            a.push(a.shift());
            k--;
        }
    }
    return a;
}

const noParser = (k) => {
    let a = [];
    if (!k && k != 0) { return undefined; }
    else {
        while (k > 9) {
            a.splice(0, 0, k % 10);
            k = parseInt(k / 10);
        }
        a.splice(0, 0, k);
        return a;
    }
}

const matrixadd = (a, b) => {
    let c = [];
    if (!a && !b) { return c; }
    else {
        if (!b) { return a; }
        else if (!a) { return b; }
    }
    let x = a.length;
    //if(a[0].length>b[0].length)
    for (i = 0; i < x; i++) {
        c[i] = [];
        for (j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    return c;
}

const matrixSub = (a, b) => {
    let c = [];
    if (!a && !b) { return c; }
    else {
        if (!b) { return a; }
        else if (!a) { return b; }
    }
    let x = a.length;
    //if(a[0].length>b[0].length)
    for (i = 0; i < x; i++) {
        c[i] = [];
        for (j = 0; j < a[i].length; j++) {
            c[i][j] = a[i][j] - b[i][j];
        }
    }
    return c;
}

const matrixMul = (a, b) => {
    let c = [];
    if (!a || !b) { return undefined; }
    let x = a.length;
    let y = a[0].length;
    if (y != b.length) {
        return undefined;
    } else {
        for (i = 0; i < x; i++) {
            c[i] = [];
            for (j = 0; j < y; j++) {
                let m = 0;
                for (k = 0; k < y; k++) {
                    m += a[i][k] * b[k][j];
                }
                c[i][j] = m;
            }

        }
    }
    return c;
}

const matrixTrans = (a) => {
    if (a == undefined) { return null; }
    else {
        let b = [];
        for (i = 0; i < a.length; i++) {
            b[i] = [];
            for (j = 0; j < a[0].length; j++) {
                b[i][j] = a[j][i];
            }
        }
        return b;
    }


}

module.exports = { rotate, noParser, matrixadd, matrixSub, matrixMul, matrixTrans };