import { Locator, Page } from "@playwright/test";

export class NavBar {

    readonly billDropdown: Locator
    readonly addBillOption: Locator
    readonly listBillOption: Locator
    readonly createTransactions: Locator

    constructor(page: Page) {
        this.billDropdown = page.getByRole('button', { name: 'Contas' })
        this.addBillOption = page.getByRole('link', { name: 'Adicionar' })
        this.listBillOption = page.getByRole('link', { name: 'Listar' })
        this.createTransactions = page.getByRole('link', { name: 'Criar Movimentação' })
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