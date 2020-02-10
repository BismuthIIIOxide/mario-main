$('.mario').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.mario').addClass("checked");
  localStorage.setItem("char", "mario");
});
$('.luigi').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.luigi').addClass("checked");
  localStorage.setItem("char", "luigi");
});
$('.obama').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.obama').addClass("checked");
  localStorage.setItem("char", "obama");
});
$('.yoda').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.yoda').addClass("checked");
  localStorage.setItem("char", "yoda");
});
$('.engi').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.engi').addClass("checked");
  localStorage.setItem("char", "engi");
});
$('.cube').click(function(){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.cube').addClass("checked");
  localStorage.setItem("char", "cube");
});
if(localStorage.getItem("char")){
  $('.luigi,.mario,.obama,.yoda,.engi,.cube').removeClass("checked");
  $('.'+localStorage.getItem("char")).addClass("checked");
}
if(localStorage.getItem("level") && localStorage.getItem("score")){
  $('.d1').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("score",0)
      localStorage.setItem("deaths", 0)
      alert("Carefully reset score.");
    }
  });
  $('.d2').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("level",0)
      alert("Carefully reset level.");
    }
  });
  $('.d3').click(function(){
    if(confirm("Are you sure?")){
      localStorage.setItem("level",0)
      localStorage.setItem("score",0)
      localStorage.setItem("deaths", 0)
      alert("Carefully reset all.");
    }
  });
}else{
  $('.d1,.d2,.d3').click(function(){
    window.location = "game.html";
  });
}