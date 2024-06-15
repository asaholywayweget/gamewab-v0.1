

$(function(){

    var po0 = $('.block0').position().left;
    var po1 = $('.block1').position().left;
    var po2 = $('.block2').position().left;
    var po3 = $('.block3').position().left;
    var po4 = $('.block4').position().left;
    var po5 = $('.block5').position().left;

    console.log(po0,po1, po2, po3, po4, po5)
  
    

    function updatePosition() {
        if ($('.sel li.btnNow').length === 0) {
            $('.blocks').css('left', -po0); // 没有按钮被选择时，重置为初始位置
        }
    }
    
    $('.btn0').click(function(){
        $('.blocks').css('left',-po0);
    })


    $('.btn1').click(function(){
        $('.blocks').css('left',-po1);
    })

    $('.btn2').click(function(){
        $('.blocks').css('left',-po2);
    })

    $('.btn3').click(function(){
        $('.blocks').css('left',-po3);
    })

    $('.btn4').click(function(){
        $('.blocks').css('left',-po4);
    })

    $('.btn5').click(function(){
        $('.blocks').css('left',-po5);
    })

    $('.sel li').click(function(){
        if($(this).hasClass('btnNow')) {
            // 如果有，则移除该class
            $(this).removeClass('btnNow');
        } else {
            // 如果没有，则先移除所有li元素的btnNow class
            $('.sel li').removeClass('btnNow');
            // 然后为当前点击的元素添加btnNow class
            $(this).addClass('btnNow');
        }
        updatePosition(); // 更新位置
    })

  
})




