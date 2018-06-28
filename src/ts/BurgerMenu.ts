export default class BurgerMenu
{
   menu:JQuery<HTMLElement>;
   main:JQuery<HTMLElement>;

   constructor(menu: JQuery<HTMLElement>, main: JQuery<HTMLElement>)
   {
      this.menu = menu;
      this.main = main;
   }

   public actionClass(): void
   {
      this.menu.click((e)=>{
         e.preventDefault();
         this.main.toggleClass("with--burger");
      })
   }
}
