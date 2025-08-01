interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  devLink: string;
}

const projects: Project[] = [
  {
    title: "Ollama Hub: GUI for Local LLM Models",
    description:
      "A VS Code extension providing a graphical interface to interact with local AI models",
    tags: ["Typescript", "HTML", "CSS"],
    liveLink:
      "https://marketplace.visualstudio.com/items?itemName=chetanjangir.ollama-hub-gui",
    devLink: "https://github.com/chetanjangir0/Ollama-Hub-a-vs-code-extension",
  },
  {
    title: "TUI Wi-Fi Manager for Linux",
    description:
      "A Wi-Fi manager TUI(Text-based User Interface) built using bubbletea, providing a keyboard-driven interface to scan, view, and connect to networks via nmcli.",
    tags: ["Go", "Bubbletea"],
    liveLink: "",
    devLink: "https://github.com/chetanjangir0/blueboy",
  },
  {
    title: "A 2D action RPG game",
    description:
      "a 2D Action RPG game developed using the Godot engine with dynamic combat, engaging mechanics",
    tags: ["Godot", "GDScript"],
    liveLink: "https://chetanjangir0.itch.io/the-forsaken-knight",
    devLink: "https://github.com/chetanjangir0/godot-dark-fantasy",
  },
  {
    title: "A Backpack Shopping Website",
    description:
      "An Single Page Application (SPA) for backpack shopping featuring User Authentication, Server-Side Rendering (SSR), and a smooth, responsive design.",
    tags: ["TypeScript", "SvelteKit", "TailwindCSS"],
    liveLink: "https://my-bagpacks.pages.dev/",
    devLink: "https://github.com/chetanjangir0/my-bagpacks",
  },
];

export default projects;
