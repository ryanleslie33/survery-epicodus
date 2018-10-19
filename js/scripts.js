$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var userage = parseInt($("#age").val());
    var usergender = $("#gender").val();
    var userskill = parseInt($("#skill").val());

    if ((usergender === 'male') && (userage <= 30) && (userskill <= 2)){
      $("#ruby").show()
    }else if (userskill >= 2){
      $("#c-sharp").show()
    }
    if ((userage >= 40) && (userskill <= 1)){
      $("#html").show()
    }else if ((userage <= 50) && (userskill > 1) && (usergender === 'female')){
      $("#java").show()
      $("#c-sharp").hide()

    }


  });
});
$(document).ready(function(){
  $(".counsler").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userdate = $("#dates").val();


    $("#outputAppointment").show();
    $("#userName").text(userName);
    $("#appointmentDate").text(userdate);

});
});
