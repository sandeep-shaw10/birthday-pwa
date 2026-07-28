# 🎂 Birthday Wishes PWA

A beautiful, customizable Birthday Wishes Progressive Web App (PWA) built with **React + Vite + Tailwind CSS v4 + Framer Motion**.

![Preview](./preview.jpg)

---

# 🚀 Features

- 🎉 Birthday Countdown
- ❤️ Beautiful Glassmorphism UI
- 🎁 Birthday Wish Modal
- 🎵 Background Music
- ✨ Sparkles & Floating Hearts
- 💥 Confetti Animation
- 📱 Installable PWA
- 🎨 Theme System
- 📱 Fully Responsive

---

# 🛠 Tech Stack

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Canvas Confetti
- vite-plugin-pwa

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/sandeep-shaw10/birthday-pwa.git
```

Go inside project

```bash
cd birthday-pwa
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 📁 Project Structure

```
src/
│
├── assets/
│   ├── img.webp
│   └── music.mp3
│
├── components/
│
├── data/
│   └── data.json
│
├── utils/
│   ├── birthdayUtils.js
│   └── theme.js
│
├── App.jsx
└── main.jsx

public/
│
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── og.png
```

---

# 🎨 Customize the Birthday

## 1. Change Image

Replace

```
src/assets/img.webp
```

---

## 2. Change Music

Replace

```
src/assets/music.mp3
```

---

## 3. Edit Birthday Details

Open

```
src/data/data.json
```

Example

```json
{
    "name": "Shweta",
    "author": "Sandeep",

    "theme": "purple",

    "dob": "1996-08-02",

    "wishStart": {
        "day": 2,
        "month": 8
    },

    "wishEnd": {
        "day": 31,
        "month": 8
    },

    "wish": "Happy Birthday ❤️"
}
```

### Fields

| Field | Description |
|-------|-------------|
| name | Birthday person's name |
| author | Your name |
| theme | Theme name from `theme.js` |
| dob | Date of Birth |
| wishStart | Birthday month start |
| wishEnd | Birthday month end |
| wish | Birthday message |

---

# 🌈 Change Theme

Open

```
src/utils/theme.js
```

Available themes

```
emerald
purple
rose
blue
sunset
```

Change in

```
src/data/data.json
```

Example

```json
{
    "theme": "purple"
}
```

You can also create your own custom theme inside

```
src/utils/theme.js
```

---

# 📝 Change Website Title

Open

```
index.html
```

Edit

```html
<title>Happy Birthday Shweta ❤️</title>
```

---

# ⭐ Change Favicon

Replace files inside

```
public/
```

```
favicon.ico

favicon-16x16.png

favicon-32x32.png

apple-touch-icon.png

android-chrome-192x192.png

android-chrome-512x512.png

og.png
```

---

# 📱 PWA Manifest

Open

```
vite.config.js
```

Edit

```js
const base = "/birthday-pwa/";
```

Replace

```
birthday-pwa
```

with your repository name.

Update

```js
manifest: {

    name: "Shweta",

    short_name: "Didi",

    description: "Birthday greeting PWA App",

    theme_color: "#8b5cf6",

    background_color: "#2e1065",

    start_url: base,

    scope: base,
}
```

### Theme Mapping

```
theme_color
        ↓
theme.primary

background_color
        ↓
theme.bgStart
```

---

# ▶ Run Locally

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# ☁ Deploy to GitHub

Commit changes

```bash
git add .

git commit -m "Update birthday website"
```

Push

```bash
git push
```

If first push

```bash
git push -u origin main
```

Deploy

```bash
npm run deploy
```

Website

```
https://<username>.github.io/<repository-name>/
```

Example

```
https://john.github.io/birthday-pwa/
```