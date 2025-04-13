
# BrewAURA ☕✨

**BrewAURA** is a sleek, interactive web experience designed to simulate the aroma and ambiance of a modern coffee brew. Utilizing 3D models, stylish layouts, and smooth UI interactions, this project delivers a sensory-rich representation of your favorite coffee experiences — all in your browser.

---

## 🌐 Live Preview

_You can host the project locally or deploy it to any static web server (like GitHub Pages, Netlify, or Vercel) to see it in action._

---

## 📁 Project Structure

```
BrewAURA/
├── index.html                # Main landing page
├── about.html               # About section (if exists)
├── reserve.html             # Reservation page
├── *.css                    # Stylesheets for pages
├── *.js                     # JavaScript for interactivity
├── models/                  # 3D models (.glb format)
├── drawables/               # Image assets (not listed but referenced)
└── .vscode/                 # VSCode settings (optional)
```

---

## 🚀 Getting Started

### 1. Clone or Download the Repository

```bash
git clone https://github.com/yourusername/BrewAURA.git
cd BrewAURA
```

Or download and extract the ZIP file.

---

### 2. Open in Browser

You can open `index.html` directly in your browser by double-clicking it or using a local server for better compatibility.

#### Option A: Open Directly

- Locate `index.html`
- Right-click and choose `Open With > Browser`

#### Option B: Use Local Server (Recommended)

You can use a tool like VS Code with the Live Server extension:

```bash
# If you have Node.js installed
npx serve .
```

Or with Python:

```bash
# Python 3.x
python -m http.server
```

---

## 🛠 Technologies Used

- HTML5 & CSS3
- TAILWIND CSS & GSAP 
- JavaScript (ES6)
- [Model Viewer](https://modelviewer.dev/) for 3D model rendering
- VS Code `.vscode/settings.json` for workspace configuration

---

## 📦 Dependencies

No external packages are required — everything runs in the browser!

---

## 🎨 Customization Tips

- Replace or edit the `.glb` models inside the `models/` folder.
- Update CSS styles (`about.css`, `menu.css`) for custom themes.
- Modify `*.js` files to enhance animations or add event listeners.

---

## 📬 Contact

Have questions or want to contribute? Feel free to reach out or fork the project and make it your own!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
