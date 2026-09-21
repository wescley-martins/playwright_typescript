import { test as base } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { deleteBillByName, createBill, deleteTransaction } from '../support/helpers/helpers'

type DataFixtures = {
    billName: string
    updatedBillName: string
    transactionDescription: string
    deleteBillByName: void
    createBill: void
    deleteTransaction: void
    deleteUpdatedBill: void
}

export const dataFixture = base.extend<DataFixtures>({
    billName: async ({ }, use) => {
        const name = faker.word.words();
        await use(name);
    }, 

    updatedBillName: async ({ }, use) => {
        const updatedName = faker.word.words();
        await use(updatedName);
    },

    transactionDescription: async ({ }, use) => {
        const description = 'Validate'.concat(faker.word.words())
        await use(description)
    },

    deleteBillByName: async ({ request, billName }, use) => {
        await use();
        await deleteBillByName(request, billName);
    },

    deleteUpdatedBill: async ({ request, updatedBillName }, use) => {
        await use()
        await deleteBillByName(request, updatedBillName)
    },

    createBill: async({ request, billName}, use) => {
        await createBill(request, billName);
        await use();
    },

    deleteTransaction: async ({ request, transactionDescription }, use) => {
        await use();
        await deleteTransaction(request, transactionDescription);
    }
})