function _select(elem) {
    elem.addClass('yh-selected').text(elem.attr('yh-data-title'));
}

function _unselect(elem) {
    elem.removeClass('yh-selected').text("F" + elem.attr('yh-data-index'));
}

var mixin = {
    mounted() {
        var elem = $(this.$el);
        var root = $("<div>", { class: "yh-scroll-nav" }).appendTo(elem);
        var i = 1;
        var anchors = $('.yh-page-anchor', elem);
        var n = anchors.length;
        anchors.each(function (elem) {
            var div = $(this);
            var title = div.attr('yh-data-title');
            if (!title) {
                title = div.text();
            }
            if (title == undefined || title.length == 0) {
                title = "F" + i;
            }
            var a = $("<a>", {
                href: "#" + div.attr('id'),
                'yh-data-index': i,
                'yh-data-title': title
            })
                .text("F" + i)
                .on('click', function () {
                    var elem = $(this);
                    if (!elem.hasClass('yh-selected')) {
                        Waypoint.disableAll()
                        _unselect($('.yh-selected', root));
                        _select(elem, true);
                        setTimeout(function () {
                            Waypoint.enableAll()
                        }, 500);
                    }
                });
            var param = {
                handler: function () {
                    var eid = this.element.id;
                    var selected = $('.yh-selected', root);
                    if (selected.attr('href') != '#' + eid) {
                        _unselect(selected);
                        _select($("a[href='#" + eid + "']", root));
                    }
                }
            };
            if (i == n) {
                param.offset = 'bottom-in-view';
            } else if (i > 1) {
                param.offset = '30%';
            }
            div.waypoint(param);
            root.append(a);
            ++i
        });
    }
}

export default mixin
