# Title: 1. Why `any` is dangerous and `unknown` is safe?

## Introduction:
TypeScript gives you two ways to handle it:

- `any` means: "I do not care what is inside, let me use it anyway."
- `unknown` means: "I do not know what is inside, so let me check first."

## Body Paragraph

## Why `any` is called a "Type Safety Hole"

When you use `any`, TypeScript stops checking your code. That's like removing all safety nets while walking on a rope.

```typescript
let something: any = "hello";

// TypeScript says nothing — but these will crash your web site
something.toFixed(2);     //  error: "hello".toFixed is not a function
something.missing.name;   //  error: Cannot read property 'name'
something();              //  error: "hello" is not a function

## Why unknown Is Safer
unknown works differently. It says: "I have no idea what this is. You must check before using it."

```typescript
let userData: unknown = JSON.parse(localStorage.getItem("user") || "{}");
console.log(userData.name);  // Error: Object is of type 'unknown'

## How to Use unknown Safely
```typescript
function handleValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());  // Safe — it's a string
    } else if (typeof value === "number") {
        console.log(value.toFixed(2));     // Safe — it's a number
    } else {
        console.log("I don't know this type");
    }
}

## Conclution
Think of any as a rusty old car with no brakes. It might move, but it's dangerous.

Think of unknown as a new car that won't start until you fasten your seatbelt — annoying at first, but it saves your life.
