var warning=document.getElementById("warning");

keyframe=[
    {transform:"translate(0,0)",background:"red"},
    {transform:"translate(500px,0)",background:"yellow"},
    //{transform:"rotate(350deg)"},
     {transform:"translate(500px,200px)",background:"blue"},
     {transform:"translate(0,200px)",background:"green"},
     {transform:"translate(0,0)",background:"red"},
];

time={
    duration:4000,
    iterations:Infinity,
    //fill: 'forwards',
    easing: 'steps(9,end)',
    direction:'alternate',
}

var warningAnimate=warning.animate(keyframe,time);

document.querySelector(".play").addEventListener("click",()=>{
    warningAnimate.play();
});
document.querySelector(".pause").addEventListener("click",()=>{
    warningAnimate.pause();
});
document.querySelector(".reverse").addEventListener("click",()=>{
    warningAnimate.reverse();
});
document.querySelector(".updatePlaybackRate").addEventListener("click",()=>{
    warningAnimate.updatePlaybackRate(warningAnimate.playbackRate*1.2);
});
setInterval( function() {

    // Make sure the playback rate never falls below .4
    if (warningAnimate.playbackRate > .9) {
        warningAnimate.updatePlaybackRate(warningAnimate.playbackRate * .9);
    }
  
  }, 1000);