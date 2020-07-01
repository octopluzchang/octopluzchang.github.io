(function ($) {

    /**
     * @param {Object} options
     * @param {Array}  options.list  存储奖品的的列表，example [{1:{name:'谢谢参与',image:'1.jpg'}}]
     * @param {Object} options.outerCircle {color:'#df1e15'} 外圈颜色，默认红色
     * @param {Object} options.innerCircle {color:'#f4ad26'} 里圈颜色，默认黄色
     * @param {Array}  options.dots ['#fbf0a9', '#fbb936'] 装饰点颜色 ，默认深黄浅黄交替
     * @param {Array}  options.disk ['#ffb933', '#ffe8b5', '#ffb933', '#ffd57c', '#ffb933', '#ffe8b5', '#ffd57c'] 中心奖盘的颜色，默认7彩
     * @param {Object} options.title {color:'#5c1e08',font:'19px Arial'} 奖品标题颜色
     */
    $.fn.WheelSurf = function (options) {

        var _default = {
            outerCircle: {
                color: '#d55c55'
            },
            innerCircle: {
                color: '#f4ad26'
            },
            dots: ['#d3f9ff', '#d3f9ff'],
            disk: ['#fefaeb', '#d55c55'],
            title: {
                color: '#0004c8',
                font: '12px Arial'
            }
        }

        $.extend(_default, options)
        // 画布中心移动到canvas中心
        var _this = this[0],
            width = _this.width,
            height = _this.height,
            ctx = _this.getContext("2d"),
            imgs = [],
            awardTitle = [],
            awardTitleEg = [],
            awardTitleEg2 = [],
            awardPic = [],
            awardIcon = []
        for (var item in _default.list) {
            console.log(_default.list);
            if (_default.list[item].failOpt == 1) {
                imgs.push(''); ///Content/Images/emoji.png
                awardTitle.push('Ｘ');
            } else {
                imgs.push('');
                awardTitle.push(_default.list[item].name);
                awardTitleEg.push(_default.list[item].nameEg);
                awardTitleEg2.push(_default.list[item].nameEg2);
                awardIcon.push(_default.list[item].icon);
            }
        }
        var num = imgs.length
        // 圆心
        var x = width / 2
        var y = height / 2
        ctx.translate(x, y)

        return {
            init: function (angelTo) {
                angelTo = angelTo || 0;
                loadImg();
                ctx.clearRect(-this.width, -this.height, this.width, this.height);

                // 平分角度
                var angel = (2 * Math.PI / 360) * (360 / num);
                var startAngel = 2 * Math.PI / 360 * (-90)
                var endAngel = 2 * Math.PI / 360 * (-90) + angel

                // 旋转画布
                ctx.save()
                ctx.rotate(angelTo * Math.PI / 180);
                // 画外圆
                ctx.beginPath();
                ctx.lineWidth = 50;
                ctx.strokeStyle = _default.outerCircle.color;
                ctx.arc(0, 0, 133, 0, 2 * Math.PI)
                ctx.stroke();
                // 画里圆
                ctx.beginPath();
                ctx.lineWidth = 10;
                ctx.strokeStyle = _default.innerCircle.color;
                ctx.arc(0, 0, 125, 0, 2 * Math.PI)
                ctx.stroke();

                // 装饰点
                var dotColor = _default.dots
                for (var i = 0; i < 20; i++) {
                    // 装饰点 圆心 坐标计算
                    ctx.beginPath();
                    var radius = 145
                    var xr = radius * Math.cos(startAngel)
                    var yr = radius * Math.sin(startAngel)

                    ctx.fillStyle = dotColor[i % dotColor.length]
                    ctx.arc(xr, yr, 5, 0, 2 * Math.PI)
                    ctx.fill()

                    startAngel += (2 * Math.PI / 360) * (360 / 20);

                }
                // 画里转盘                
                var colors = _default.disk
                for (var i = 0; i < num; i++) {
                    ctx.beginPath();
                    ctx.lineWidth = 124;
                    ctx.strokeStyle = colors[i % colors.length]
                    console.log(colors[i % colors.length]);
                    ctx.arc(0, 0, 72, startAngel, endAngel)
                    ctx.stroke();
                    startAngel = endAngel
                    endAngel += angel
                }
                // 添加奖品
                function loadImg() {

                    var dtd = $.Deferred()
                    var countImg = 0
                    if (awardPic.length) {
                        return dtd.resolve(awardPic);
                    }
                    for (var i = 0; i < num; i++) {
                        var img = new Image()

                        awardPic.push(img)

                        img.src = imgs[i]


                    }
                    return dtd.promise()
                }

                $.when(loadImg()).done(function (awardPic) {

                })
                startAngel = angel / 2
                for (var i = 0; i < num; i++) {
                    ctx.save();
                    ctx.rotate(startAngel)
                    if (awardPic[i].src.indexOf('emoji.png') > -1) {
                        ctx.drawImage(awardPic[i], -32, -32 - 100);

                    } else {
                        var icon = document.getElementById(awardIcon[i]);
                        ctx.drawImage(awardPic[i], -16, -85, 40, 40);
                        ctx.drawImage(icon, -16, -85, 40, 40);
                        ctx.font = _default.title.font;
                        ctx.fillStyle = _default.title.color
                        ctx.textAlign = "center";
                        ctx.fillText(awardTitle[i], 0, -115);
                        ctx.fillText(awardTitleEg[i], 0, -100);
                        ctx.fillText(awardTitleEg2[i], 0, -90);
                    }
                    startAngel += angel
                    ctx.restore();
                }
                ctx.restore();
            },
            /**
             * @param angel 旋转角度
             * @param callback 转完后的回调函数
             */
            lottery: function (angel, callback) {
                angel = angel || 0
                angel = 360 - angel
                angel += 360 * 6
                // 基值（减速）
                var baseStep = 120
                // 起始滚动速度
                var baseSpeed = 0.3
                // 步长
                var count = 1;
                var _this = this
                var timer = setInterval(function () {

                    _this.init(count)
                    if (count == angel) {
                        clearInterval(timer)
                        if (typeof callback == "function") {
                            callback()
                        }
                    }
                    count = count + baseStep * (((angel - count) / angel) > baseSpeed ? baseSpeed : ((angel - count) / angel))
                    if (angel - count < 0.5) {
                        count = angel
                    }

                }, 25)
            }
        }

    }
}(jQuery))
