//Bài 1
function b1_tinhluong() {
  var luong1ngay = 100000;
  var songay = document.getElementById("b1_soNgayLam").value;
  var luong = luong1ngay * songay;
  document.getElementById("b1_ketQua").innerHTML = "Lương của bạn là: " + luong;
}

//Bài 2
function b2_tinhtb() {
  var b2_so1 = document.getElementById("b2_so1").value;
  var b2_so2 = document.getElementById("b2_so2").value;
  var b2_so3 = document.getElementById("b2_so3").value;
  var b2_so4 = document.getElementById("b2_so4").value;
  var b2_so5 = document.getElementById("b2_so5").value;

  var tb =
    (Number(b2_so1) +
      Number(b2_so2) +
      Number(b2_so3) +
      Number(b2_so4) +
      Number(b2_so5)) /
    5;
  document.getElementById("b2_ketQua").innerHTML = "Kết quả là: " + tb;
}

//Bài 3
function b3_quyDoi() {
  var usd = 23500;
  var b3_soTien = document.getElementById("b3_soTien").value;
  var vnd = usd * b3_soTien;
  document.getElementById("b3_ketQua").innerHTML = `Kết quả là: ${vnd} VND`;
}

//Bài 4
function b4_tinh() {
  var b4_chieudai = document.getElementById("b4_chieudai").value;
  var b4_chieurong = document.getElementById("b4_chieurong").value;
  var chuvi = (Number(b4_chieudai) + Number(b4_chieurong)) * 2;
  var dientich = Number(b4_chieudai) * Number(b4_chieurong);
  document.getElementById(
    "b4_ketQua"
  ).innerHTML = `Chu vi là: ${chuvi} <br> Diện tích là: ${dientich}`;
}

//Bài 5
function b5_tinh() {
  var b5_so = document.getElementById("b5_so").value;

  if (b5_so.length != 2) {
    document.getElementById("b5_ketQua").innerHTML = "Số bạn nhập không hợp lệ";
  } else {
    b5_so = Number(b5_so);
    var soHangChuc = Math.floor(b5_so / 10);
    var soHangDonVi = b5_so % 10;
    var tong = soHangChuc + soHangDonVi;
    document.getElementById("b5_ketQua").innerHTML = `Tổng là: ${tong}`;
  }
}