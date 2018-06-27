(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Class slide Js]
 */
var HeightHeader = /** @class */ (function () {
    function HeightHeader() {
    }
    HeightHeader.prototype.test = function () {
        return console.log("test");
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
new HeightHeader_1.default().test();

},{"./HeightHeader":1,"./MainSlider":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvSGVpZ2h0SGVhZGVyLnRzIiwic3JjL3RzL01haW5TbGlkZXIudHMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0dBRUc7QUFDSDtJQUdHO0lBQWMsQ0FBQztJQUVmLDJCQUFJLEdBQUo7UUFDRyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUdKLG1CQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7Ozs7OztBQ2JEOztHQUVHO0FBQ0g7SUFXRzs7Ozs7O09BTUc7SUFDSCxvQkFDVSxTQUFvQixFQUNwQixVQUFvQixFQUNwQixJQUFxQixFQUNyQixNQUFxQjtRQUhyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWZ4QixlQUFVLEdBQWMsS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBZSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsWUFBTyxHQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQWMvQyxDQUFDO0lBR0o7OztPQUdHO0lBQ0ksaUNBQVksR0FBbkI7UUFHRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVyRCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDakI7WUFDRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsY0FBYzthQUMxQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkI7YUFFRDtZQUNHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUM1QixjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJO2FBQ1osQ0FBQyxDQUFDO1NBRUw7SUFFSixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ssOEJBQVMsR0FBakI7UUFHRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQztZQUNmLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLGNBQWM7U0FDMUIsQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQUdEOzs7T0FHRztJQUNLLDRCQUFPLEdBQWY7UUFHRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUI7WUFDRyxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFFaEIsQ0FBQztJQUdKLGlCQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTs7Ozs7O0FDckdELDJDQUFzQztBQUN0QywrQ0FBMEM7QUFJMUMsd0JBQXdCO0FBQ3hCLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUVoRCx3QkFBd0I7QUFDeEIsSUFBSSxzQkFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFtDbGFzcyBzbGlkZSBKc11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVpZ2h0SGVhZGVyXG57XG5cbiAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICB0ZXN0KCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgIH1cblxuXG59XG4iLCIvKipcbiAqIFtDbGFzcyBzbGlkZSBKc11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNsaWRlclxue1xuXG4gICAvKlxuICAgICAgQHZhciBjb250ZW5ldXIgZHUgc2xpZGVcbiAgICAqL1xuICAgcHVibGljIHNsaWRlRm9yOiAgICAgSlF1ZXJ5O1xuICAgcHVibGljIHZhbGlkYXRpb246ICAgYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIHNsaWRlTmF2OiAgICAgSlF1ZXJ5ID0gJChcIiNzbGlkZU5hdi1qc1wiKTtcbiAgIHB1YmxpYyBjb250ZW50OiAgICAgIEpRdWVyeSA9ICQoXCIjbWFpblNsaWRlci1qc1wiKTtcblxuICAgLyoqXG4gICAgKiBbY29uc3RydWN0b3JdXG4gICAgKiBAcGFyYW0gc2xpZGVTaG93ICBbbGUgbm9tYnJlIGRlIHNsaWRlIHZpc2libGUgw6AgbGEgZm9pc11cbiAgICAqIEBwYXJhbSBzY3JvbGxTaG93IFtsZSBub21icmUgZGUgYmxvYyBzY3JvbGxlciBwYXIgYWN0aW9uIF1cbiAgICAqIEBwYXJhbSBkb3RzICAgICAgIFthZmZpY2hlci9jYWNoZXIgcG9pbnRzXVxuICAgICogQHBhcmFtIGFycm93cyAgICAgW2FmZmljaGVyL2NhY2hlciBmbGVjaGVdXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yIChcbiAgICAgIHB1YmxpYyBzbGlkZVNob3c6ICAgIG51bWJlcixcbiAgICAgIHB1YmxpYyBzY3JvbGxTaG93OiAgIG51bWJlcixcbiAgICAgIHB1YmxpYyBkb3RzOiAgICAgICAgIGJvb2xlYW4sXG4gICAgICBwdWJsaWMgYXJyb3dzOiAgICAgICBib29sZWFuLFxuICAgKSB7fVxuXG5cbiAgIC8qKlxuICAgICogW3NsaWRlX3NpbXBsZSBzbGlkZXIgYmFzaXF1ZV1cbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICBwdWJsaWMgc2xpZGVfc2ltcGxlKCk6IHZvaWRcbiAgIHtcblxuICAgICAgbGV0IHNsaWRlRm9yID0gdGhpcy5jb250ZW50LmNoaWxkcmVuKFwiI3NsaWRlRm9yLWpzXCIpO1xuXG4gICAgICBpZih0aGlzLmhhc19uYXYoKSlcbiAgICAgIHtcbiAgICAgICAgIHNsaWRlRm9yLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogdGhpcy5zbGlkZVNob3csXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogdGhpcy5zY3JvbGxTaG93LFxuICAgICAgICAgICAgYXJyb3dzOiB0aGlzLmFycm93cyxcbiAgICAgICAgICAgIGRvdHM6IHRoaXMuZG90cyxcbiAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICBhc05hdkZvcjogJyNzbGlkZU5hdi1qcydcbiAgICAgICAgIH0pO1xuXG4gICAgICAgICB0aGlzLnNsaWRlX25hdigpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgc2xpZGVGb3Iuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnNsaWRlU2hvdyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnNjcm9sbFNob3csXG4gICAgICAgICAgICBhcnJvd3M6IHRoaXMuYXJyb3dzLFxuICAgICAgICAgICAgZG90czogdGhpcy5kb3RzLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgIH1cblxuXG4gICAvKipcbiAgICAqIFtzbGlkZV9uYXYgc2xpZGVyIG5hdmlnYXRpb25dXG4gICAgKiBAcmV0dXJuIHZvaWRcbiAgICAqL1xuICAgcHJpdmF0ZSBzbGlkZV9uYXYoKTogdm9pZFxuICAge1xuXG4gICAgICB0aGlzLnNsaWRlTmF2LnNsaWNrKHtcbiAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxuICAgICAgICAgYXNOYXZGb3I6ICcjc2xpZGVGb3ItanMnLFxuICAgICAgfSlcblxuICAgfVxuXG5cbiAgIC8qKlxuICAgICogW2hhc19uYXYgaGFzIHNsaWRlck5hdl1cbiAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICovXG4gICBwcml2YXRlIGhhc19uYXYoKVxuICAge1xuXG4gICAgICBpZiAodGhpcy5zbGlkZU5hdi5sZW5ndGggPT09IDEpXG4gICAgICB7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgfVxuXG5cbn1cbiIsImltcG9ydCBNYWluU2xpZGVyIGZyb20gXCIuL01haW5TbGlkZXJcIjtcbmltcG9ydCBIZWlnaHRIZWFkZXIgZnJvbSBcIi4vSGVpZ2h0SGVhZGVyXCI7XG5cblxuXG4vLyBDbGFzcyBpbnN0YW5jZSBzbGlkZXJcbm5ldyBNYWluU2xpZGVyKDEsIDEsIHRydWUsIHRydWUpLnNsaWRlX3NpbXBsZSgpO1xuXG4vLyBDbGFzcyBpbnN0YW5jZSBoZWFkZXJcbm5ldyBIZWlnaHRIZWFkZXIoKS50ZXN0KCk7XG4iXX0=
