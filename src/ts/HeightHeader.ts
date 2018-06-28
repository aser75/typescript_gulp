/**
 * [Class slide Js]
 */
export default class HeightHeader
{

   public header:      JQuery = $("#header-js");
   public height:      number;

   constructor(){}

   /**
    * [sizeHeader]
    * @return [description]
    */
   public sizeHeader(): void
   {
      this.heightHeader();
      window.onresize = this.heightHeader;
   }

   /**
    * [heightHeader add size header]
    * @return [number en px]
    */
   public heightHeader()
   {
      let height = $(window).height();
      console.log(height);
      height = height - 100;
      console.log(height);
      $("#header-js").css( "height", height );
   }


}
