let number =parseInt(prompt("Nhập một số bất kỳ"));
let sqrt=number*number;
if (number*1==number) {
    alert("Bình phương của số là " +sqrt);
}

function nono() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let Result;

    Result = "Tích số là: " + (a*b);

    document.getElementById("dog").innerText = Result;
}

function ketqua() {
    let a = document.getElementById("canha").value;
    let b = document.getElementById("canhb").value;
    let c = document.getElementById("canhc").value;
    if (a + b > c || b + c > a || a + c > b) {
        if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == a * a + b * b) {
            document.getElementById("ketqua").innerText = "Đây là tam giác vuông";
        } else if (a == b && b == c && a == c) {
            document.getElementById("ketqua").innerText = "Đây là tam giác đều"
        } else if (a == b || b == c || a == c) {
            document.getElementById("ketqua").innerText = "Đây là tam giác cân"
        } else {
            document.getElementById("ketqua").innerText = "Đây là hình tam giác"
        }
    } else {
        document.getElementById("ketqua").innerText = "Đây không phải là hình tam gác"
    }
}
