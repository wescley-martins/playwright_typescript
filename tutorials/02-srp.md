#_Single Responsibility Principle_

**Definition**

The **Single Responsibility Principle (SRP)** states that a class should have only one reason to change. In other words, each class should be responsible for a single part of the application's functionality.


**Interview Answer**

The Single Responsibility Principle (SRP) means that every class shoud have only one responsibility.

**How to apply it in Test Automation**

In Test Automation, we apply this by keeping page objects responsible only for page interations, while utility classes handle logging, data generation, configuration, or API calls.

**Result**

As a result this makes the framework easier to maintain and reduces the impact of future changes.