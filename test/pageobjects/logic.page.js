import { $ } from '@wdio/globals';
import Page from './baseURL.js';
import { expect } from '@wdio/globals'

class LogicPage extends Page {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get btnItem () {
        return $('[data-test="item-4-title-link"]');
    }

    get btnAdd1 () {
        return $('[name="add-to-cart"]');
    }

    get btnAdd2 () {
        return $('[name="add-to-cart-sauce-labs-backpack"]')
    }

    get btnAdd3 () {
        return $('[name="add-to-cart-sauce-labs-bike-light"]')
    }

    get btnRmv (){
        return $('[name="remove-sauce-labs-backpack"]')
    }

    get btnHm () {
        return $('.bm-burger-button');
    }

    get btnReset () {
        return $('#reset_sidebar_link');
    }

    get btnAllItems () {
        return $('#inventory_sidebar_link');
    }

    get btnAbout () {
        return $('#about_sidebar_link');
    }

    get btnLogout () {
        return $('#logout_sidebar_link');
    }

    get btnClose () {
        return $('#react-burger-cross-btn');
    }

    get btnCart () {
        return $('.shopping_cart_link')
    }

    get cartBadge () {
        return $('[data-test="shopping-cart-badge"]');
    }

    get btnContinue (){
        return $('[name="continue-shopping"]')
    }

    get btnCheckout () {
        return $('[name="checkout"]')
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
    }

   
  
    open () {
        return super.open('login');
    }
}

export default new LogicPage();
