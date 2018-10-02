$(document).ready(function () {
 $("a").on("click", function () {
  var d = null;
  try {
   d = $(this).attr("data-div");
  } catch (ex) {
   console.log(ex);
  }
  if (d) {
   //efetua load no div
   mostraSplash();
   $("#" + d).load($(this).attr("href"), function () {
    alert('Página carregada');
    escondeSplash();
   });
   return false;
  }
 });
});

