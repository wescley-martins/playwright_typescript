import { test as base } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { deleteBillByName, createBill, deleteTransaction, createTransaction } from '../support/helpers/helpers'
import { TransactionModel } from '../models/transaction.model'
import { transactions } from '../data/monthlyReportData'

type DataFixtures = {
    billName: string
    updatedBillName: string
    transactionDescription: string
    deleteBillByName: void
    createBill: void
    deleteTransaction: void
    createTransaction: void
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

    createTransaction: async ({ request, transactionDescription }, use) => {
        const transaction: TransactionModel = {
            ...transactions,
            descricao: transactionDescription
        }
        await createTransaction(request, transaction);
        await use();
    },

    deleteTransaction: async ({ request, transactionDescription }, use) => {
        await use();
        await deleteTransaction(request, transactionDescription);
    }
})