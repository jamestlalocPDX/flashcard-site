$(document).ready(function() {
  $(".variables").click(function() {
    $("#variable-showing").toggle();
    $("#variable-hidden").toggle();
  })

  $(".string").click(function() {
    $("#string-showing").toggle();
    $("#string-hidden").toggle();
  })

  $(".boolean").click(function() {
    $("#boolean-showing").toggle();
    $("#boolean-hidden").toggle();
  })

  $(".nan").click(function() {
    $("#nan-showing").toggle();
    $("#nan-hidden").toggle();
  })

  $(".parameter").click(function() {
    $("#parameter-showing").toggle();
    $("#parameter-hidden").toggle();
  })

  $(".jquery").click(function() {
    $("#jquery-showing").toggle();
    $("#jquery-hidden").toggle();
  })



});