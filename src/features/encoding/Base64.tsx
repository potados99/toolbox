import Converter from "../../components/converter/Converter";

export default function Base64() {
  return (
    <Converter
      sourceEncoding={"Base64"}
      destEncoding={"UTF-8"}
      sourceToDest={(original) => Buffer.from(original, "base64").toString("utf-8")}
      destToSource={(original) => Buffer.from(original, "utf-8").toString("base64")}
    />
  );
}
