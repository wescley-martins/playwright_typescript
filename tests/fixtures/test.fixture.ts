import { test as base } from '@playwright/test'
import { LoginPage } from '../support/pages/loginPage'
import { NavBar } from '../support/pages/components/navBar'
import { BillPage } from '../support/pages/billPage'
import { faker } from '@faker-js/faker'
import { deleteBill, createBills, deleteTransaction } from '../support/helpers/helpers'
import { Alert } from '../support/pages/components/alert'
import { TransactionsPage } from '../support/pages/transactionsPage'

type testFixtures = {
    loginPage: LoginPage
    navBar: NavBar
    alert: Alert
    billPage: BillPage
    billName: string
    updatedBillName: string
    deleteBillByName: void
    createBill: void
    deleteUpdatedBill: void
    transactionPage: TransactionsPage
    transactionDescription: string
    deleteTransaction: void

}

export const test = base.extend<testFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    navBar: async ({ page }, use) => {
        await use(new NavBar(page))
    },

    alert: async ({ page }, use) => {
        await use(new Alert(page))
    },

    billPage: async ({ page }, use) => {
        await use(new BillPage(page))
    },

    billName: async ({ }, use) => {
        const billName = faker.word.words()
        await use(billName)
    },

    transactionPage: async ({ page }, use) => {
        await use(new TransactionsPage(page))
    },

    updatedBillName: async ({ }, use) => {
        const billName = faker.word.words()
        await use(billName)
    },

    deleteBillByName: async ({ request, billName }, use) => {
        await use()
        await deleteBill(request, billName)
    },

    deleteUpdatedBill: async ({ request, updatedBillName }, use) => {
        await use()
        await deleteBill(request, updatedBillName)
    },

    createBill: async ({ request, billName }, use) => {
        await createBills(request, billName)
        await use()
    },

    transactionDescription: async ({ }, use) => {
        const description = 'Validate'.concat(faker.word.words())
        await use(description)
    },

    deleteTransaction: async ({ request, transactionDescription }, use) => {
        await use()
        await deleteTransaction(request, transactionDescription)
    }
})

export { expect } from '@playwright/test'