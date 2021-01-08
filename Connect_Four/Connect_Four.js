var player1=prompt("player 1 enter your name, you will be red");
var player2=prompt("player 2 enter your name, you will be blue");
var gameNotOver=true,chancep1=true;
var allCircles=document.querySelectorAll('.circle');
allCircles.forEach(change);
function change(item) {
  item.style.background='gray';
}
$('h2').text( player1+ " Please Drop the chip");
$('.circle').on('click',function() {
  var col= $(this).index();
  col-=1;
  col=col%11;
  console.log(col);
  if(chancep1)
  {
    var j=col,flag=0;
        for(j=col;j<allCircles.length;j+=11)
        {
          if(allCircles[j].style.background==='blue' || allCircles[j].style.background==='red')
          {
            j-=11;
            allCircles[j].style.background='red';
            flag=1;
            break;
          }
       }
       //console.log(j);
       if(flag===0)
       allCircles[j-11].style.background='red';
       chancep1=false;
    }
    else
    {
      var j=col,flag=0;
          for(var j=col;j<allCircles.length;j+=11)
          {
            if(allCircles[j].style.background==='blue' || allCircles[j].style.background==='red')
            {
              j-=11;
              allCircles[j].style.background='blue';
              flag=1;
              break;
            }
          }
          if(flag===0)
          allCircles[j-11].style.background='blue';
          chancep1=true;
    }
  for(var i=0;i<allCircles.length;i++)
  {
    if(i%11<=7)
    {
      if(allCircles[i].style.background==='red' || allCircles[i].style.background==='blue')
      {
        if(allCircles[i].style.background===allCircles[i+1].style.background &&
          allCircles[i+1].style.background===allCircles[i+2].style.background &&
          allCircles[i+2].style.background===allCircles[i+3].style.background)
          {
            gameNotOver=false;
            break;
          }
      }
    }
  }
  for(var i=0;i<21;i++)
  {
      if(allCircles[i].style.background==='red' || allCircles[i].style.background==='blue')
      {
        if(allCircles[i].style.background===allCircles[i+11].style.background &&
          allCircles[i+11].style.background===allCircles[i+22].style.background &&
          allCircles[i+22].style.background===allCircles[i+33].style.background)
          {
            gameNotOver=false;
            break;
          }
      }
  }
if(chancep1 && !gameNotOver)
{
  $('h1').text( player2 + " has won the game");
  $('h2').text( "Refresh the page to play again ");
  $('h1').css('color','red');
  $('h2').css('color','red');
  $('.circle').fadeOut('fast');
}
else if(!chancep1 && !gameNotOver) {
  $('h1').text( player1 + " has won the game");
  $('h2').text( "Refresh the page to play again ");
  $('h1').css('color','red');
  $('h2').css('color','red');
  $('.circle').fadeOut('fast');
}
else{
var total=0;
for(var i=0;i<allCircles.length;i++)
if(allCircles[i].style.background==='red' || allCircles[i].style.background==='blue') total++;
if(total===allCircles.length)
{
  $('h1').text( "Game Draw");
  $('h2').text( "Refresh the page to play again ");
  $('h1').css('color','red');
  $('h2').css('color','red');
  $('.circle').fadeout(100);
}
else {
  if(chancep1)
  $('h2').text( player1+ " Please Drop the chip");
else
  $('h2').text( player2+ " Please Drop the chip");
}
}
})
