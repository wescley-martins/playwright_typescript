import { Page } from "@playwright/test";

export class TransactionsPage {

    readonly transactionDropdown
    readonly transactionDateField
    readonly paymentdateField
    readonly descriptionField
    readonly InterestedField
    readonly amountField
    readonly accountDropdown
    readonly situationRadioButton

    constructor(page: Page) {

        this.transactionDropdown = page.getByRole('combobox', { name: 'Tipo da Movimentação' })
        this.transactionDateField = page.getByRole('textbox', { name: 'Data da Movimentação' })
        this.paymentdateField = page.getByRole('textbox', { name: 'Data do Pagamento' })
        this.descriptionField = page.getByRole('textbox', { name: 'Descrição' })
        this.InterestedField = page.getByRole('textbox', { name: 'Interessado' })
        this.amountField = page.getByRole('textbox', { name: 'Valor' })
        this.accountDropdown = page.getByRole('combobox', { name: 'Conta' })
        this.situationRadioButton = page.getByRole('radio', { name: 'Situação'})
    }
}