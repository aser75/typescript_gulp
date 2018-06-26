//$("h2").hide();
//$("#mainSlider-js").slick();




class MainSlider
{

   // @var conteneur du slide
   private slideFor:JQuery;

   /**
    * [constructor]
    * @param content    [select du conteneur des conteneur type de Slider]
    * @param slideShow  [le nombre de slide visible à la fois]
    * @param scrollShow [le nombre de bloc scroller par action ]
    * @param dots       [afficher/cacher points]
    * @param arrows     [afficher/cacher fleche]
    */

   constructor (
      public content:JQuery,
      public slideShow:number,
      public scrollShow:number,
      public dots:boolean,
      public arrows: boolean,
   ) {}


   /**
    * [slide_A fonction slider basique]
    * @return void
    */
   slide_A(): void
   {
      let slideFor = this.content.children("#slideFor-js");
      slideFor.slick({
         slidesToShow: this.slideShow,
         slidesToScroll: this.scrollShow,
         arrows: this.arrows,
         dots: this.dots,
         fade: true,
      });
   }

}


let selector = $("#mainSlider-js");
let mainslider = new MainSlider(selector, 1, 1, true, true);
mainslider.slide_A();
