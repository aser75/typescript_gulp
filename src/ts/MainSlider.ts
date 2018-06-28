/**
 * [Class slide Js]
 */
export default class MainSlider
{

   /*
      @var conteneur du slide
    */

   public slideFor:     JQuery;
   public validation:   boolean = false;
   public slideNav:     JQuery = $("#slideNav-js");
   public content:      JQuery = $("#mainSlider-js");

   /**
    * [constructor]
    * @param slideShow  [le nombre de slide visible à la fois]
    * @param scrollShow [le nombre de bloc scroller par action ]
    * @param dots       [afficher/cacher points]
    * @param arrows     [afficher/cacher fleche]
    */

   constructor (
      public slideShow:    number,
      public scrollShow:   number,
      public dots:         boolean,
      public arrows:       boolean,
   ) {}


   /**
    * [slide_simple slider basique]
    * @return void
    */
   public slide_simple(): void
   {
      let slideFor = this.content.children("#slideFor-js");

      if(this.has_nav())
      {
         slideFor.slick({
            slidesToShow: this.slideShow,
            slidesToScroll: this.scrollShow,
            arrows: this.arrows,
            dots: this.dots,
            asNavFor: '#slideNav-js'
         });

         this.slide_nav();
      }
      else
      {
         slideFor.slick({
            slidesToShow: this.slideShow,
            slidesToScroll: this.scrollShow,
            arrows: this.arrows,
            dots: this.dots,
         });
      }
   }


   /**
    * [slide_nav slider navigation]
    * @return void
    */
   private slide_nav(): void
   {
      this.slideNav.slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         dots: true,
         focusOnSelect: true,
         asNavFor: '#slideFor-js',
      })
   }


   /**
    * [has_nav has sliderNav]
    * @return boolean
    */
   private has_nav()
   {
      if (this.slideNav.length === 1)
      {
         return true;
      }
      return false;
   }


}
