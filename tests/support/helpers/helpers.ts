import { APIRequestContext, expect } from "@playwright/test";
import { LoginModel } from "../../models/login.model";
import dotenv from 'dotenv'
import { BillModel } from "../../models/bill.model";

dotenv.config({ path: './.env' })

async function getToken(request: APIRequestContext) {

    const login: LoginModel = {
        email: process.env.USER_EMAIL!,
        senha: process.env.USER_PASSWORD!
    }

    const token = await request.post(process.env.BASE_REST_URL!.concat('/signin'), { data: login })
    const requestBody = JSON.parse(await token.text())

    return requestBody.token;
}

async function getBills(request: APIRequestContext) {
    const token = await getToken(request)

    const allBills = await request.get(process.env.BASE_REST_URL!.concat('/contas'), {
        headers: {
            Authorization: `JWT ${token}`
        }
    })

    const bills = JSON.parse(await allBills.text())

    return bills;
}

async function findBillIdName(request: APIRequestContext, billName: string) {
    const bills = await getBills(request)
    let billId;

    for (const data of bills) {
        if (data.nome == billName) {
            billId = data.id
        }
    }

    return billId;
}

export async function deleteBillByName(request: APIRequestContext, billName: string) {
    const token = await getToken(request)
    const billId = await findBillIdName(request, billName)

    await request.delete(process.env.BASE_REST_URL!.concat(`/contas/${billId}`), {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}

export async function createBill(request: APIRequestContext, billName: string) {
    const token = await getToken(request)
    const bill: BillModel = {
        nome: billName
    }

    const target = await request.post(process.env.BASE_REST_URL!.concat('/contas/'), {
        data: bill,

        headers: {
            Authorization: `JWT ${token}`
        }
    })

    expect(target.status()).toBe(201)
}

//Transactions
async function getTransaction(request: APIRequestContext) {
    const token = await getToken(request)

    const getTransactions = await request.get(process.env.BASE_REST_URL!.concat('/transacoes'), {
        headers: {
            Authorization: `JWT ${token}`
        }
    })

    const transactions = JSON.parse(await getTransactions.text())
    return transactions
}

async function findTransactionIdByDescription(request: APIRequestContext, transactionDescription: string) {
    const transactions = await getTransaction(request)
    let transactionId

    for (const data of transactions) {
        if (data.descricao == transactionDescription) {
            transactionId = data.id
        }
    }

    console.log('Id da transação criada ' + transactionId)
    console.log('Descrição da transação criada ' + transactionDescription)

    return transactionId
}

export async function deleteTransaction(request: APIRequestContext, transactionDescription: string) {
    const token = await getToken(request)
    const transactionId = await findTransactionIdByDescription(request, transactionDescription)

    const target = await request.delete(process.env.BASE_REST_URL!.concat(`/transacoes/${transactionId}`), {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}