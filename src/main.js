// products are displayed on page load
$(document).ready(function () {
  $.ajax({
    url: "./action/productAction.php",
    type: "POST",
  }).done(function (result) {
    $("#products").html(result);
  });
});
// function to add a product to cart
function addToCart(id) {
  $.ajax({
    url: "./action/cartAction.php",
    type: "POST",
    data: { id: id, action: "addToCart" },
    datatype: JSON,
  }).done(function (result) {
    $("#tbodyCart").html(result);
  });
}
// function to remove product from cart
function removeProduct(id) {
  $.ajax({
    url: "./action/cartAction.php",
    type: "POST",
    data: { id: id, action: "removeProduct" },
    datatype: JSON,
  }).done(function (result) {
    $("#tbodyCart").html(result);
  });
}
// function to decrement the quantity by one
function decByOne(id) {
  $.ajax({
    url: "./action/cartAction.php",
    type: "POST",
    data: { id: id, action: "decByOne" },
    datatype: JSON,
  }).done(function (result) {
    $("#tbodyCart").html(result);
  });
}
// function to empty cart
function emptyCart() {
  $.ajax({
    url: "./action/cartAction.php",
    type: "POST",
    data: "action=" + "emptyCart",
  }).done(function (result) {
    $("#tbodyCart").html(result);
  });
}
