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

    async hmLogin (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
        await this.btnItem.click();
        await expect(browser.url("https://www.saucedemo.com/inventory-item.html?id=4"));
        await this.btnAdd1.click();
        await expect(this.cartBadge).isExisting;
        await this.btnHm.click();
        await this.btnReset.click();
        await this.btnAllItems.click();
        await expect(browser.url("https://www.saucedemo.com/inventory-item.html?id=4"));
        await this.btnHm.click();
        await this.btnLogout.click();
        await expect(browser.url("https://www.saucedemo.com/"));
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
        await this.btnHm.click();
        await this.btnAbout.click();
        await expect(browser.url("https://saucelabs.com/"))
    }

    async cartLogin(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
        await this.btnAdd2.click();
        await expect(this.cartBadge).toHaveText([expect.stringContaining("1")]);
        await this.btnAdd3.click();
        await expect(this.cartBadge).toHaveText([expect.stringContaining("2")]);
        await this.btnRmv.click();
        await expect(this.cartBadge).toHaveText([expect.stringContaining("1")]);
        await this.btnCart.click();
        await expect(browser.url("https://www.saucedemo.com/cart.html"));
        await this.btnContinue.click()
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
        await this.btnCart.click();
        await expect(browser.url("https://www.saucedemo.com/cart.html"));
        await this.btnCheckout.click();
        await expect(browser.url("https://www.saucedemo.com/checkout-step-one.html"))
    }


   
  
    open () {
        return super.open('login');
    }
}

export default new LogicPage();
