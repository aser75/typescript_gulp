(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Class slide Js]
 */
var HeightHeader = /** @class */ (function () {
    function HeightHeader() {
        this.header = $("#header-js");
    }
    /**
     * [sizeHeader]
     * @return [description]
     */
    HeightHeader.prototype.sizeHeader = function () {
        this.heightHeader();
        window.onresize = this.heightHeader;
    };
    /**
     * [heightHeader add size header]
     * @return [number en px]
     */
    HeightHeader.prototype.heightHeader = function () {
        var height = $(window).height();
        $("#header-js").css("height", height);
    };
    return HeightHeader;
}());
exports.default = HeightHeader;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Class slide Js]
 */
var MainSlider = /** @class */ (function () {
    /**
     * [constructor]
     * @param slideShow  [le nombre de slide visible à la fois]
     * @param scrollShow [le nombre de bloc scroller par action ]
     * @param dots       [afficher/cacher points]
     * @param arrows     [afficher/cacher fleche]
     */
    function MainSlider(slideShow, scrollShow, dots, arrows) {
        this.slideShow = slideShow;
        this.scrollShow = scrollShow;
        this.dots = dots;
        this.arrows = arrows;
        this.validation = false;
        this.slideNav = $("#slideNav-js");
        this.content = $("#mainSlider-js");
    }
    /**
     * [slide_simple slider basique]
     * @return void
     */
    MainSlider.prototype.slide_simple = function () {
        var slideFor = this.content.children("#slideFor-js");
        if (this.has_nav()) {
            slideFor.slick({
                slidesToShow: this.slideShow,
                slidesToScroll: this.scrollShow,
                arrows: this.arrows,
                dots: this.dots,
                fade: true,
                asNavFor: '#slideNav-js'
            });
            this.slide_nav();
        }
        else {
            slideFor.slick({
                slidesToShow: this.slideShow,
                slidesToScroll: this.scrollShow,
                arrows: this.arrows,
                dots: this.dots,
                fade: true,
            });
        }
    };
    /**
     * [slide_nav slider navigation]
     * @return void
     */
    MainSlider.prototype.slide_nav = function () {
        this.slideNav.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            asNavFor: '#slideFor-js',
        });
    };
    /**
     * [has_nav has sliderNav]
     * @return boolean
     */
    MainSlider.prototype.has_nav = function () {
        if (this.slideNav.length === 1) {
            return true;
        }
        return false;
    };
    return MainSlider;
}());
exports.default = MainSlider;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainSlider_1 = require("./MainSlider");
var HeightHeader_1 = require("./HeightHeader");
// Class instance slider
new MainSlider_1.default(1, 1, true, true).slide_simple();
// Class instance header
new HeightHeader_1.default().sizeHeader();

},{"./HeightHeader":1,"./MainSlider":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvSGVpZ2h0SGVhZGVyLnRzIiwic3JjL3RzL01haW5TbGlkZXIudHMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0dBRUc7QUFDSDtJQU1HO1FBSE8sV0FBTSxHQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHL0IsQ0FBQztJQUVmOzs7T0FHRztJQUNJLGlDQUFVLEdBQWpCO1FBR0csSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQVksR0FBbkI7UUFFRyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdKLG1CQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTs7Ozs7O0FDakNEOztHQUVHO0FBQ0g7SUFZRzs7Ozs7O09BTUc7SUFFSCxvQkFDVSxTQUFvQixFQUNwQixVQUFvQixFQUNwQixJQUFxQixFQUNyQixNQUFxQjtRQUhyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWhCeEIsZUFBVSxHQUFjLEtBQUssQ0FBQztRQUM5QixhQUFRLEdBQWUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLFlBQU8sR0FBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFlL0MsQ0FBQztJQUdKOzs7T0FHRztJQUNJLGlDQUFZLEdBQW5CO1FBR0csSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckQsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ2pCO1lBQ0csUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7YUFDMUIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ25CO2FBRUQ7WUFDRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSTthQUNaLENBQUMsQ0FBQztTQUVMO0lBRUosQ0FBQztJQUdEOzs7T0FHRztJQUNLLDhCQUFTLEdBQWpCO1FBR0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUM7WUFDZixjQUFjLEVBQUUsQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFHRDs7O09BR0c7SUFDSyw0QkFBTyxHQUFmO1FBR0csSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzlCO1lBQ0csT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBRWhCLENBQUM7SUFHSixpQkFBQztBQUFELENBcEdBLEFBb0dDLElBQUE7Ozs7OztBQ3ZHRCwyQ0FBc0M7QUFDdEMsK0NBQTBDO0FBSTFDLHdCQUF3QjtBQUN4QixJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7QUFFaEQsd0JBQXdCO0FBQ3hCLElBQUksc0JBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqXG4gKiBbQ2xhc3Mgc2xpZGUgSnNdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlaWdodEhlYWRlclxue1xuXG4gICBwdWJsaWMgaGVhZGVyOiAgICAgIEpRdWVyeSA9ICQoXCIjaGVhZGVyLWpzXCIpO1xuICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuXG4gICBjb25zdHJ1Y3Rvcigpe31cblxuICAgLyoqXG4gICAgKiBbc2l6ZUhlYWRlcl1cbiAgICAqIEByZXR1cm4gW2Rlc2NyaXB0aW9uXVxuICAgICovXG4gICBwdWJsaWMgc2l6ZUhlYWRlcigpOiB2b2lkXG4gICB7XG5cbiAgICAgIHRoaXMuaGVpZ2h0SGVhZGVyKCk7XG4gICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLmhlaWdodEhlYWRlcjtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBbaGVpZ2h0SGVhZGVyIGFkZCBzaXplIGhlYWRlcl1cbiAgICAqIEByZXR1cm4gW251bWJlciBlbiBweF1cbiAgICAqL1xuICAgcHVibGljIGhlaWdodEhlYWRlcigpXG4gICB7XG4gICAgICBsZXQgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgJChcIiNoZWFkZXItanNcIikuY3NzKCBcImhlaWdodFwiLCBoZWlnaHQgKTtcbiAgIH1cblxuXG59XG4iLCIvKipcbiAqIFtDbGFzcyBzbGlkZSBKc11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNsaWRlclxue1xuXG4gICAvKlxuICAgICAgQHZhciBjb250ZW5ldXIgZHUgc2xpZGVcbiAgICAqL1xuICAgXG4gICBwdWJsaWMgc2xpZGVGb3I6ICAgICBKUXVlcnk7XG4gICBwdWJsaWMgdmFsaWRhdGlvbjogICBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc2xpZGVOYXY6ICAgICBKUXVlcnkgPSAkKFwiI3NsaWRlTmF2LWpzXCIpO1xuICAgcHVibGljIGNvbnRlbnQ6ICAgICAgSlF1ZXJ5ID0gJChcIiNtYWluU2xpZGVyLWpzXCIpO1xuXG4gICAvKipcbiAgICAqIFtjb25zdHJ1Y3Rvcl1cbiAgICAqIEBwYXJhbSBzbGlkZVNob3cgIFtsZSBub21icmUgZGUgc2xpZGUgdmlzaWJsZSDDoCBsYSBmb2lzXVxuICAgICogQHBhcmFtIHNjcm9sbFNob3cgW2xlIG5vbWJyZSBkZSBibG9jIHNjcm9sbGVyIHBhciBhY3Rpb24gXVxuICAgICogQHBhcmFtIGRvdHMgICAgICAgW2FmZmljaGVyL2NhY2hlciBwb2ludHNdXG4gICAgKiBAcGFyYW0gYXJyb3dzICAgICBbYWZmaWNoZXIvY2FjaGVyIGZsZWNoZV1cbiAgICAqL1xuXG4gICBjb25zdHJ1Y3RvciAoXG4gICAgICBwdWJsaWMgc2xpZGVTaG93OiAgICBudW1iZXIsXG4gICAgICBwdWJsaWMgc2Nyb2xsU2hvdzogICBudW1iZXIsXG4gICAgICBwdWJsaWMgZG90czogICAgICAgICBib29sZWFuLFxuICAgICAgcHVibGljIGFycm93czogICAgICAgYm9vbGVhbixcbiAgICkge31cblxuXG4gICAvKipcbiAgICAqIFtzbGlkZV9zaW1wbGUgc2xpZGVyIGJhc2lxdWVdXG4gICAgKiBAcmV0dXJuIHZvaWRcbiAgICAqL1xuICAgcHVibGljIHNsaWRlX3NpbXBsZSgpOiB2b2lkXG4gICB7XG5cbiAgICAgIGxldCBzbGlkZUZvciA9IHRoaXMuY29udGVudC5jaGlsZHJlbihcIiNzbGlkZUZvci1qc1wiKTtcblxuICAgICAgaWYodGhpcy5oYXNfbmF2KCkpXG4gICAgICB7XG4gICAgICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgYXNOYXZGb3I6ICcjc2xpZGVOYXYtanMnXG4gICAgICAgICB9KTtcblxuICAgICAgICAgdGhpcy5zbGlkZV9uYXYoKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgIHNsaWRlRm9yLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogdGhpcy5zbGlkZVNob3csXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogdGhpcy5zY3JvbGxTaG93LFxuICAgICAgICAgICAgYXJyb3dzOiB0aGlzLmFycm93cyxcbiAgICAgICAgICAgIGRvdHM6IHRoaXMuZG90cyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICB9XG5cblxuICAgLyoqXG4gICAgKiBbc2xpZGVfbmF2IHNsaWRlciBuYXZpZ2F0aW9uXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHByaXZhdGUgc2xpZGVfbmF2KCk6IHZvaWRcbiAgIHtcblxuICAgICAgdGhpcy5zbGlkZU5hdi5zbGljayh7XG4gICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgIGFzTmF2Rm9yOiAnI3NsaWRlRm9yLWpzJyxcbiAgICAgIH0pXG5cbiAgIH1cblxuXG4gICAvKipcbiAgICAqIFtoYXNfbmF2IGhhcyBzbGlkZXJOYXZdXG4gICAgKiBAcmV0dXJuIGJvb2xlYW5cbiAgICAqL1xuICAgcHJpdmF0ZSBoYXNfbmF2KClcbiAgIHtcblxuICAgICAgaWYgKHRoaXMuc2xpZGVOYXYubGVuZ3RoID09PSAxKVxuICAgICAge1xuICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgIH1cblxuXG59XG4iLCJpbXBvcnQgTWFpblNsaWRlciBmcm9tIFwiLi9NYWluU2xpZGVyXCI7XG5pbXBvcnQgSGVpZ2h0SGVhZGVyIGZyb20gXCIuL0hlaWdodEhlYWRlclwiO1xuXG5cblxuLy8gQ2xhc3MgaW5zdGFuY2Ugc2xpZGVyXG5uZXcgTWFpblNsaWRlcigxLCAxLCB0cnVlLCB0cnVlKS5zbGlkZV9zaW1wbGUoKTtcblxuLy8gQ2xhc3MgaW5zdGFuY2UgaGVhZGVyXG5uZXcgSGVpZ2h0SGVhZGVyKCkuc2l6ZUhlYWRlcigpO1xuIl19
