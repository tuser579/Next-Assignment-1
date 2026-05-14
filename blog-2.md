# 4 Pillars of OOP in TypeScript — How They Tame Complex Projects

## Introduction
That is exactly what the **four pillars of OOP** (Object-Oriented Programming) do for large TypeScript projects. They turn spaghetti code into clean, manageable architecture.

## 1. Encapsulation — Hiding the Mess Inside
## Without Encapsulation 

```typescript
class BankAccount {
    balance: number = 0;  // Anyone can change this directly
}

const account = new BankAccount();
account.balance = -1000;  //  No one stops this — broken logic

With Encapsulation (Clean)
class BankAccount {
    private balance: number = 0;  // Hidden from outside
    
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount();
account.deposit(500);
// account.balance = -1000;  Error! Can't access private property
```

## 2. Abstraction — Hiding Complexity, Showing Simplicity
What it means: Show only essential features. Hide complicated background work.

Why it reduces complexity: Users of your code don't get overwhelmed. They see a simple remote control, not the wiring inside.

Real Example: Payment System

// Abstract class — blueprint with rules
```typescript
abstract class Payment {
    abstract pay(amount: number): void;  // Child must implement this
    
    logTransaction(amount: number) {     // Shared helper
        console.log(`Processing payment of $${amount}`);
    }
}
```

## 3. Inheritance — Reusing Code Without Copy-Paste
What it means: A child class gets all properties and methods from a parent class, then adds its own.

Why it reduces complexity: No more duplicate code. Change in one place = change everywhere.

Without Inheritance (Copy-paste nightmare)
```typescript
class Admin {
    name: string;
    email: string;
    permissions: string[] = [];
    login() { console.log(`${this.name} logged in`); }
}

class Editor {
    name: string;
    email: string;
    canEdit: boolean = true;
    login() { console.log(`${this.name} logged in`); }  // Duplicate!
}

class Viewer {
    name: string;
    email: string;
    canView: boolean = true;
    login() { console.log(`${this.name} logged in`); }  // Duplicate again!
}
// 3 copies of name, email, login!
```

## 4. Polymorphism — One Interface, Many Behaviors
What it means: The same method name does different things depending on the object.

Why it reduces complexity: You write generic code that works with many types. No need for giant if-else chains.

Without Polymorphism (Spaghetti)
```typescript
function makeSound(animal: any) {
    if (animal.type === "dog") {
        console.log("Bark!");
    } else if (animal.type === "cat") {
        console.log("Meow!");
    } else if (animal.type === "cow") {
        console.log("Moo!");
    }
    // Every new animal = new if condition 
}
```

## Conclusion:
The four pillars are your defense:

Encapsulation protects your data

Abstraction simplifies your interfaces

Inheritance removes duplicate code

Polymorphism makes your code flexible