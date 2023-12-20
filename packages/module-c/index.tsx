import ModuleA from "@sdg9/module-a";
import ModuleB from "@sdg9/module-b";

const version = require("./package.json").version;
export default function Module() {
  return (
    <div style={{ paddingLeft: 10 }}>
      <p>- Module C v{version}</p>
      <ModuleA />
      <ModuleB />
    </div>
  );
}
