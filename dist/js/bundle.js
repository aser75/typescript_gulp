(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * [Class slide Js]
 */
var MainSlider = /** @class */ (function () {
    /**
     * [constructor]
     * @param content    [select du conteneur des conteneur type de Slider]
     * @param slideShow  [le nombre de slide visible à la fois]
     * @param scrollShow [le nombre de bloc scroller par action ]
     * @param dots       [afficher/cacher points]
     * @param arrows     [afficher/cacher fleche]
     */
    function MainSlider(content, slideShow, scrollShow, dots, arrows) {
        this.content = content;
        this.slideShow = slideShow;
        this.scrollShow = scrollShow;
        this.dots = dots;
        this.arrows = arrows;
    }
    /**
     * [slide_simple fonction slider basique]
     * @return void
     */
    MainSlider.prototype.slide_simple = function () {
        var slideFor = this.content.children("#slideFor-js");
        slideFor.slick({
            slidesToShow: this.slideShow,
            slidesToScroll: this.scrollShow,
            arrows: this.arrows,
            dots: this.dots,
            fade: true,
        });
    };
    return MainSlider;
}());
exports.default = MainSlider;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//$("h2").hide();
var MainSlider_1 = require("./MainSlider");
var selector = $("#mainSlider-js");
new MainSlider_1.default(selector, 1, 1, true, true).slide_simple();

},{"./MainSlider":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvTWFpblNsaWRlci50cyIsInNyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7R0FFRztBQUNIO0lBUUc7Ozs7Ozs7T0FPRztJQUVILG9CQUNVLE9BQWMsRUFDZCxTQUFnQixFQUNoQixVQUFpQixFQUNqQixJQUFZLEVBQ1osTUFBZTtRQUpmLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQ2hCLGVBQVUsR0FBVixVQUFVLENBQU87UUFDakIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVM7SUFDdEIsQ0FBQztJQUVKOzs7T0FHRztJQUNILGlDQUFZLEdBQVo7UUFFRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUosaUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBOzs7Ozs7QUM5Q0QsaUJBQWlCO0FBQ2pCLDJDQUFzQztBQUl0QyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuQyxJQUFJLG9CQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXG5cbi8qKlxuICogW0NsYXNzIHNsaWRlIEpzXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2xpZGVyXG57XG5cbiAgIC8qXG4gICAgICBAdmFyIGNvbnRlbmV1ciBkdSBzbGlkZVxuICAgICovXG4gICBwdWJsaWMgc2xpZGVGb3I6SlF1ZXJ5O1xuXG4gICAvKipcbiAgICAqIFtjb25zdHJ1Y3Rvcl1cbiAgICAqIEBwYXJhbSBjb250ZW50ICAgIFtzZWxlY3QgZHUgY29udGVuZXVyIGRlcyBjb250ZW5ldXIgdHlwZSBkZSBTbGlkZXJdXG4gICAgKiBAcGFyYW0gc2xpZGVTaG93ICBbbGUgbm9tYnJlIGRlIHNsaWRlIHZpc2libGUgw6AgbGEgZm9pc11cbiAgICAqIEBwYXJhbSBzY3JvbGxTaG93IFtsZSBub21icmUgZGUgYmxvYyBzY3JvbGxlciBwYXIgYWN0aW9uIF1cbiAgICAqIEBwYXJhbSBkb3RzICAgICAgIFthZmZpY2hlci9jYWNoZXIgcG9pbnRzXVxuICAgICogQHBhcmFtIGFycm93cyAgICAgW2FmZmljaGVyL2NhY2hlciBmbGVjaGVdXG4gICAgKi9cblxuICAgY29uc3RydWN0b3IgKFxuICAgICAgcHVibGljIGNvbnRlbnQ6SlF1ZXJ5LFxuICAgICAgcHVibGljIHNsaWRlU2hvdzpudW1iZXIsXG4gICAgICBwdWJsaWMgc2Nyb2xsU2hvdzpudW1iZXIsXG4gICAgICBwdWJsaWMgZG90czpib29sZWFuLFxuICAgICAgcHVibGljIGFycm93czogYm9vbGVhbixcbiAgICkge31cblxuICAgLyoqXG4gICAgKiBbc2xpZGVfc2ltcGxlIGZvbmN0aW9uIHNsaWRlciBiYXNpcXVlXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHNsaWRlX3NpbXBsZSgpOiB2b2lkXG4gICB7XG4gICAgICBsZXQgc2xpZGVGb3IgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4oXCIjc2xpZGVGb3ItanNcIik7XG4gICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgfSk7XG4gICB9XG5cbn1cbiIsIi8vJChcImgyXCIpLmhpZGUoKTtcbmltcG9ydCBNYWluU2xpZGVyIGZyb20gXCIuL01haW5TbGlkZXJcIjtcblxuXG5cbmxldCBzZWxlY3RvciA9ICQoXCIjbWFpblNsaWRlci1qc1wiKTtcbm5ldyBNYWluU2xpZGVyKHNlbGVjdG9yLCAxLCAxLCB0cnVlLCB0cnVlKS5zbGlkZV9zaW1wbGUoKTtcbiJdfQ==
