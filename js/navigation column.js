$(function() {
    var fixedHeight = 606; // 强制移动高度为 600

    // 动态绑定点击事件
    $('.data-nav').each(function(index) {
        $(this).click(function() {
            $('.data-navs').css('top', -fixedHeight * (index +1));
        });
    });

    $('.navigator-data li').click(function() {
        if ($(this).hasClass('btnNow2')) {
            // 如果有，则移除该class
            $(this).removeClass('btnNow2');
        } else {
            // 如果没有，则先移除所有li元素的btnNow class
            $('.navigator-data li').removeClass('btnNow2');
            // 然后为当前点击的元素添加btnNow class
            $(this).addClass('btnNow2');
        }
        updatePosition(); // 更新位置
    });

    function updatePosition() {
        if ($('.navigator-data li.btnNow2').length === 0) {
            $('.data-navs').css('top', 0); // 没有按钮被选择时，重置为初始位置
        }
    }
});




