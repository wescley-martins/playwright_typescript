import { Locator, Page } from '@playwright/test'
import dotenv from 'dotenv'
import { LoginModel } from '../../models/login.model'

dotenv.config({ path: './.env' })

export class LoginPage {

    readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#email'),
        this.password = page.locator('#senha')
        this.loginButton = page.locator('css=button >> text=Entrar')
    }

    async login() {

        const loginModel: LoginModel = {
            email: process.env.USER_EMAIL!,
            senha: process.env.USER_PASSWORD!
        }

        await this.page.goto('/')
        await this.email.fill(loginModel.email)
        await this.password.fill(loginModel.senha)
        await this.loginButton.click()
    }
}

