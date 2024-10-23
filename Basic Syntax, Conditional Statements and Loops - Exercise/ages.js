function ages(years) {
    let age = 0
    if (years >= 0 && years <= 2) {
        age = "baby";
    } else if (years > 2 && years <= 13) {
        age = "child";
    } else if (years > 13 && years <= 19) {
        age = "teenager"
    } else if (years > 19 && years <= 65) {
        age = "adult"
    } else if (years >= 66) {
        age = "elder"
    } else {
        age = "out of bounds"
    }
    console.log(age);
}
ages([20]);
ages([1]);
ages([100]);
ages([-1]);