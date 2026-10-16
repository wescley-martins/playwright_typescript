import { expect, test } from "./fixtures/index";
import { validTransaction, transactionValidateRules } from "./data/transactionData";

test.describe('Transaction Operations', () => {

    test.beforeEach('login', async ({ page }) => {
        await page.goto('/')
    })

    for (const data of transactionValidateRules) {
        test(`Should validate transaction ${data.field} rules`, async ({ navBar, transactionPage, alert }) => {
            await navBar.createTransactions.click()
            await transactionPage.createTransactionForValidateRules(data)
            await expect(alert.alert).toHaveText(data.expectMessage)
        })
    }

    for (const data of validTransaction) {
        test(`Should create a valid ${data.tipo} transaction`, async ({ navBar, transactionPage, transactionDescription, alert, deleteTransaction }) => {
            await navBar.createTransactions.click()
            await transactionPage.createTransaction(data, transactionDescription)
            await expect(alert.alert).toHaveText('Movimentação adicionada com sucesso!')
        })
    }
})