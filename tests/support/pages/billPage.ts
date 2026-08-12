import { Locator, Page, expect } from "@playwright/test";
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
            nome: billName
        }

        await this.billField.fill(billModel.nome)
        await this.billSaveButton.click()
    }

    async expectBillToBeVisible(page: Page, billName: string) {
        const target = page.locator('#tabelaContas > tbody > tr', {hasText: billName})
        await expect(target).toBeVisible()
    }

    async editBillButton(page: Page,billName: string) {
        const editButton =  page.locator(`xpath=//*[contains(text(), "${billName}")]/..//a/span[@class="glyphicon glyphicon-edit"]`)
        await editButton.click()
    }

    async deleteBillButton(page: Page,billName: string) {
        const deleteButton = page.locator(`xpath=//*[contains(text(), "${billName}")]/..//a/span[@class="glyphicon glyphicon-remove-circle"]`)
        await deleteButton.click()
    }

    async editBill(updatedBillName: string) {
        await this.billField.clear()
        await this.createBill(updatedBillName)
    }
}