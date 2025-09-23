import { QuartzComponentConstructor } from "./types"

export default (() => {
  return () => (
    <>
      {/* Load Viz.js */}
      <script src="https://unpkg.com/viz.js@2.1.2/viz.js"></script>
      <script src="https://unpkg.com/viz.js@2.1.2/full.render.js"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Jangan load 2x
            if (!window.graphvizInit) {
              window.graphvizInit = true
              console.log("✅ GraphvizRenderer loaded (viz.js)");

              document.addEventListener("DOMContentLoaded", () => {
                console.log("✅ DOMContentLoaded, start rendering");

                const viz = new Viz();

                document.querySelectorAll('code[data-language="dot"]').forEach(async block => {
                  // Cegah render ganda
                  if (block.parentElement.classList.contains("graphviz-processed")) {
                    return;
                  }
                  block.parentElement.classList.add("graphviz-processed");

                  // Ambil teks DOT secara utuh
                  const dotSrc = block.innerText;
                  console.log("🔍 Found dot block:", dotSrc);

                  try {
                    const svg = await viz.renderString(dotSrc);
                    const container = document.createElement("div");
                    container.classList.add("graphviz");
                    container.innerHTML = svg;

                    // Ganti <pre><code> dengan SVG
                    block.parentElement.replaceWith(container);
                    console.log("✅ Rendered graphviz");
                  } catch (err) {
                    console.error("❌ Graphviz render error:", err);
                  }
                });
              });
            }
          `,
        }}
      />
    </>
  )
}) satisfies QuartzComponentConstructor
