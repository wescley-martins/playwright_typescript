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
        if (data.nome == billName){
            billId = data.id
        }
    }

    return billId;
}

export async function deleteBill(request: APIRequestContext, billName: string) {
    const token = await getToken(request)
    const billId = await findBillIdName(request, billName)

    await request.delete(process.env.BASE_REST_URL!.concat(`/contas/${billId}`), {
        headers: {
            Authorization: `JWT ${token}`
        }
    })
}

export async function createBills(request: APIRequestContext, billName: string) {
    const token = await getToken(request)
    const bill: BillModel = {
        name: billName
    } 

    const target = await request.post(process.env.BASE_REST_URL!.concat('/contas'), {
        data: bill,

        headers: {
            Authorization: `JWT ${token}`
        }
    })

    expect(target.status()).toBe(201)
}