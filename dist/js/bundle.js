(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BurgerMenu = /** @class */ (function () {
    function BurgerMenu(menu, main) {
        this.menu = menu;
        this.main = main;
    }
    BurgerMenu.prototype.actionClass = function () {
        var _this = this;
        this.menu.click(function (e) {
            e.preventDefault();
            _this.main.toggleClass("with--burger");
        });
    };
    return BurgerMenu;
}());
exports.default = BurgerMenu;

},{}],2:[function(require,module,exports){
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
        console.log(height);
        height = height - 100;
        console.log(height);
        $("#header-js").css("height", height);
    };
    return HeightHeader;
}());
exports.default = HeightHeader;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainSlider_1 = require("./MainSlider");
var HeightHeader_1 = require("./HeightHeader");
var BurgerMenu_1 = require("./BurgerMenu");
// Class instance toggleBurger
new BurgerMenu_1.default($(".menu-toggle"), $("body")).actionClass();
// Class instance slider
new MainSlider_1.default(1, 1, true, true).slide_simple();
// Class instance header
new HeightHeader_1.default().sizeHeader();

},{"./BurgerMenu":1,"./HeightHeader":2,"./MainSlider":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvQnVyZ2VyTWVudS50cyIsInNyYy90cy9IZWlnaHRIZWFkZXIudHMiLCJzcmMvdHMvTWFpblNsaWRlci50cyIsInNyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtJQUtHLG9CQUFZLElBQXlCLEVBQUUsSUFBeUI7UUFFN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFXLEdBQWxCO1FBQUEsaUJBTUM7UUFKRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBQ0osaUJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBOzs7Ozs7QUNsQkQ7O0dBRUc7QUFDSDtJQU1HO1FBSE8sV0FBTSxHQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHL0IsQ0FBQztJQUVmOzs7T0FHRztJQUNJLGlDQUFVLEdBQWpCO1FBRUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQVksR0FBbkI7UUFFRyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQzNDLENBQUM7SUFHSixtQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7Ozs7OztBQ25DRDs7R0FFRztBQUNIO0lBWUc7Ozs7OztPQU1HO0lBRUgsb0JBQ1UsU0FBb0IsRUFDcEIsVUFBb0IsRUFDcEIsSUFBcUIsRUFDckIsTUFBcUI7UUFIckIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFoQnhCLGVBQVUsR0FBYyxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6QyxZQUFPLEdBQWdCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBZS9DLENBQUM7SUFHSjs7O09BR0c7SUFDSSxpQ0FBWSxHQUFuQjtRQUVHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJELElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNqQjtZQUNHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUM1QixjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFFBQVEsRUFBRSxjQUFjO2FBQzFCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNuQjthQUVEO1lBQ0csUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDakIsQ0FBQyxDQUFDO1NBQ0w7SUFDSixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ssOEJBQVMsR0FBakI7UUFFRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQztZQUNmLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLGNBQWM7U0FDMUIsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQUdEOzs7T0FHRztJQUNLLDRCQUFPLEdBQWY7UUFFRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUI7WUFDRyxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDaEIsQ0FBQztJQUdKLGlCQUFDO0FBQUQsQ0ExRkEsQUEwRkMsSUFBQTs7Ozs7O0FDN0ZELDJDQUFzQztBQUN0QywrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBSXRDLDhCQUE4QjtBQUM5QixJQUFJLG9CQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRTNELHdCQUF3QjtBQUN4QixJQUFJLG9CQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7QUFFaEQsd0JBQXdCO0FBQ3hCLElBQUksc0JBQVksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVyZ2VyTWVudVxue1xuICAgbWVudTpKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuICAgbWFpbjpKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXG4gICBjb25zdHJ1Y3RvcihtZW51OiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBtYWluOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KVxuICAge1xuICAgICAgdGhpcy5tZW51ID0gbWVudTtcbiAgICAgIHRoaXMubWFpbiA9IG1haW47XG4gICB9XG5cbiAgIHB1YmxpYyBhY3Rpb25DbGFzcygpOiB2b2lkXG4gICB7XG4gICAgICB0aGlzLm1lbnUuY2xpY2soKGUpPT57XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICB0aGlzLm1haW4udG9nZ2xlQ2xhc3MoXCJ3aXRoLS1idXJnZXJcIik7XG4gICAgICB9KVxuICAgfVxufVxuIiwiLyoqXG4gKiBbQ2xhc3Mgc2xpZGUgSnNdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlaWdodEhlYWRlclxue1xuXG4gICBwdWJsaWMgaGVhZGVyOiAgICAgIEpRdWVyeSA9ICQoXCIjaGVhZGVyLWpzXCIpO1xuICAgcHVibGljIGhlaWdodDogICAgICBudW1iZXI7XG5cbiAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAvKipcbiAgICAqIFtzaXplSGVhZGVyXVxuICAgICogQHJldHVybiBbZGVzY3JpcHRpb25dXG4gICAgKi9cbiAgIHB1YmxpYyBzaXplSGVhZGVyKCk6IHZvaWRcbiAgIHtcbiAgICAgIHRoaXMuaGVpZ2h0SGVhZGVyKCk7XG4gICAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLmhlaWdodEhlYWRlcjtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBbaGVpZ2h0SGVhZGVyIGFkZCBzaXplIGhlYWRlcl1cbiAgICAqIEByZXR1cm4gW251bWJlciBlbiBweF1cbiAgICAqL1xuICAgcHVibGljIGhlaWdodEhlYWRlcigpXG4gICB7XG4gICAgICBsZXQgaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgY29uc29sZS5sb2coaGVpZ2h0KTtcbiAgICAgIGhlaWdodCA9IGhlaWdodCAtIDEwMDtcbiAgICAgIGNvbnNvbGUubG9nKGhlaWdodCk7XG4gICAgICAkKFwiI2hlYWRlci1qc1wiKS5jc3MoIFwiaGVpZ2h0XCIsIGhlaWdodCApO1xuICAgfVxuXG5cbn1cbiIsIi8qKlxuICogW0NsYXNzIHNsaWRlIEpzXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2xpZGVyXG57XG5cbiAgIC8qXG4gICAgICBAdmFyIGNvbnRlbmV1ciBkdSBzbGlkZVxuICAgICovXG5cbiAgIHB1YmxpYyBzbGlkZUZvcjogICAgIEpRdWVyeTtcbiAgIHB1YmxpYyB2YWxpZGF0aW9uOiAgIGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBzbGlkZU5hdjogICAgIEpRdWVyeSA9ICQoXCIjc2xpZGVOYXYtanNcIik7XG4gICBwdWJsaWMgY29udGVudDogICAgICBKUXVlcnkgPSAkKFwiI21haW5TbGlkZXItanNcIik7XG5cbiAgIC8qKlxuICAgICogW2NvbnN0cnVjdG9yXVxuICAgICogQHBhcmFtIHNsaWRlU2hvdyAgW2xlIG5vbWJyZSBkZSBzbGlkZSB2aXNpYmxlIMOgIGxhIGZvaXNdXG4gICAgKiBAcGFyYW0gc2Nyb2xsU2hvdyBbbGUgbm9tYnJlIGRlIGJsb2Mgc2Nyb2xsZXIgcGFyIGFjdGlvbiBdXG4gICAgKiBAcGFyYW0gZG90cyAgICAgICBbYWZmaWNoZXIvY2FjaGVyIHBvaW50c11cbiAgICAqIEBwYXJhbSBhcnJvd3MgICAgIFthZmZpY2hlci9jYWNoZXIgZmxlY2hlXVxuICAgICovXG5cbiAgIGNvbnN0cnVjdG9yIChcbiAgICAgIHB1YmxpYyBzbGlkZVNob3c6ICAgIG51bWJlcixcbiAgICAgIHB1YmxpYyBzY3JvbGxTaG93OiAgIG51bWJlcixcbiAgICAgIHB1YmxpYyBkb3RzOiAgICAgICAgIGJvb2xlYW4sXG4gICAgICBwdWJsaWMgYXJyb3dzOiAgICAgICBib29sZWFuLFxuICAgKSB7fVxuXG5cbiAgIC8qKlxuICAgICogW3NsaWRlX3NpbXBsZSBzbGlkZXIgYmFzaXF1ZV1cbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICBwdWJsaWMgc2xpZGVfc2ltcGxlKCk6IHZvaWRcbiAgIHtcbiAgICAgIGxldCBzbGlkZUZvciA9IHRoaXMuY29udGVudC5jaGlsZHJlbihcIiNzbGlkZUZvci1qc1wiKTtcblxuICAgICAgaWYodGhpcy5oYXNfbmF2KCkpXG4gICAgICB7XG4gICAgICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICAgICBhc05hdkZvcjogJyNzbGlkZU5hdi1qcydcbiAgICAgICAgIH0pO1xuXG4gICAgICAgICB0aGlzLnNsaWRlX25hdigpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICAgc2xpZGVGb3Iuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnNsaWRlU2hvdyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnNjcm9sbFNob3csXG4gICAgICAgICAgICBhcnJvd3M6IHRoaXMuYXJyb3dzLFxuICAgICAgICAgICAgZG90czogdGhpcy5kb3RzLFxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICB9XG5cblxuICAgLyoqXG4gICAgKiBbc2xpZGVfbmF2IHNsaWRlciBuYXZpZ2F0aW9uXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHByaXZhdGUgc2xpZGVfbmF2KCk6IHZvaWRcbiAgIHtcbiAgICAgIHRoaXMuc2xpZGVOYXYuc2xpY2soe1xuICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgIGFzTmF2Rm9yOiAnI3NsaWRlRm9yLWpzJyxcbiAgICAgIH0pXG4gICB9XG5cblxuICAgLyoqXG4gICAgKiBbaGFzX25hdiBoYXMgc2xpZGVyTmF2XVxuICAgICogQHJldHVybiBib29sZWFuXG4gICAgKi9cbiAgIHByaXZhdGUgaGFzX25hdigpXG4gICB7XG4gICAgICBpZiAodGhpcy5zbGlkZU5hdi5sZW5ndGggPT09IDEpXG4gICAgICB7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgIH1cblxuXG59XG4iLCJpbXBvcnQgTWFpblNsaWRlciBmcm9tIFwiLi9NYWluU2xpZGVyXCI7XG5pbXBvcnQgSGVpZ2h0SGVhZGVyIGZyb20gXCIuL0hlaWdodEhlYWRlclwiO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSBcIi4vQnVyZ2VyTWVudVwiO1xuXG5cblxuLy8gQ2xhc3MgaW5zdGFuY2UgdG9nZ2xlQnVyZ2VyXG5uZXcgQnVyZ2VyTWVudSgkKFwiLm1lbnUtdG9nZ2xlXCIpLCAkKFwiYm9keVwiKSkuYWN0aW9uQ2xhc3MoKTtcblxuLy8gQ2xhc3MgaW5zdGFuY2Ugc2xpZGVyXG5uZXcgTWFpblNsaWRlcigxLCAxLCB0cnVlLCB0cnVlKS5zbGlkZV9zaW1wbGUoKTtcblxuLy8gQ2xhc3MgaW5zdGFuY2UgaGVhZGVyXG5uZXcgSGVpZ2h0SGVhZGVyKCkuc2l6ZUhlYWRlcigpO1xuIl19
