import { Locator, Page } from '@playwright/test'

export class LoginPage {

    readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#email')
        this.password = page.locator('#senha')
        this.loginButton = page.locator('css=button >> text=Entrar')
    }

    async login() {
        await this.page.goto('/')
        await this.email.fill('wescleymartins02@outlook.com')
        await this.password.fill('1234@')
        await this.loginButton.click()

    }

}

