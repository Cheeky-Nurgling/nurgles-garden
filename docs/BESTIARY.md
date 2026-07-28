# 🪲 Bestiary

The Bestiary records every bug encountered while building Nurgle's Garden.

Every bug defeated makes the fortress stronger.

---

# Bug 001

## Name

The Missing Backticks

## Symptoms

The Markdown preview looked broken.

Most of the document appeared as one giant code block.

## Cause

A Markdown code fence was opened but never closed.

Incorrect:

```markdown
```html

<h1>Hello</h1>
```

Correct:

````markdown
```html
<h1>Hello</h1>
```