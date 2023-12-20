const version = require("./package.json").version;
export default function Module() {
  return <p style={{ paddingLeft: 10 }}>- Module A v{version}</p>;
}
