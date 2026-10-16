import { Locator, Page } from "@playwright/test"

export class MonthlyReportPage {

    readonly monthDropdown: Locator
    readonly yearDropdown: Locator
    readonly generateReportButton: Locator

    constructor(page: Page) {
        this.monthDropdown = page.locator('#mes')
        this.yearDropdown = page.locator('#ano')
        this.generateReportButton = page.getByRole('button', { name: 'Buscar' })
    }

    async searchTransactions(month: string, year: string) {
        await this.monthDropdown.selectOption(month)
        await this.yearDropdown.selectOption(year)
        await this.generateReportButton.click()
    }

    async deleteTransaction(page: Page, description: string) {
        const deleteButton = page.locator('tbody tr')
        .filter({ hasText: description })
        .locator('a')
        await deleteButton.click()
    }
}