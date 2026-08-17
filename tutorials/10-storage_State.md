# _Storage State_

**Definition**

Storage State is a Playwright feature that allows you to save and reuse the browser context state, such as authentication cookies, local storage, and session information.

Instead of logging in before every test, you can authenticate once, save the state to a file, and reuse that state in others tests.

**Interview Answer**

I used Playwright's storage state to handle authentication. I created a setup test that performs the login and saves the authenticated browser state into a JSON file. My other tests use this stored state, so they can start directly on the authenticated application.

## _Example_

**setup**

01 - Create an auth.setup.ts file in the tests folder

02 - Implement the login logic:

```typescript

import { test as setup, expect} from './fixtures/test.fixture'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

setup('Authenticated User', async({ loginPage, alert, page }) => {
    await page.goto(process.env.BASE_URL!)
    await loginPage.login()
    await expect(alert.alert).toHaveText('Bem vindo, Wescley!')
    await page.context().storageState({ path: 'playwright/.auth/storageState.json'})
})
```

03 - Configure the storage state in playwright.config.ts:

```typescript

projects: [
    { name: 'setup', testMatch:/.*\.setup\.ts/ },
    
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/storeState.json'
       },

       dependencies: ['setup'],
    },
]
```

**How to remove storage state in a especific test.spec.ts**

Use the following configuration before the test scenarios:

```typescript

test.use({
    storageState: { cookies: [], origins: [] } 
})

```