# Markdown-Vuets

A modern, lightweight Markdown editor and renderer built with **Vue 3** and **TypeScript**. This project provides a seamless way to write and preview Markdown with syntax highlighting and a responsive interface.

## 🚀 Features

- **Live Preview:** Real-time rendering of Markdown as you type.
- **Syntax Highlighting:** Beautiful code blocks powered by PrismJS / Highlight.js.
- **TypeScript Powered:** Fully typed for better developer experience and reliability.
- **Customizable:** Easily extendable themes and Markdown configurations.
- **Real-time Preview**: See your markdown rendered instantly as you type
- **Formatting Toolbar**: Quick access buttons for common markdown syntax
  - Text formatting (Bold, Italic)
  - Headings (H1-H4)
  - Lists (Ordered and Unordered)
  - Links and Images
  - Code blocks
- **Side-by-side Layout**: Editor and preview displayed together on desktop
- **Responsive Design**: Fully functional on mobile and desktop devices
- **Error Boundary**: Graceful error handling with custom fallback UI
- **Custom 404 Page**: User-friendly page for undefined routes
- **Accessible**: Semantic HTML and ARIA attributes throughout



## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework.
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript.
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling.
- [Marked](https://marked.js.org/) / [markdown-it](https://github.com/markdown-it/markdown-it) - Fast Markdown parser.


## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- pnpm or yarn

### Steps

1. pnpm create vite@latest Markdown-Vuets
2. cd Markdown-Vuets
3. pnpm install
4. pnpm install tailwindcss @tailwindcss/vite @tailwindcss/typography
5. pnpm install marked  
6. pnpm add vue-router@4
7. pnpm install lucide-react
8. pnpm run dev
9. http://localhost:5173

## Available Scripts

### `pnpm run dev`
Starts the development server at `http://localhost:5173`

### `pnpm run build`
Creates an optimized production build in the `dist/` folder

### `pnpm run preview`
Previews the production build locally

## Project Structure
├── src
│   ├── components   # Reusable Vue components (Editor, Previewer)
│   ├── page        # Editor and Error page
│   ├── styles       # Global styles and Markdown themes
│   ├── App.vue      # Main Application entry
│   └── main.ts      # TypeScript entry point
└── public           # Static assets


### Key Libraries

- **marked.js** - Markdown parsing and HTML conversion
- **Lucide React** - Icon library for toolbar buttons

### Architecture Decisions

**Decision Rationale:**

Chose `marked.js` because:
- Lightweight (~20KB minified)
- Simple API: `marked(text)` returns HTML
- Full GitHub Flavored Markdown support
- Configurable options for line breaks
- Fast parsing performance

**Configuration:**
```typescript
import { marked } from "marked";
import { computed } from "vue";

marked.setOptions({
  breaks: true,
  gfm: true,
});

```

## Usage

### Basic Editing
1. Type markdown syntax in the left editor panel
2. See real-time HTML preview in the right panel
3. Changes appear instantly as you type

### Using the Toolbar
- **Bold/Italic**: Select text first, then click the button
- **Headings**: Place cursor on line, click H1-H4 to add markers
- **Lists**: Select multiple lines, click list button to format all
- **Links/Images**: Selected text becomes the link/alt text, URL placeholder is auto-selected
- **Code Blocks**: Wraps selection in triple backticks

### Testing Error Boundary
Navigation button `Test Error Boundary` and click to Navigate to `/error-test` and click "Trigger Error" to see error handling in action


## Browser Support

**Desktop:**
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari 14+

**Mobile:**
- iOS Safari 14+
- Chrome Mobile (Android)


## Future Improvements

- [ ] Add localStorage persistence for markdown content
- [ ] Implement dark mode
- [ ] Add export to PDF/HTML functionality
- [ ] Add API integration for saving/loading documents
- [ ] Implement keyboard shortcuts for formatting
- [ ] Add syntax highlighting for code blocks in editor
- [ ] Add word count and character count


## Author

**ODUSANYA JOSHUA OLUWASEUN**
- GitHub: [@Josseun](https://github.com/Josseun)
- Email: Josseun123@gmail.com

## Acknowledgments

- **Marked.js** - Fast markdown parser
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library
