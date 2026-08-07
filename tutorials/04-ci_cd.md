# _CI/CD Pipelines_

**Definition**

CI/CD stands for **Continuous Integration and Continuous Delivery or Continuous Deployment**. It is an automated software development practice where code changes are build, tested, and pushed to production automatically or with minimal human effort, helping teams release updates quickly and safety.

**Interview Answer**

I integrated Playwright with GitHub Actions. Whenever code is pushed to the repository, the pipeline installs dependencies, dowloads Playwright browsers, executes the test suite, generates the HTML report, uploads artifacts, and can notify the team about the test status.

**Result**

By integrating Playwright with GitHub Actions, the team received immediate feedback on every code change. Automated test execution reduced manual effort, caught defects earlier, generated reusable test reports, and increased confidence in the release process by validating application quality before deployment.

## GitHub Actions Configuration

**Requirements**

**The project should have environment variables configured using dotenv.**
[For more information, see the](https://github.com/wescley-martins/playwright_typescript/blob/main/tutorials/05-test_data.md)

1. In GitHub Actions, go to **Settings** tab, and select **Secrets**.
2. Add the following environment variables:

```sh
    BASE_URL
    USER_EMAIL
    USER_PASSWORD
```

3. After that, whenever code is pushed to the repository, the pipeline will automatically execute the test suite.