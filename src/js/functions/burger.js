import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
    const burger = document?.querySelector("[data-burger]");
    const menu = document?.querySelector("[data-menu]");
    const burgerСatalog = document?.querySelector("[data-burger-catalog]");
    const menuСatalog = document?.querySelector("[data-menu-catalog]");
    const menuItems = document?.querySelectorAll("[data-menu-item]");
    const overlay = document?.querySelector("[data-menu-overlay]");

    burger?.addEventListener("click", (e) => {
        burger?.classList.toggle("burger--active");
        menu?.classList.toggle("menu--active");

        if (menu?.classList.contains("menu--active")) {
            burger?.setAttribute("aria-expanded", "true");
            burger?.setAttribute("aria-label", "Закрыть меню");
            disableScroll();
        } else {
            burger?.setAttribute("aria-expanded", "false");
            burger?.setAttribute("aria-label", "Открыть меню");
            enableScroll();
        }
    });

    burgerСatalog?.addEventListener("click", (e) => {
        burgerСatalog?.classList.toggle("catalog-burger--active");
        menuСatalog?.classList.toggle("menu-catalog-active");
        if (menuСatalog?.classList.contains("menu-catalog-active")) {
            burgerСatalog?.setAttribute("aria-expanded", "true");
            burgerСatalog?.setAttribute("aria-label", "Закрыть каталог");
            disableScroll();
        } else {
            burgerСatalog?.setAttribute("aria-expanded", "false");
            burgerСatalog?.setAttribute("aria-label", "Открыть каталог");
            enableScroll();
        }
    });

    overlay?.addEventListener("click", () => {
        burger?.setAttribute("aria-expanded", "false");
        burger?.setAttribute("aria-label", "Открыть меню");
        burger.classList.remove("burger--active");
        menu.classList.remove("menu--active");
        enableScroll();
    });

    menuItems?.forEach((el) => {
        el.addEventListener("click", () => {
            burger?.setAttribute("aria-expanded", "false");
            burger?.setAttribute("aria-label", "Открыть меню");
            burger.classList.remove("burger--active");
            menu.classList.remove("menu--active");
            enableScroll();
        });
    });
})();
