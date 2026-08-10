# _Playwright Fixtures_

**Definition**

Playwright fixtures are a mechanism used to provide reusable setup and teardown logic for tests. They allow us to create and configure objects, data, or dependencies that tests need, and then automatically make them available to the test.

**Interview Answer**

I used Playwright fixtures to manage reusable test setup and dependencies.For example, I can create a fixture for an authenticated user, a Page Object or dynamic test data. The fixture handles the setup before the test and the cleanup afterward, wich helps keep the test clean, resusable and maintainable.

**Result**

As a result, fixtures reduce code duplication, improve test isalation, and make the test framework easier to maintain.


## _Example_

**Fixture**

```typescript

    import { test as base, Page } from '@playwright/test'
    import { LoginPage } from '../support/pages/loginPage'


    type authFixture = {
        authenticatedLogin: Page
    }

    export const test = base.extend<authFixture>({
        authenticatedLogin: async ({ page }, use) => {
            const loginPage = new LoginPage(page)
            await loginPage.login()
            await use(page)
        }
    })

```

**Using the Fixture**

```typescript

    import { expect } from '@playwright/test'
    import { test } from './fixtures/auth.fixture'


    test('Successfully logs in', async ({ page, authenticatedLogin }) => {
        
        authenticatedLogin
        await expect(page).toHaveTitle('Seu Barriga - Home')
    })

```