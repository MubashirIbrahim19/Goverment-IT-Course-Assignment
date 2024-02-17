var make_shirt = function (largeMed, message) {
    if (largeMed === void 0) { largeMed = 'large'; }
    if (message === void 0) { message = 'I love typecript'; }
    if (largeMed === 'large') {
        console.log("T-shirt size is to ".concat(largeMed, ",").concat(message));
    }
    else if (largeMed === 'medium') {
        console.log("T-shirt size is to ".concat(largeMed, ",").concat(message));
    }
    if (largeMed === 'small') {
        console.log("T-shirt size is to ".concat(largeMed));
    }
    else if (largeMed === 'normal') {
        console.log("T-shirt size is a ".concat(largeMed));
    }
};
make_shirt();
make_shirt('medium');
make_shirt('small', 'Hello, world');
make_shirt('normal', 'javascript is too easy');
