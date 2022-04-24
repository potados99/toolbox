import Converter from "../../components/converter/Converter";

export default function Percent() {
  return (
    <Converter
      sourceEncoding={"URL Encoded"}
      destEncoding={"UTF-8"}
      sourceToDest={(original) => decodeURIComponent(original)}
      destToSource={(original) => encodeURIComponent(original)}
    />
  );
}
