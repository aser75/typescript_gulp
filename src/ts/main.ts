import MainSlider from "./MainSlider";
import HeightHeader from "./HeightHeader";
import BurgerMenu from "./BurgerMenu";



// Class instance toggleBurger
new BurgerMenu($(".menu-toggle"), $("body")).actionClass();

// Class instance slider
new MainSlider(1, 1, true, true).slide_simple();

// Class instance header
new HeightHeader().sizeHeader();
