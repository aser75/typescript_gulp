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
        this.validation = false;
        this.slideNav = $("#slideNav-js");
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
    MainSlider.prototype.has_nav = function () {
        if (this.slideNav.length === 1) {
            return true;
        }
        return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvTWFpblNsaWRlci50cyIsInNyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7R0FFRztBQUNIO0lBVUc7Ozs7Ozs7T0FPRztJQUVILG9CQUNVLE9BQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFVBQW9CLEVBQ3BCLElBQXFCLEVBQ3JCLE1BQXFCO1FBSnJCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFqQnhCLGVBQVUsR0FBYyxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFlLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQWlCN0MsQ0FBQztJQUVKOzs7T0FHRztJQUNJLGlDQUFZLEdBQW5CO1FBR0csSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckQsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQ2pCO1lBRUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDWixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQzVCLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7YUFDMUIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBRW5CO2FBRUQ7WUFFRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSTthQUNaLENBQUMsQ0FBQztTQUVMO0lBRUosQ0FBQztJQUdEOzs7T0FHRztJQUNLLDhCQUFTLEdBQWpCO1FBR0csSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDakIsWUFBWSxFQUFFLENBQUM7WUFDZixjQUFjLEVBQUUsQ0FBQztZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1NBQzFCLENBQUMsQ0FBQTtJQUVMLENBQUM7SUFHTSw0QkFBTyxHQUFkO1FBR0csSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzlCO1lBQ0csT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBRWhCLENBQUM7SUFHSixpQkFBQztBQUFELENBbEdBLEFBa0dDLElBQUE7Ozs7OztBQ3ZHRCxpQkFBaUI7QUFDakIsMkNBQXNDO0FBSXRDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25DLElBQUksb0JBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcblxuLyoqXG4gKiBbQ2xhc3Mgc2xpZGUgSnNdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TbGlkZXJcbntcblxuICAgLypcbiAgICAgIEB2YXIgY29udGVuZXVyIGR1IHNsaWRlXG4gICAgKi9cbiAgIHB1YmxpYyBzbGlkZUZvcjogICAgIEpRdWVyeTtcbiAgIHB1YmxpYyB2YWxpZGF0aW9uOiAgIGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBzbGlkZU5hdjogICAgIEpRdWVyeSA9ICQoXCIjc2xpZGVOYXYtanNcIik7XG5cbiAgIC8qKlxuICAgICogW2NvbnN0cnVjdG9yXVxuICAgICogQHBhcmFtIGNvbnRlbnQgICAgW3NlbGVjdCBkdSBjb250ZW5ldXIgZGVzIGNvbnRlbmV1ciB0eXBlIGRlIFNsaWRlcl1cbiAgICAqIEBwYXJhbSBzbGlkZVNob3cgIFtsZSBub21icmUgZGUgc2xpZGUgdmlzaWJsZSDDoCBsYSBmb2lzXVxuICAgICogQHBhcmFtIHNjcm9sbFNob3cgW2xlIG5vbWJyZSBkZSBibG9jIHNjcm9sbGVyIHBhciBhY3Rpb24gXVxuICAgICogQHBhcmFtIGRvdHMgICAgICAgW2FmZmljaGVyL2NhY2hlciBwb2ludHNdXG4gICAgKiBAcGFyYW0gYXJyb3dzICAgICBbYWZmaWNoZXIvY2FjaGVyIGZsZWNoZV1cbiAgICAqL1xuXG4gICBjb25zdHJ1Y3RvciAoXG4gICAgICBwdWJsaWMgY29udGVudDogICAgICBKUXVlcnksXG4gICAgICBwdWJsaWMgc2xpZGVTaG93OiAgICBudW1iZXIsXG4gICAgICBwdWJsaWMgc2Nyb2xsU2hvdzogICBudW1iZXIsXG4gICAgICBwdWJsaWMgZG90czogICAgICAgICBib29sZWFuLFxuICAgICAgcHVibGljIGFycm93czogICAgICAgYm9vbGVhbixcbiAgICkge31cblxuICAgLyoqXG4gICAgKiBbc2xpZGVfc2ltcGxlIHNsaWRlciBiYXNpcXVlXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHB1YmxpYyBzbGlkZV9zaW1wbGUoKTogdm9pZFxuICAge1xuXG4gICAgICBsZXQgc2xpZGVGb3IgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4oXCIjc2xpZGVGb3ItanNcIik7XG5cbiAgICAgIGlmKHRoaXMuaGFzX25hdigpKVxuICAgICAge1xuXG4gICAgICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgYXNOYXZGb3I6ICcjc2xpZGVOYXYtanMnXG4gICAgICAgICB9KTtcblxuICAgICAgICAgdGhpcy5zbGlkZV9uYXYoKTtcblxuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuXG4gICAgICAgICBzbGlkZUZvci5zbGljayh7XG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHRoaXMuc2xpZGVTaG93LFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IHRoaXMuc2Nyb2xsU2hvdyxcbiAgICAgICAgICAgIGFycm93czogdGhpcy5hcnJvd3MsXG4gICAgICAgICAgICBkb3RzOiB0aGlzLmRvdHMsXG4gICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgfVxuXG5cbiAgIC8qKlxuICAgICogW3NsaWRlX25hdiBzbGlkZXIgbmF2aWdhdGlvbl1cbiAgICAqIEByZXR1cm4gdm9pZFxuICAgICovXG4gICBwcml2YXRlIHNsaWRlX25hdigpOiB2b2lkXG4gICB7XG5cbiAgICAgIHRoaXMuc2xpZGVOYXYuc2xpY2soe1xuICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICBhc05hdkZvcjogJyNzbGlkZUZvci1qcycsXG4gICAgICB9KVxuXG4gICB9XG5cblxuICAgcHVibGljIGhhc19uYXYoKVxuICAge1xuXG4gICAgICBpZiAodGhpcy5zbGlkZU5hdi5sZW5ndGggPT09IDEpXG4gICAgICB7XG4gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgfVxuXG5cbn1cbiIsIi8vJChcImgyXCIpLmhpZGUoKTtcbmltcG9ydCBNYWluU2xpZGVyIGZyb20gXCIuL01haW5TbGlkZXJcIjtcblxuXG5cbmxldCBzZWxlY3RvciA9ICQoXCIjbWFpblNsaWRlci1qc1wiKTtcbm5ldyBNYWluU2xpZGVyKHNlbGVjdG9yLCAxLCAxLCB0cnVlLCB0cnVlKS5zbGlkZV9zaW1wbGUoKTtcbiJdfQ==
