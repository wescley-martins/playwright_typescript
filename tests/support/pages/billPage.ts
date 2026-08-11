import { Locator, Page } from "@playwright/test";
import { BillModel } from "../../models/bill.model";

export class BillPage {

    readonly billField: Locator
    readonly billSaveButton: Locator
    readonly successAlert: Locator

    constructor(page:Page) {
        this.billField = page.locator('#nome')
        this.billSaveButton = page.getByRole('button', { name: 'Salvar'})
        this.successAlert = page.getByRole('alert')
    }

    async createBill(billName: string) {
        const billModel: BillModel = {
            name: billName
        }

        await this.billField.fill(billModel.name)
        await this.billSaveButton.click()
    }
}