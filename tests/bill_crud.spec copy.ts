import { expect, test } from "@playwright/test";
import { LoginPage } from "./support/pages/loginPage";
import { NavBar } from "./support/pages/components/navBar";
import { BillPage } from "./support/pages/billPage";
import { deleteBill } from "./support/helpers/helpers";

test.describe('Bill CRUD operations', () => {

    test.only('Should create a new bill', async ({ page, request }) => {
        const loginPage = new LoginPage(page)
        await loginPage.login()
        const navBarPage = new NavBar(page)
        await navBarPage.addBill()
        const billPage = new BillPage(page)
        await billPage.createBill('Teste')
        await expect(billPage.successAlert).toHaveText('Conta adicionada com sucesso!')
        await deleteBill(request, 'Teste')
    })
})