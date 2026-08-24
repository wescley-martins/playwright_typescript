import { Locator, Page } from "@playwright/test";

export class NavBar {

    readonly billDropdown: Locator
    readonly addBillOption: Locator
    readonly listBillOption: Locator
    readonly createTransactions: Locator

    constructor(page: Page) {
        this.billDropdown = page.locator('a', { hasText: 'Contas' })
        this.addBillOption = page.locator('a', { hasText: 'Adicionar' })
        this.listBillOption = page.locator('a', { hasText: 'Listar' })
        this.createTransactions = page.locator('a', { hasText: 'Criar Movimentação' })
    }

    async addBill() {
        await this.billDropdown.click()
        await this.addBillOption.click()
    }

    async listBill() {
        await this.billDropdown.click()
        await this.listBillOption.click()
    }
}