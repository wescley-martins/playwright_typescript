# _Test Data_

**Definition**

Test data is a set of input values, variables, files, or configurations used to evaluate the functionality, reliability, and performance of a software application.

**Interview Answer**

Depending on the project, I prepare the test data using JSON files, Faker for dynamic values, environment variables for sensitive information, or APIs to create, update and clean up test data before and after test execution.

**Result**

As a result, this helps keep the tests independent and repeatable.

**Environment Variables**

Run the command below to install **dotenv**:

```
    yarn add -D dotenv
```

## URL_BASE

1. Create a .env file:

    BASE_URL=https://www.example.com

2. Load the environment variables in playwright.config.ts

```typescript

    import { defineConfig } from '@playwright/test';
    import dotenv from 'dotenv';

    dotenv.config({path: './.env'});

    export default defineConfig({
        use: {
            baseURL: process.env.BASE_URL,
        },
    });
```

3. After that, you can navigate using the configured baseURL by calling:

```typescript

    await page.goto('/')
```