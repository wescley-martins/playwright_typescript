# _Interface_

**Definition**

Interface is a syntactical contract that defines the "shape" or structure an object must follow.

**Interview Answer**

I use interfaces to define the struture and types of an object. For example, I created a LoginModel interface to represent the data required for a login test. It ensures that every login test data object has an email and password, both as strings.

**Result**

As a result, this gives me type safety and makas the test data more consistent and maintainable.

## _Example_

**Interface**

```typescript
    export interface LoginModel {
        email: string
        password: string
    }
```

**Using the Interface**

```typescript
    async login() {
        const loginModel: LoginModel = {
            email: process.env.USER_EMAIL!,
            password: process.env.USER_PASSWORD!
        }

        await this.page.goto('/')
        await this.email.fill(loginModel.email)
        await this.password.fill(loginModel.password)
        await this.loginButton.click()
    }
```