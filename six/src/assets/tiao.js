(function () {
    var ul1 = window.document.getElementById('ul1');
    var slide = window.document.getElementById('slide');
    var list = window.document.getElementsByTagName('li');
    var spanList = window.document.getElementsByTagName('span');

    var h = window.innerHeight; //获取当前窗口高度

    // 1 .让楼层的高度和可视区的高度保持一致
    for (var i = 0; i < list.length; i++) {
        spanList[i].index = i;
        list[i].style.height = h + 'px';  //height = 可视化窗口
        list[i].style.lineHeight = h + 'px';   //居中
    }
    //2.点击按钮可以跳转到对应的楼层
    for (var i = 0; i < spanList.length; i++) {
        spanList[i].index = i;

        spanList[i].onclick = function () {
            // 排他
            for (var j = 0; j < spanList.length; j++) {
                spanList[j].className = '';
            }
            this.className += 'choosed'; //点击选定
            var y = this.index;
            window.scrollTo(0, y * window.innerHeight)

        }
        //鼠标移进
        var floor = ['手机', '电脑', '手表', '相机', '电视']
        spanList[i].onmouseover = function () {
            var n = this.index
            this.innerHTML = floor[n];
        }
        //鼠标离开，恢复原样
        spanList[i].onmouseleave = function () {
            var old = ['01F', '02F', '03F', '04F', '05F']
            for (var i = 0; i < spanList.length; i++) {
                spanList[i].innerHTML = old[i];
            }
        }
        //滚动楼层数跟着变
    }

    //页面滚动，楼层跟着高亮，回顶部事件
    window.onscroll = function () {
        var scrollTop = window.scrollY;//动态获取到滚动距离
        var x = parseInt(scrollTop / h);
        // 排他
        for (var j = 0; j < spanList.length; j++) {
            spanList[j].className = '';
        }
        spanList[x].className = 'choosed';
        console.log(scrollTop);
        //回顶部火箭图
        if (scrollTop >= 300) {
            totop.style.display = 'block'
        } else {
            //top_img.src = '../images/rocket.jpg';  //点击回顶部的图片
            totop.style.display = 'none'
        }
    }

    //回顶部
    var totop = document.getElementById('totop');
    var top_img = totop.getElementsByTagName('img')[0];
    // console.log( top_img.title)

    var num = 180;
    var fuck = setInterval(function () {
        num -= 5;
    }, 1000);

    totop.onclick = function () {
        top_img.src = '../images/rocket.gif';
        var scrollTop = window.scrollY;  //获取当前滚动距离

        var timer = setInterval(function () {
            scrollTop -= num;
            if (scrollTop <= 0) {
                clearInterval(timer);
            }
            window.scrollTo(0, scrollTop);   //回顶部
        }, 30);
    }
})();