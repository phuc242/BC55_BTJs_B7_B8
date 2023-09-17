var listNumber = [];
function themSo() {
  var txtNumber = document.getElementById("txtNumber").value * 1;

  listNumber.push(txtNumber);

  document.getElementById("idListNumber").innerHTML = listNumber;
}

function demSoDuong() {
  if (listNumber.length === 0) {
    document.getElementById("idDemSoDuong").innerHTML =
      "Vui lòng nhập số vào mảng";

    return;
  }
  var count = 0;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number > 0) {
      count++;
    }
  }
  var result = "Có " + count + " Số dương";
  document.getElementById("idDemSoDuong").innerHTML = result;
}
function soNhoNhat() {
  if (listNumber.length === 0) {
    document.getElementById("idSoNhoNhat").innerHTML =
      "Vui lòng nhập số vào mảng";

    return;
  }
}
function soNhoNhat() {
  if (listNumber.length === 0) {
    document.getElementById("idDemSoDuong").innerHTML =
      "Vui lòng nhập số vào mảng";

    return;
  }
  var viTri = 0;
  var min = listNumber[viTri];
  for (var i = 1; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (min > num) {
      min = num;
      viTri = i;
    }
  }
  var result = "Số nhỏ nhất là " + min;
  document.getElementById("idSoNhoNhat").innerHTML = result;
}
function duongNhoNhat() {
  if (listNumber.length === 0) {
    document.getElementById("idDuongNhoNhat").innerHTML =
      "Vui lòng nhập số vào mảng";

    return;
  }
  var soDuong = [];
  for (var i = 0; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (num > 0) {
      soDuong.push(num);
    }
  }
  var viTri = 0;
  var Duongmin = soDuong[0];
  for (var j = 1; j < soDuong.length; j++) {
    var Duong = soDuong[j];
    if (Duongmin > Duong) {
      Duongmin = Duong;
      viTri = j;
    }
  }
  result = "Số dương nhỏ nhất là  " + Duongmin;
  document.getElementById("idDuongNhoNhat").innerHTML = result;
}
function soChanCuoi() {
  if (listNumber.length === 0) {
    document.getElementById("idSoChanCuoi").innerHTML =
      "Vui lòng nhập số vào mảng";

    return;
  }
  var _SoChan = [];

  for (var i = 0; i < listNumber.length; i++) {
    var num = listNumber[i];
    if (num % 2 == 0) {
      _SoChan.push(num);
    }
  }
  var j = _SoChan.length - 1;
  var soChanCuoi = _SoChan[j];

  result = "Số chẵn cuối cùng là " + soChanCuoi;
  document.getElementById("idSoChanCuoi").innerHTML = result;
}
function doiCho() {
  var viTri1 = document.getElementById("viTri1").value * 1;
  var viTri2 = document.getElementById("viTri2").value * 1;
  var temp = listNumber[viTri1];
  listNumber[viTri1] = listNumber[viTri2];
  listNumber[viTri2] = temp;
  console.log(listNumber);
  document.getElementById("idDoiCho").innerHTML = listNumber;
}
function tangDan() {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  document.getElementById("idTangDan").innerHTML = listNumber;
}
function soNguyenToDauTien() {
  for (var i = 0; i < listNumber.length; i++) {
    var soTuNhien = listNumber[i];
    if (soTuNhien % 1 == 0 && soTuNhien % soTuNhien == 0 && soTuNhien != 1) {
      var soNguyenTo = soTuNhien;
      break;
    }
  }
  result = "số nguyên tố đầu tiên là " + soNguyenTo;
  document.getElementById("idSoNguyenTo").innerHTML = result;
}
function soSanh() {
  var dem1 = 0;
  var dem2 = 0;
  var result = "";
  for (var i = 0; i < listNumber.length; i++) {
    var so = listNumber[i];
    if (so > 0) {
      dem1++;
    } else if (so < 0) {
      dem2++;
    }
  }
  if (dem1 > dem2) {
    result = "Số dương nhiều hơn số âm";
  } else if ((dem1 = dem2)) {
    result = "Số dương bằng số âm";
  } else {
    result = "Số dương ít hơn số âm";
  }
  document.getElementById("idSoSanh").innerHTML = result;
}
