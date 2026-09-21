# Ngbuu - Portfolio

Personal portfolio of **Bùi Ngọc Bửu (Ngbuu)**, an Information Technology student at HCMUS in Ho Chi Minh City. It introduces who I am, the websites I've built, and how to reach me.

**Live site:** https://ngbuu08.github.io/Portfolio-Ngbuu/

## Sections

- **Home**: a giant hero name that melts as you scroll, plus a short introduction.
- **Projects**: websites I've built.
  - [AutoVelocity](https://ngbuu08.github.io/Web-Car/), a supercar showroom website (group project, 2025).
  - [Ngbuu's Yearbook](https://ngbuu08.github.io/YearBook/), a digital yearbook for my class (2026).
- **About**: where I'm from and where I've studied.
- **Contact**: email, phone, social links and the languages I speak.

## Features

- Built with plain **HTML, CSS and JavaScript**. No framework and no build step.
- The hero name uses the **Climate Crisis** variable font. Its `YEAR` axis goes from 1979 (solid letters) to 2050 (melted letters), and the script moves it as you scroll.
- Sticky navbar with smooth scrolling to each section.
- Responsive from small phones to wide desktops.
- Respects the "reduce motion" setting: the name stays still and scrolling is not animated.
- Keyboard focus is visible, and icons have text alternatives for screen readers.

## Tech

| Part | What I used |
|---|---|
| Markup | HTML5 |
| Styling | CSS (custom properties, grid, flexbox, `clamp()`) |
| Behavior | Vanilla JavaScript |
| Fonts | Climate Crisis (titles) and DM Sans (content), from Google Fonts |
| Icons | Font Awesome Free (inline SVG) |

## Project structure

```
Portfolio-Ngbuu/
├── index.html
├── avatar.jpg
├── README.md
└── src/
    ├── style.css
    └── script.js
```

`avatar.jpg` sits next to `index.html` and is used in the navbar and the Home section.

## Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/ngbuu08/Portfolio-Ngbuu.git
   cd Portfolio-Ngbuu
   ```
2. Open `index.html` in a browser.

For live reloading, open the folder in VS Code and use the **Live Server** extension.

## Deploy on GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select the `main` branch and the `/ (root)` folder.
4. Save. The site will be available at `https://<your-username>.github.io/<repository-name>/` after a minute or two.

## Customize

- **Text and links**: edit the sections in `index.html`.
- **Colors**: change the variables in the `:root` block at the top of `src/style.css` (`--ice-1`, `--deep`, `--water`, `--heat`, and so on).
- **Fonts**: the `<link>` in the `<head>` loads the fonts, and `--font-body` and `--font-display` in `src/style.css` choose where each one is used.
- **Melting range**: change `YEAR_START` and `YEAR_END` at the top of `src/script.js`. The Climate Crisis font supports 1979 to 2050.
- **Project images**: replace the `src` of the image inside each `.project-thumb`.

## Credits

- Icons: [Font Awesome Free](https://fontawesome.com/license/free), licensed under CC BY 4.0.
- Fonts: [Climate Crisis](https://fonts.google.com/specimen/Climate+Crisis) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts, both under the SIL Open Font License.

## Contact

Find the latest ways to reach me in the **Contact** section of the [live site](https://ngbuu08.github.io/Portfolio-Ngbuu/).

&copy; 2026 Bùi Ngọc Bửu
