/* 
* @Author: Marte
* @Date:   2017-05-26 11:03:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-31 13:40:49
*/

$(document).ready(function(){
    // 滚动条
    $('body').swipeUp(function () {
        $('.tip-top').css({
            top: '0'
        });
    });
    $('body').swipeDown(function () {
        $('.tip-top').css({
            top: '0.1rem'
        });
    });

    // 注意
    // 后台返回数据时插入DOM调用此方法可实现滚动
    // 单个元素分别调用
    function scrollBar(eleMsg) {
        function initBarMsg($ele) {
            $ele.css({
                right: -$ele.width() + 'px'
            });
        }

        function scrollBarMsg($ele) {
            var px = -$('.tip-top').width()-$ele.width();
            $ele.animate({
                'transform': 'translateX(' + px + 'px)',
                '-webkit-transform': 'translateX(' + px + 'px)',
            }, 10000, function () {
                $ele.remove();
            })
        }
        initBarMsg(eleMsg);
        scrollBarMsg(eleMsg);
    }
    scrollBar($('.tip-top p'))




    // 关闭弹窗
    $('.pop .btn').on('tap', function(event) {
        event.preventDefault();
        /* Act on the event */
        var $pop = $(this).parents('.pop');
        $('.pop').removeClass('bounceInDown');
        $('.pop').addClass('bounceOutUp');
        $('.mask').hide();
    });

    // 卡片翻转计数
    var rotateConut = 0;
    // 卡片翻转
    $('.cards-btn').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        
        if (rotateConut == 0) {
            rotateConut++;
            var $cards = $(this).parents('.cards-item').find('.cards');
            $cards.animate({
                'transform': 'rotateY(360deg)',
                '-webkit-transform': 'rotateY(360deg)'
            }, 1000, function () {
                $cards.css({
                    'transform': 'rotateY(0deg)',
                    '-webkit-transform': 'rotateY(0deg)'
                });
                $('.mask').show();
                $('.pop-hi').show();
                $('.pop-hi').removeClass('bounceOutUp');
                $('.pop-hi').addClass('bounceInDown');
                

            });
        } else {
            $('.mask').show();
            $('.pop-over').show();
            $('.pop-over').removeClass('bounceOutUp');
            $('.pop-over').addClass('bounceInDown');
        }
        
    });

});