# 🪲 Bestiary

>*"Every bug defeated becomes another lesson remembered."*

---

The Bestiary records every bug encountered while building Nurgle's Garden.

Every bug defeated makes the fortress stronger.

---

# 🐛 Bug 001

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

---

# 🐛 Bug 002 — The Missing Console

## Problem

The JavaScript console message did not appear.

## Investigation

JavaScript was correctly linked.

The browser loaded `app.js`.

The issue was that Developer Tools were opened inside VS Code instead of the web browser.

## Solution

Open the website in the browser.

Press **F12** inside the browser.

Select the **Console** tab.

## Lesson Learned

VS Code is where code is written.

The browser is where JavaScript runs.

---

### 🐛 Bug #003 — The Mysterious Git Editor

Problem

Git opened a strange text editor instead of asking for a commit message.

Cause

The commit was started without using the `-m` flag.

Git launched Vim to allow the commit message to be written manually.

Solution

Either:

git commit -m "Your message"

or

Learn the basic Vim commands.

Lesson Learned

Git isn't broken.

It was waiting for a commit message.