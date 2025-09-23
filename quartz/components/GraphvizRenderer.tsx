import { QuartzComponentConstructor } from "./types"

export default (() => {
  return () => (
    <>
      <script src="https://unpkg.com/@hpcc-js/wasm/dist/index.min.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", async () => {
              const hpccWasm = await window["@hpcc-js/wasm"];

              document.querySelectorAll('pre code.language-dot').forEach(async block => {
                try {
                  const svg = await hpccWasm.graphviz.layout(block.innerText, "svg", "dot");
                  const container = document.createElement("div");
                  container.classList.add("graphviz");
                  container.innerHTML = svg;
                  block.parentElement.replaceWith(container);
                } catch (err) {
                  console.error("Graphviz render error:", err);
                }
              });
            });
          `,
        }}
      />
    </>
  )
}) satisfies QuartzComponentConstructor
// This component uses the @hpcc-js/wasm library to render Graphviz diagrams from DOT language code blocks.