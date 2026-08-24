import { Page } from "@playwright/test";
import { TransactionModel } from "../../models/transaction.model";

export class TransactionsPage {

    readonly transactionDropdown
    readonly transactionDateField
    readonly paymentdateField
    readonly descriptionField
    readonly InterestedField
    readonly amountField
    readonly accountDropdown
    readonly paidStatus
    readonly pendingStatus
    readonly saveTransactionButton
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.transactionDropdown = page.getByRole('combobox', { name: 'Tipo da Movimentação' })
        this.transactionDateField = page.getByRole('textbox', { name: 'Data da Movimentação' })
        this.paymentdateField = page.getByRole('textbox', { name: 'Data do Pagamento' })
        this.descriptionField = page.getByRole('textbox', { name: 'Descrição' })
        this.InterestedField = page.getByRole('textbox', { name: 'Interessado' })
        this.amountField = page.getByRole('textbox', { name: 'Valor' })
        this.accountDropdown = page.getByRole('combobox', { name: 'Conta' })
        this.paidStatus = page.getByRole('radio', { name: 'Pago' })
        this.pendingStatus = page.getByRole('radio', { name: 'Pendente' })
        this.saveTransactionButton = page.getByRole('button', { name: 'Salvar' })
    }

    async createTransactionForValidateRules(transactionModel: TransactionModel) {
        await this.transactionDropdown.selectOption(transactionModel.transactionType)
        await this.transactionDateField.fill(transactionModel.transacttionDate)
        await this.paymentdateField.fill(transactionModel.paymentDate)
        await this.descriptionField.fill(transactionModel.description)
        await this.InterestedField.fill(transactionModel.interested)
        await this.amountField.fill(transactionModel.amount)
        await this.accountDropdown.selectOption('Transaction validate rules')
        await this.paidStatus.check()
        await this.saveTransactionButton.click()
    }

    async createTransaction(transactionModel: TransactionModel, description: string) {
        await this.transactionDropdown.selectOption(transactionModel.transactionType)
        await this.transactionDateField.fill(transactionModel.transacttionDate)
        await this.paymentdateField.fill(transactionModel.paymentDate)
        await this.descriptionField.fill(description)
        await this.InterestedField.fill(transactionModel.interested)
        await this.amountField.fill(transactionModel.amount)
        await this.accountDropdown.selectOption('Transaction validate rules')
        await this.page.getByRole('radio', { name: transactionModel.status }).check()
        await this.saveTransactionButton.click()
    }

}