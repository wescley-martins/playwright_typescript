# _Flaky Tests_

**Definition**

A flaky test is a test that sometimes passes and sometimes fails without any changes to the application or test code. The resulta is inconsistent and usually depends on timing, synchronization, test data, environment, or external dependencies.

**Interview Answer**

A flaky test is a test that produces inconsistent results without any changes to the application or test code. In Playwright, I usually investigate flaky tests by first reproducing the failure, then checking synchronization, selectors, test data, and external dependencies. I avoid hard-coded waits and rely on Playwright's auto-waiting and web-first assertions. I also make sure tests are isolated and use stable selectors. If the test depends on an external service, I may mock the API when approriate. Finally, I use Playwright's trace viewer, screenshots, and other test artifacts to identify the root cause rather than simply adding retries.