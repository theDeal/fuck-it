# 🤬 **Fuck-It Transformer** 🤬

Tired of writing `as any` or typing `any` like a responsible developer? Wish you could just say "fuck it" and let the TypeScript compiler stop bothering you? Well, now you can! Meet the **Fuck-It Transformer**, the solution for when you're just DONE with typing constraints. 🏴‍☠️

## What is it?

The **Fuck-It Transformer** is your new best friend. It lets you declare variables in TypeScript with a cathartic syntax like this:

```typescript
let x FUCK IT = 42;
```

And TypeScript will understand that you actually meant:

```typescript
let x: any = 42;
```

Because, really, who has time for strict types when you're shipping features (or bugs)?

## Why do I need this?

- **Freedom**: Are you tired of TypeScript telling you what types to use? Show it who's boss with `FUCK IT`.
- **Productivity**: Spend less time figuring out types and more time writing code that "works."
- **Inner Peace**: Experience a zen-like calm knowing that every type error can now be fixed with just two words: *fuck it*.

## Installation

It’s simple. Install it like any other NPM package. No need to touch your `tsconfig.json` manually—we've automated everything.

### Using NPM:

```bash
npm install fit-transformer
```

### Using Yarn:

```bash
yarn add fit-transformer
```

### Using PNPM:

```bash
pnpm install fit-transformer
```

That’s it! It patches TypeScript automatically using `ts-patch`. No manual setup needed, because **fuck it**, we’ve got you covered.

## Usage

Once installed, you can start declaring variables with a custom, cathartic syntax:

```typescript
let myVariable FUCK IT = "Who cares about types?";
// TypeScript translates this to:
// let myVariable: any = "Who cares about types?";
```

You don’t need to modify your `tsconfig.json`. The transformer is applied automatically, thanks to **ts-patch**.

### Compilation

Compile your TypeScript code like you normally would, and the transformer will take care of the rest:

```bash
tsc
```

### In `tsconfig.json` (Optional)

In case you're interested in manually configuring the transformer for any reason, you can still add it explicitly in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [
      { "transform": "fit-transformer/dist/transformer.js" }
    ]
  }
}
```

## How does it work?

This transformer works by replacing any instance of `FUCK IT` in a variable declaration with `any`. We've written a custom TypeScript transformer that looks for this magical phrase and rewrites it to `any`, so you don't have to worry about those pesky type constraints.

```typescript
// Write this:
let a FUCK IT = 123;

// And it gets transformed into:
let a: any = 123;
```

It’s that simple. 🧙‍♂️✨

## But what about strict mode? 😳

Strict mode? If you’re using strict mode, then **this transformer is probably not for you**... unless you’re ready to fully embrace chaos and let go of type safety. If you’re truly ready for that life, then **fuck it**.

## How to uninstall

If you ever feel the need to return to the safe, responsible world of type safety, just uninstall the package:

```bash
npm uninstall fit-transformer
```

But we both know you'll be back. You can't resist the sweet, sweet freedom of **fuck it**.

## Contributing

Want to improve this masterpiece? Feel free to contribute! Add new custom types like `who cares`, `meh`, or `whatever floats your boat`. Let’s build a full spectrum of developer frustration, together.
