import { test, expect } from './fixtures/test.fixture'

test.describe('Bill CRUD Operations', () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('/')
    })

    test('Should create a new bill', async ({ billName, navBar, billPage, deleteBillByName }) => {
        await navBar.addBill()
        await billPage.createBill(billName)
        await expect(billPage.successAlert).toHaveText('Conta adicionada com sucesso!')
    })

    test('Should retrieve a bill', async ({ createBill, billName, page, navBar, billPage, deleteBillByName }) => {
        await navBar.listBill()
        await billPage.expectBillToBeVisible(page, billName)
    })

    test('Should update a bill', async ({ createBill, navBar, billPage, page, billName, updatedBillName, deleteUpdatedBill }) => {
        await navBar.listBill()
        await billPage.editBillButton(page, billName)
        await billPage.editBill(updatedBillName)
        await expect(billPage.successAlert).toHaveText('Conta alterada com sucesso!')
    })

    test('Should delete a bill successfully', async ({ createBill, navBar, billPage, page, billName }) => {
        await navBar.listBill()
        await billPage.deleteBillButton(page, billName)
        await expect(billPage.successAlert).toHaveText('Conta removida com sucesso!')
    })
})