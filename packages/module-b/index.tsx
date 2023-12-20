import ModuleA from "@sdg9/module-a";

const version = require("./package.json").version;
export default function Module() {
  return (
    <div style={{ paddingLeft: 10 }}>
      <p>- Module B v{version} (2)</p>
      <ModuleA />
    </div>
  );
}
