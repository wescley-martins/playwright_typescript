import { expect } from "@playwright/test";
import { LoginPage } from "./support/pages/loginPage";
import { NavBar } from "./support/pages/components/navBar";
import { BillPage } from "./support/pages/billPage";

import { test } from './fixtures/testData.fixture'

test.describe('Bill CRUD operations', () => {

    test('Should create a new bill', async ({ page, billName, deleteBillByName }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login()
        const navBarPage = new NavBar(page)
        await navBarPage.addBill()
        const billPage = new BillPage(page)
        await billPage.createBill(billName)
        await expect(billPage.successAlert).toHaveText('Conta adicionada com sucesso!')
    })
})