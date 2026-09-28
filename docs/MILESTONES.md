# 🏆 Milestones

> *"No harvest begins with the final bloom."*

---

## Milestone 001

### 🌿 The Garden Awakens

**Date**

July 30, 2026

**Achievement**

The first JavaScript successfully executed inside the project.

```javascript
console.log("🌿 The Garden awakens...");
```

**Skills Learned**

- Creating JavaScript files
- Linking JavaScript to HTML
- Relative file paths
- Browser Developer Tools
- Console logging

**Why It Matters**

This marks the moment Nurgle's Garden transitioned from a static webpage into an interactive web application.

---

## Milestone 002

### 🌿 The Garden Learns to Listen

**Date**

September 27, 2026

**Achievement**

The fortress navigation now responds to the visitor. Clicking any of the six chambers moves the active state to the chamber that was chosen.

```javascript
const allLinks = document.querySelectorAll(".navigation-link");

for (const link of allLinks) {
  link.addEventListener("click", function () {
    for (const otherLink of allLinks) {
      otherLink.classList.remove("active");
    }
    link.classList.add("active");
  });
}
```

**Skills Learned**

- Variables with `const`
- Data types: strings, numbers, and booleans
- Functions, parameters, and arguments
- Selecting elements with `querySelectorAll()`
- Looping through a list with `for...of`
- Listening for clicks with `addEventListener()`
- Adding and removing CSS classes with `classList`
- The "reset everything, then set one" pattern

**Why It Matters**

This is the first feature in Nurgle's Garden that reacts to a person instead of only running when the page loads. Every earlier lesson came together in one working piece of code, and the Fortress now answers when it is touched.
