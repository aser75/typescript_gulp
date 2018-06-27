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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvSGVpZ2h0SGVhZGVyLnRzIiwic3JjL3RzL01haW5TbGlkZXIudHMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0dBRUc7QUFDSDtJQU1HO1FBSE8sV0FBTSxHQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFHL0IsQ0FBQztJQUVmOzs7T0FHRztJQUNJLGlDQUFVLEdBQWpCO1FBR0csSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUNBQVksR0FBbkI7UUFFRyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFDM0MsQ0FBQztJQUdKLG1CQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTs7Ozs7O0FDakNEOztHQUVHO0FBQ0g7SUFXRzs7Ozs7O09BTUc7SUFDSCxvQkFDVSxTQUFvQixFQUNwQixVQUFvQixFQUNwQixJQUFxQixFQUNyQixNQUFxQjtRQUhyQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQVU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQWZ4QixlQUFVLEdBQWMsS0FBSyxDQUFDO1FBQzlCLGFBQVEsR0FBZSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekMsWUFBTyxHQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQWMvQyxDQUFDO0lBR0o7OztPQUdHO0lBQ0ksaUNBQVksR0FBbkI7UUFHRyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVyRCxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDakI7WUFDRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsY0FBYzthQUMxQixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbkI7YUFFRDtZQUNHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUM1QixjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJO2FBQ1osQ0FBQyxDQUFDO1NBRUw7SUFFSixDQUFDO0lBR0Q7OztPQUdHO0lBQ0ssOEJBQVMsR0FBakI7UUFHRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNqQixZQUFZLEVBQUUsQ0FBQztZQUNmLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsUUFBUSxFQUFFLGNBQWM7U0FDMUIsQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQUdEOzs7T0FHRztJQUNLLDRCQUFPLEdBQWY7UUFHRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDOUI7WUFDRyxPQUFPLElBQUksQ0FBQztTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFFaEIsQ0FBQztJQUdKLGlCQUFDO0FBQUQsQ0FsR0EsQUFrR0MsSUFBQTs7Ozs7O0FDckdELDJDQUFzQztBQUN0QywrQ0FBMEM7QUFJMUMsd0JBQXdCO0FBQ3hCLElBQUksb0JBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUVoRCx3QkFBd0I7QUFDeEIsSUFBSSxzQkFBWSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcbiAqIFtDbGFzcyBzbGlkZSBKc11cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVpZ2h0SGVhZGVyXG57XG5cbiAgIHB1YmxpYyBoZWFkZXI6ICAgICAgSlF1ZXJ5ID0gJChcIiNoZWFkZXItanNcIik7XG4gICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG5cbiAgIGNvbnN0cnVjdG9yKCl7fVxuXG4gICAvKipcbiAgICAqIFtzaXplSGVhZGVyXVxuICAgICogQHJldHVybiBbZGVzY3JpcHRpb25dXG4gICAgKi9cbiAgIHB1YmxpYyBzaXplSGVhZGVyKCk6IHZvaWRcbiAgIHtcblxuICAgICAgdGhpcy5oZWlnaHRIZWFkZXIoKTtcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHRoaXMuaGVpZ2h0SGVhZGVyO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFtoZWlnaHRIZWFkZXIgYWRkIHNpemUgaGVhZGVyXVxuICAgICogQHJldHVybiBbbnVtYmVyIGVuIHB4XVxuICAgICovXG4gICBwdWJsaWMgaGVpZ2h0SGVhZGVyKClcbiAgIHtcbiAgICAgIGxldCBoZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAkKFwiI2hlYWRlci1qc1wiKS5jc3MoIFwiaGVpZ2h0XCIsIGhlaWdodCApO1xuICAgfVxuXG5cbn1cbiIsIi8qKlxuICogW0NsYXNzIHNsaWRlIEpzXVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2xpZGVyXG57XG5cbiAgIC8qXG4gICAgICBAdmFyIGNvbnRlbmV1ciBkdSBzbGlkZVxuICAgICovXG4gICBwdWJsaWMgc2xpZGVGb3I6ICAgICBKUXVlcnk7XG4gICBwdWJsaWMgdmFsaWRhdGlvbjogICBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc2xpZGVOYXY6ICAgICBKUXVlcnkgPSAkKFwiI3NsaWRlTmF2LWpzXCIpO1xuICAgcHVibGljIGNvbnRlbnQ6ICAgICAgSlF1ZXJ5ID0gJChcIiNtYWluU2xpZGVyLWpzXCIpO1xuXG4gICAvKipcbiAgICAqIFtjb25zdHJ1Y3Rvcl1cbiAgICAqIEBwYXJhbSBzbGlkZVNob3cgIFtsZSBub21icmUgZGUgc2xpZGUgdmlzaWJsZSDDoCBsYSBmb2lzXVxuICAgICogQHBhcmFtIHNjcm9sbFNob3cgW2xlIG5vbWJyZSBkZSBibG9jIHNjcm9sbGVyIHBhciBhY3Rpb24gXVxuICAgICogQHBhcmFtIGRvdHMgICAgICAgW2FmZmljaGVyL2NhY2hlciBwb2ludHNdXG4gICAgKiBAcGFyYW0gYXJyb3dzICAgICBbYWZmaWNoZXIvY2FjaGVyIGZsZWNoZV1cbiAgICAqL1xuICAgY29uc3RydWN0b3IgKFxuICAgICAgcHVibGljIHNsaWRlU2hvdzogICAgbnVtYmVyLFxuICAgICAgcHVibGljIHNjcm9sbFNob3c6ICAgbnVtYmVyLFxuICAgICAgcHVibGljIGRvdHM6ICAgICAgICAgYm9vbGVhbixcbiAgICAgIHB1YmxpYyBhcnJvd3M6ICAgICAgIGJvb2xlYW4sXG4gICApIHt9XG5cblxuICAgLyoqXG4gICAgKiBbc2xpZGVfc2ltcGxlIHNsaWRlciBiYXNpcXVlXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHB1YmxpYyBzbGlkZV9zaW1wbGUoKTogdm9pZFxuICAge1xuXG4gICAgICBsZXQgc2xpZGVGb3IgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4oXCIjc2xpZGVGb3ItanNcIik7XG5cbiAgICAgIGlmKHRoaXMuaGFzX25hdigpKVxuICAgICAge1xuICAgICAgICAgc2xpZGVGb3Iuc2xpY2soe1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnNsaWRlU2hvdyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnNjcm9sbFNob3csXG4gICAgICAgICAgICBhcnJvd3M6IHRoaXMuYXJyb3dzLFxuICAgICAgICAgICAgZG90czogdGhpcy5kb3RzLFxuICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgIGFzTmF2Rm9yOiAnI3NsaWRlTmF2LWpzJ1xuICAgICAgICAgfSk7XG5cbiAgICAgICAgIHRoaXMuc2xpZGVfbmF2KCk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgfVxuXG5cbiAgIC8qKlxuICAgICogW3NsaWRlX25hdiBzbGlkZXIgbmF2aWdhdGlvbl1cbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICBwcml2YXRlIHNsaWRlX25hdigpOiB2b2lkXG4gICB7XG5cbiAgICAgIHRoaXMuc2xpZGVOYXYuc2xpY2soe1xuICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICBhc05hdkZvcjogJyNzbGlkZUZvci1qcycsXG4gICAgICB9KVxuXG4gICB9XG5cblxuICAgLyoqXG4gICAgKiBbaGFzX25hdiBoYXMgc2xpZGVyTmF2XVxuICAgICogQHJldHVybiBib29sZWFuXG4gICAgKi9cbiAgIHByaXZhdGUgaGFzX25hdigpXG4gICB7XG5cbiAgICAgIGlmICh0aGlzLnNsaWRlTmF2Lmxlbmd0aCA9PT0gMSlcbiAgICAgIHtcbiAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICB9XG5cblxufVxuIiwiaW1wb3J0IE1haW5TbGlkZXIgZnJvbSBcIi4vTWFpblNsaWRlclwiO1xuaW1wb3J0IEhlaWdodEhlYWRlciBmcm9tIFwiLi9IZWlnaHRIZWFkZXJcIjtcblxuXG5cbi8vIENsYXNzIGluc3RhbmNlIHNsaWRlclxubmV3IE1haW5TbGlkZXIoMSwgMSwgdHJ1ZSwgdHJ1ZSkuc2xpZGVfc2ltcGxlKCk7XG5cbi8vIENsYXNzIGluc3RhbmNlIGhlYWRlclxubmV3IEhlaWdodEhlYWRlcigpLnNpemVIZWFkZXIoKTtcbiJdfQ==
