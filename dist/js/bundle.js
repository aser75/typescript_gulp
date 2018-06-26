(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//$("h2").hide();
//$("#mainSlider-js").slick();
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
     * [slide_A fonction slider basique]
     * @return void
     */
    MainSlider.prototype.slide_A = function () {
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
var selector = $("#mainSlider-js");
var mainslider = new MainSlider(selector, 1, 1, true, true);
mainslider.slide_A();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFLOUI7SUFPRzs7Ozs7OztPQU9HO0lBRUgsb0JBQ1UsT0FBYyxFQUNkLFNBQWdCLEVBQ2hCLFVBQWlCLEVBQ2pCLElBQVksRUFDWixNQUFlO1FBSmYsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUNkLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBTztRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUN0QixDQUFDO0lBR0o7OztPQUdHO0lBQ0gsNEJBQU8sR0FBUDtRQUVHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDWixZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFSixpQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUFHRCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNuQyxJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUQsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8kKFwiaDJcIikuaGlkZSgpO1xuLy8kKFwiI21haW5TbGlkZXItanNcIikuc2xpY2soKTtcblxuXG5cblxuY2xhc3MgTWFpblNsaWRlclxue1xuXG4gICAvL1xuICAgLy9cbiAgIHByaXZhdGUgc2xpZGVGb3I6SlF1ZXJ5O1xuXG4gICAvKipcbiAgICAqIFtjb25zdHJ1Y3Rvcl1cbiAgICAqIEBwYXJhbSBjb250ZW50ICAgIFtzZWxlY3QgZHUgY29udGVuZXVyIGRlcyBjb250ZW5ldXIgdHlwZSBkZSBTbGlkZXJdXG4gICAgKiBAcGFyYW0gc2xpZGVTaG93ICBbbGUgbm9tYnJlIGRlIHNsaWRlIHZpc2libGUgw6AgbGEgZm9pc11cbiAgICAqIEBwYXJhbSBzY3JvbGxTaG93IFtsZSBub21icmUgZGUgYmxvYyBzY3JvbGxlciBwYXIgYWN0aW9uIF1cbiAgICAqIEBwYXJhbSBkb3RzICAgICAgIFthZmZpY2hlci9jYWNoZXIgcG9pbnRzXVxuICAgICogQHBhcmFtIGFycm93cyAgICAgW2FmZmljaGVyL2NhY2hlciBmbGVjaGVdXG4gICAgKi9cblxuICAgY29uc3RydWN0b3IgKFxuICAgICAgcHVibGljIGNvbnRlbnQ6SlF1ZXJ5LFxuICAgICAgcHVibGljIHNsaWRlU2hvdzpudW1iZXIsXG4gICAgICBwdWJsaWMgc2Nyb2xsU2hvdzpudW1iZXIsXG4gICAgICBwdWJsaWMgZG90czpib29sZWFuLFxuICAgICAgcHVibGljIGFycm93czogYm9vbGVhbixcbiAgICkge31cblxuXG4gICAvKipcbiAgICAqIFtzbGlkZV9BIGZvbmN0aW9uIHNsaWRlciBiYXNpcXVlXVxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgIHNsaWRlX0EoKTogdm9pZFxuICAge1xuICAgICAgbGV0IHNsaWRlRm9yID0gdGhpcy5jb250ZW50LmNoaWxkcmVuKFwiI3NsaWRlRm9yLWpzXCIpO1xuICAgICAgc2xpZGVGb3Iuc2xpY2soe1xuICAgICAgICAgc2xpZGVzVG9TaG93OiB0aGlzLnNsaWRlU2hvdyxcbiAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnNjcm9sbFNob3csXG4gICAgICAgICBhcnJvd3M6IHRoaXMuYXJyb3dzLFxuICAgICAgICAgZG90czogdGhpcy5kb3RzLFxuICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgfVxuXG59XG5cblxubGV0IHNlbGVjdG9yID0gJChcIiNtYWluU2xpZGVyLWpzXCIpO1xubGV0IG1haW5zbGlkZXIgPSBuZXcgTWFpblNsaWRlcihzZWxlY3RvciwgMSwgMSwgdHJ1ZSwgdHJ1ZSk7XG5tYWluc2xpZGVyLnNsaWRlX0EoKTtcbiJdfQ==
