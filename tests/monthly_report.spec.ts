import { transactionsDate } from './data/monthlyReportData'
import { expect, test } from './fixtures/index'

test('Delete a transaction from the monthly report', async ({ page, monthlyReportPage, createTransaction, transactionDescription, alert }) => {

    await page.goto('/extrato')
    await monthlyReportPage.searchTransactions(transactionsDate.month, transactionsDate.year)
    await monthlyReportPage.deleteTransaction(page, transactionDescription)
    await expect(alert.alert).toHaveText('Movimentação removida com sucesso!')

})
