 $('.icon img').each(function(){
$(this).mouseover(function(){

if($(this).attr('src').includes('dark.png')){
var normalIcon  = $(this).attr('src').replace('-dark.png','.png');
$(this).attr('src',normalIcon);
} else{
var darkIcon  = $(this).attr('src').replace('.png','-dark.png');
$(this).attr('src',darkIcon);
}
});
    $(this).mouseleave(function(){

if($(this).attr('src').includes('dark.png')){
var normalIcon  = $(this).attr('src').replace('-dark.png','.png');
$(this).attr('src',normalIcon);
} else{
var darkIcon  = $(this).attr('src').replace('.png','-dark.png');
$(this).attr('src',darkIcon);
}
});

  
  });
