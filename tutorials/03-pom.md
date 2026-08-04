# _Page Object Model_

**Definition**

The **Page Object Model (POM)** is a design pattern in test automation that creates an object respository for web UI elements.

**Interview Answer**

I use the **Page Object Model (POM)** to separate the page interactions from the test logic.
Each page contains its locators and methods, while the test focuses only on the business scenario.

**Result**

As a result its improves readability reduces code duplication and makes maintenance easier when the UI changes.


**Example**

```typescript
export class LoginPage {

    readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly enterButton: Locator

    constructor(page: Page) {
        this.page = page
        this.email = page.locator('#email')
        this.password = page.locator("#senha")
        this.enterButton = page.locator('css=button >> text=Entrar')
    }
}
```