var lion=document.querySelector(".lion");
var lion1=document.querySelector(".lion1");
var lion2=document.querySelector(".lion2");
var cheetah=document.querySelector(".cheetah");
var eagle=document.querySelector(".eagle");
var eagle1=document.querySelector(".eagle1");
var eagle2=document.querySelector(".eagle2");

keyframe=[
    {transform:"translate(0,0)"},
    {transform:"translate(1530px,0)"},
    //{transform:"rotate(350deg)"},
    //  {transform:"translate(500px,200px)",background:"blue"},
    //  {transform:"translate(0,200px)",background:"green"},
    //  {transform:"translate(0,0)",background:"red"},
];

time={
    duration:20000,
    iterations:Infinity,
    //fill: 'forwards',
    easing: 'ease-in-out',
    //direction:'alternate',
}


lion.animate(keyframe,time);
lion2.animate([
    {transform:"translate(0,0)"},
    {transform:"translate(-1530px,0)"},
    //{transform:"rotate(350deg)"},
    //  {transform:"translate(500px,200px)",background:"blue"},
    //  {transform:"translate(0,200px)",background:"green"},
    //  {transform:"translate(0,0)",background:"red"},
],{duration:50000,iterations:Infinity,easing:'ease-in-out',}
);

lion1.animate([
    {transform:"translate(0,0)"},
    {transform:"translate(1400px,0)"},
    
    //{transform:"translate(-300px,0)"},

],{duration:7000,iterations:Infinity,easing:'ease-in-out',})
cheetah.animate([
    {transform:"translate(0,0)"},
    {transform:"translate(1500px,0)"},
    //{transform:"translate(-300px,0)"},

],{duration:7000,iterations:Infinity,});

eagle.animate([
    {transform:"translate(0,0)"},

    {transform:"translate(1550px,0)"},
],{
    duration:5000,iterations:Infinity,easing:"ease-in-out",
});
eagle1.animate([
    {transform:"translate(0,0)"},

    {transform:"translate(1550px,0)"},
],{
    duration:5000,iterations:Infinity,easing:"ease-in-out",
});
eagle2.animate([
    {transform:"translate(0,0)"},

    {transform:"translate(1550px,0)"},
],{
    duration:5000,iterations:Infinity,easing:"ease-in-out",
});