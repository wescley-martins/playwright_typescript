export const validTransaction = [
    {
        tipo: 'Despesa',
        data_transacao: '24/08/2026',
        data_pagamento: '01/10/2026',
        descricao: 'Validação Automatizada',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: '1500.00',
        status: 'Pendente'
    },
    {
        tipo: 'Receita',
        data_transacao: '24/08/2026',
        data_pagamento: '24/08/2026',
        descricao: 'Validação Automatizada',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: '5500.00',
        status: 'Pago'
    }

]

export const transactionValidateRules = [
    {
        field: 'Transaction Date',
        tipo: 'Receita',
        data_transacao: '',
        data_pagamento: '12/11/2024',
        descricao: 'Validação Automatizada',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: '1500.00',
        status: 'Pago',
        expectMessage: 'Data da Movimentação é obrigatório'
    },
    {
        field: 'Payment Date',
        tipo: 'Receita',
        data_transacao: '01/10/2024',
        data_pagamento: '',
        descricao: 'Validação Automatizada',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: '1500.00',
        status: 'Pago',
        expectMessage: 'Data do pagamento é obrigatório'
    },
    {
        field: 'Description',
        tipo: 'Receita',
        data_transacao: '01/10/2024',
        data_pagamento: '12/11/2024',
        descricao: '',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: '1500.00',
        status: 'Pago',
        expectMessage: 'Descrição é obrigatório'
    },
    {
        field: 'Interested',
        tipo: 'Receita',
        data_transacao: '01/10/2024',
        data_pagamento: '12/11/2024',
        descricao: 'Validação Automatizada',
        interessado: '',
        conta: 'Transaction validate rules',
        valor: '1500.00',
        status: 'Pago',
        expectMessage: 'Interessado é obrigatório'
    },
    {
        field: 'Amount Type',
        tipo: 'Receita',
        data_transacao: '01/10/2024',
        data_pagamento: '12/11/2024',
        descricao: 'Validação Automatizada',
        interessado: 'Wescley',
        conta: 'Transaction validate rules',
        valor: 'Teste',
        status: 'Pago',
        expectMessage: 'Valor deve ser um número'
    }
]