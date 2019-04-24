//Allows the cycle2 plugin to pause when clicked or mouseover
var $slideshow = $(".cycle-slideshow");
$slideshow.click(function() {
  if ($slideshow.is(".cycle-paused"))
    $slideshow.cycle("resume");
  else
    $slideshow.cycle("pause");
});
