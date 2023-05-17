function buy1() {
    var txt1;
    txt1=""
    document.getElementById("buy1").innerHTML = txt1;
    if (confirm("Would you like to purchase a Ford Model T?")) {
        txt1 = "Purchase Confirmed";}
        else {
            txt1 = "Purchase Canceled";
        }
        document.getElementById("buy1").innerHTML = txt1;
};
function buy2() {
  var txt2;
  txt2=""
  document.getElementById("buy1").innerHTML = txt2;
  if (confirm("Would you like to purchase an Oscar Mayer Wienermobile")) {
      txt2 = "Purchase Confirmed";}
      else {
          txt2 = "Purchase Canceled";
      }
      document.getElementById("buy2").innerHTML = txt2;
};

function buy3() {
    var txt3;
    txt3=""
    document.getElementById("buy1").innerHTML = txt3;
    if (confirm("Would you like to purchase a M939 5-Ton Cargo Truck?")) {
        txt3 = "Purchase Confirmed";}
        else {
            txt3 = "Purchase Canceled";
        }
        document.getElementById("buy3").innerHTML = txt3;
};
