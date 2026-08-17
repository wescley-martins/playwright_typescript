import { Locator, Page } from "@playwright/test";

export class Alert {

    readonly alert: Locator

    constructor(page: Page) {
        this.alert = page.getByRole('alert')
    }

}