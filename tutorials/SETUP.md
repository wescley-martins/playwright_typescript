# _Setup_

1. Create a directory for the project:

```
    mkdir playwright_typescript
```

2. Navigate to the newly created directory:

```
    cd playwright_typescript
```

3. Run the command below to install the Playwright framework:

```
    yarn create playwright
```

4. Select the following options:
    * Language: TypeScript
    * Tests folder: tests
    * Add GitHub Actions Workflow: Yes
    * Install Browsers: Yes

5. After the installation is complete, the following commands will be displayed in the terminal:

```
    Inside that directory, you can run several commands:

        npx playwright test
            # Runs the end-to-end tests.

        npx playwright test --ui
            # Starts the interactive UI mode.

        npx playwright test --project=chromium
            # Runs the tests only on Desktop Chrome.

        npx playwright test example
            # Runs the tests in a specific file.

        npx playwright test --debug
            # Runs the tests in debug mode.

        npx playwright codegen
            # Auto generate tests with Codegen.

        We suggest that you begin by typing:

            # npx playwright test
```

6. Run all tests 

```
    yarn playwright test
```

7. After the test execution, open the test report using the command below:

```
    yarn playwright show-report
```