export const validTransaction = [
    {
        transactionType: 'Despesa',
        transacttionDate: '24/08/2026',
        paymentDate: '01/10/2026',
        description: 'Validação Automatizada',
        interested: 'Wescley',
        amount: '1500.00',
        status: 'Pendente'
    },
    {
        transactionType: 'Receita',
        transacttionDate: '24/08/2026',
        paymentDate: '24/08/2026',
        description: 'Validação Automatizada',
        interested: 'Wescley',
        amount: '5500.00',
        status: 'Pago'
    }

]

export const transactionValidateRules = [
    {
        field: 'Transaction Date',
        transactionType: 'Receita',
        transacttionDate: '',
        paymentDate: '12/11/2024',
        description: 'Validação Automatizada',
        interested: 'Wescley',
        amount: '1500.00',
        status: 'Pago',
        expectMessage: 'Data da Movimentação é obrigatório'
    },
    {
        field: 'Payment Date',
        transactionType: 'Receita',
        transacttionDate: '01/10/2024',
        paymentDate: '',
        description: 'Validação Automatizada',
        interested: 'Wescley',
        amount: '1500.00',
        status: 'Pago',
        expectMessage: 'Data do pagamento é obrigatório'
    },
    {
        field: 'Description',
        transactionType: 'Receita',
        transacttionDate: '01/10/2024',
        paymentDate: '12/11/2024',
        description: '',
        interested: 'Wescley',
        amount: '1500.00',
        status: 'Pago',
        expectMessage: 'Descrição é obrigatório'
    },
    {
        field: 'Interested',
        transactionType: 'Receita',
        transacttionDate: '01/10/2024',
        paymentDate: '12/11/2024',
        description: 'Validação Automatizada',
        interested: '',
        amount: '1500.00',
        status: 'Pago',
        expectMessage: 'Interessado é obrigatório'
    },
    {
        field: 'Amount Type',
        transactionType: 'Receita',
        transacttionDate: '01/10/2024',
        paymentDate: '12/11/2024',
        description: 'Validação Automatizada',
        interested: 'Wescley',
        amount: 'Teste',
        status: 'Pago',
        expectMessage: 'Valor deve ser um número'
    }
]