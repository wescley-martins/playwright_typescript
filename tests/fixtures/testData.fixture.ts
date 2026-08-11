import { test as base, request } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { deleteBill, createBills } from '../support/helpers/helpers'

type TestDataFixture = {
    billName: string,
    deleteBillByName: void,
    createBill: void
}

export const test = base.extend<TestDataFixture>({
    billName: async ({ }, use) => {
        const billName = faker.word.words()
        await use(billName)
    },

    deleteBillByName: async ({ request, billName }, use) => {
        await use()
        await deleteBill(request, billName)
    },

    createBill: async ({request, billName}, use) => {
        await createBills(request, billName)
        await use()
    }
})