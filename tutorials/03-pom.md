# _Page Object Model_

**Definition**

The **Page Object Model (POM)** is a design pattern in test automation that creates an object respository for web UI elements.

**Interview Answer**

I use the **Page Object Model (POM)** to separate the page interactions from the test logic.
Each page contains its locators and methods, while the test focuses only on the business scenario.

**Result**

As a result its improves readability reduces code duplication and makes maintenance easier when the UI changes.

```diff
  def escopo_existente():
      pass

+ # Esta linha acabou de ser digitada
+ novo_codigo = "Digitando..."
```
