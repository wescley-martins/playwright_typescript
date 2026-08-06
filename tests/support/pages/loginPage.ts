import { Locator, Page } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({path: './.env'})

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
        await this.email.fill(process.env.USER_EMAIL!)
        await this.password.fill(process.env.USER_PASSWORD!)
        await this.loginButton.click()

    }

}

