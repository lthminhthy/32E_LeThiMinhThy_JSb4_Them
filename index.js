// Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).

document.getElementById('btnNgayHomQua').onclick = function () {
    var date = document.getElementById('date_b5').value;
    // console.log(date);
    var result = new Date(date);
    // console.log(result);

    result.setDate(result.getDate() - 1);
    console.log(result);

    document.getElementById('ketQua_b5').innerHTML = result.toLocaleDateString('en-US');
}
document.getElementById('btnNgayMai').onclick = function () {
    var date = document.getElementById('date_b5').value;
    // console.log(date);
    var result = new Date(date);
    // console.log(result);

    result.setDate(result.getDate() + 1);
    console.log(result);

    document.getElementById('ketQua_b5').innerHTML = result.toLocaleDateString('en-US');
}



// B6
document.getElementById('btnTinhNgay').onclick = function () {
    var month = Number(document.getElementById('month_b6').value);
    var year = Number(document.getElementById('year_b6').value);
    var ketQua_b6 = 0;
    if (month % 2 != 0) {
        if (month <= 7) {
            ketQua_b6 = 31
        } else if (month > 7) {
            ketQua_b6 = 30
        }
    } else if (month % 2 == 0) {
        if (month == 2) {
            if (year % 400 == 0) {
                ketQua_b6 = 29
                document.getElementById('ketQua_b6').innerHTML = "Số ngày của tháng " + month + " là " + ketQua_b6 + " ngày"
                return;
            }
            ketQua_b6 = 28
            document.getElementById('ketQua_b6').innerHTML = "Số ngày của tháng " + month + " là " + ketQua_b6 + " ngày"
            return;
        }
        if (month <= 7) {
            ketQua_b6 = 30
        } else if (month > 7) {
            ketQua_b6 = 31
        }
    }
    document.getElementById('ketQua_b6').innerHTML = "Số ngày của tháng " + month + " là " + ketQua_b6 + " ngày";

}







//b7


document.getElementById('btnDoc').onclick = function () {
    var ChuSo = new Array(" không ", " một ", " hai ", " ba ", " bốn ", " năm ", " sáu ", " bảy ", " tám ", " chín ");
    var number = document.getElementById('number_b7').value;
    var tram;
    var chuc;
    var donvi;
    var KetQua = "";
    tram = parseInt(number / 100);
    chuc = parseInt((number % 100) / 10);
    donvi = number % 10;
    if (tram == 0 && chuc == 0 && donvi == 0) return "";
    if (tram != 0) {
        KetQua += ChuSo[tram] + " trăm ";
        if ((chuc == 0) && (donvi != 0)) KetQua += " linh ";
    }
    if ((chuc != 0) && (chuc != 1)) {
        KetQua += ChuSo[chuc] + " mươi";
        if ((chuc == 0) && (donvi != 0)) KetQua = KetQua + " linh ";
    }
    if (chuc == 1) KetQua += " mười ";
    switch (donvi) {
        case 1:
            if ((chuc != 0) && (chuc != 1)) {
                KetQua += " mốt ";
            }
            else {
                KetQua += ChuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0) {
                KetQua += ChuSo[donvi];
            }
            else {
                KetQua += " lăm ";
            }
            break;
        default:
            if (donvi != 0) {
                KetQua += ChuSo[donvi];
            }
            break;
    }

    document.getElementById('ketQua_7').innerHTML = KetQua
}


document.getElementById("btnTim").onclick = function () {
    var nameSV1 = document.getElementById("Name1").value
    var xSV1 = document.getElementById("X1").value
    var ySV1 = document.getElementById("Y1").value
    var nameSV2 = document.getElementById("Name2").value
    var xSV2 = document.getElementById("X2").value
    var ySV1 = document.getElementById("Y2").value
    var nameSV3 = document.getElementById("Name3").value
    var xSV3 = document.getElementById("X3").value
    var ySV3 = document.getElementById("Y3").value
    var xTruong = document.getElementById("X4").value
    var yTruong = document.getElementById("Y4").value
    // khoảng cách từ trường đến sinh viên 1
    var ketQuaSV1 = Math.pow(xTruong - xSV1, 2) + Math.pow(yTruong - ySV1, 2),
        qdSV1 = Math.sqrt(ketQuaSV1);
    // khoảng cách từ trường đến sinh viên 2
    var ketQuaSV2 = Math.pow(xTruong - xSV2, 2) + Math.pow(yTruong - ySV1, 2),
        qdSV2 = Math.sqrt(ketQuaSV2);
    // khoảng cách từ trường đến sinh viên 3
    var ketQuaSV3 = Math.pow(xTruong - xSV3, 2) + Math.pow(yTruong - ySV3, 2),
        qdSV3 = Math.sqrt(ketQuaSV3);
    var ketQuaB8 = "";
    if (qdSV1 > qdSV2 && qdSV1 > qdSV3) {
        ketQuaB8 = nameSV1
    } else if (qdSV2 > qdSV1 && qdSV2 > qdSV3) {
        ketQuaB8 = nameSV2
    } else {
        ketQuaB8 = nameSV3
    }
    document.getElementById("ketQua_b8").innerHTML = "Sinh viên xa trường nhất là  " + ketQuaB8
}


