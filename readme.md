
# 🤬 **Fuck-It Transformer** 🤬

Tired of writing `as any` or typing `any` like a responsible developer? Wish you could just say "fuck it" and let the TypeScript compiler stop bothering you? Well, now you can! Meet the **Fuck-It Transformer**, the solution for when you're just DONE with typing constraints. 🏴‍☠️

## What is it?

The **Fuck-It Transformer** is your new best friend. It lets you declare variables in TypeScript like this:

```typescript
let x fuck it = 42
```

And TypeScript will magically understand that you actually meant:

```typescript
let x: any = 42;
```

Because, really, who has time for strict types when you're in the middle of shipping bugs... I mean, features?

## Why do I need this?

- **Freedom**: Are you sick of TypeScript telling you what types to use? Show it who's boss with `fuck it`.
- **Productivity**: Spend less time figuring out types and more time shipping "working" code.
- **Inner Peace**: Experience a zen-like calmness knowing that every type error can now be fixed with just two words: *fuck it*.

## Installation

You didn’t think I’d make this difficult, did you? Just install it like any other NPM package, and don’t worry — we even include the magic sauce to make **ts-patch** work automatically for you. No manual setup needed, because **fuck it**, we’ve got you covered.

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

That’s it! It patches TypeScript automatically. You don’t need to lift a finger (or configure a config file). We do it all for you in a truly *fuck it* style. 🙌

## Usage

Once installed, you can start declaring variables with a brand-new, cathartic syntax:

```typescript
let myVariable fuck it = "Who cares about types?";
// TypeScript translates this to:
// let myVariable: any = "Who cares about types?";
```

### In `tsconfig.json`

Add the magic transformer to your TypeScript project like so:

```json
{
  "compilerOptions": {
    "plugins": [
      { "transform": "fuck-it-transformer/dist/transformer.js" }
    ]
  }
}
```

This tells TypeScript to run our *fuck it* transformer every time you compile. And don’t worry, we’re not judging your choice of using `any`. We all need a break sometimes.

## How does it work?

It’s like black magic, but with less ritual sacrifice. We've written a TypeScript transformer that looks for variables where you’ve used the sacred words `fuck it` and replaces them with `any`. 🧙‍♂️✨

So, the next time TypeScript throws an error, you can just throw your hands up and declare:

```typescript
fuck it.
```

Because sometimes, strict typing is just a little too much to handle, and you deserve to take the easy way out. Go ahead, you’ve earned it.

## But what about strict mode? 😳

Ah, yes, *strict mode*. If you’re using strict mode, then **this transformer is probably not for you**... unless you’re ready to embrace chaos and abandon all hope for type safety. If you are... **fuck it**.

## How to uninstall

If you ever feel guilty about your life choices and want to return to the land of type safety, just uninstall the package like this:

```bash
npm uninstall fuck-it-transformer
```

But we all know you’ll be back. You can’t escape the pull of **fuck it**.

## Contributing

Want to make this even better? Feel free to contribute! Add new types like `who cares`, `meh`, or `whatever floats your boat`. Let’s embrace the full spectrum of developer frustration.
