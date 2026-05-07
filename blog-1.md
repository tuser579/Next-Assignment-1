# Title: 
Why `any` is dangerous and `unknown` is safe?

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