import ModuleA from "@sdg9/module-a";
import ModuleB from "@sdg9/module-b";
import ModuleC from "@sdg9/module-c";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div style={{ fontWeight: "bold" }}>A</div>
      <div>
        <ModuleA />
      </div>
      <div style={{ fontWeight: "bold" }}>B</div>
      <div>
        <ModuleB />
      </div>
      <div style={{ fontWeight: "bold" }}>C</div>
      <ModuleC />
    </main>
  );
}
