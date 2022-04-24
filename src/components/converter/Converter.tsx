import Card from "../../components/card/Card";
import CardTitle from "../../components/card/CardTitle";
import { useState } from "react";
import CardTextArea from "../../components/card/CardTextArea";
import CardErrorText from "../card/CardErrorText";

type Props = {
  sourceEncoding: string;
  destEncoding: string;

  sourceToDest: (source: string) => string;
  destToSource: (dest: string) => string;
};

export default function Converter({ sourceEncoding, destEncoding, sourceToDest, destToSource }: Props) {
  const [source, setSource] = useState("");
  const [dest, setDest] = useState("");

  const [errorOnSource, setErrorOnSource] = useState<string>();
  const [errorOnDest, setErrorOnDest] = useState<string>();

  const changeSource = (value: string) => {
    setSource(value);

    try {
      setDest(sourceToDest(value));
      setErrorOnDest(undefined);

      setErrorOnSource(undefined);
    } catch (e) {
      setErrorOnSource("올바르지 않은 형식입니다.");
    }
  };

  const changeDest = (value: string) => {
    setDest(value);

    try {
      setSource(destToSource(value));
      setErrorOnSource(undefined);

      setErrorOnDest(undefined);
    } catch (e) {
      setErrorOnDest("올바르지 않은 형식입니다.");
    }
  };

  return (
    <>
      <Card>
        <CardTitle>{sourceEncoding}</CardTitle>
        <CardTextArea
          value={source}
          onChange={(e) => changeSource(e.target.value)}
          placeholder={"여기에 텍스트를 붙여넣으세요."}
        />
        <CardErrorText hidden={errorOnSource == null}>{errorOnSource}</CardErrorText>
      </Card>

      <Card>
        <CardTitle>{destEncoding}</CardTitle>
        <CardTextArea
          value={dest}
          onChange={(e) => changeDest(e.target.value)}
          placeholder={"여기에 텍스트를 붙여넣으세요."}
        />
        <CardErrorText hidden={errorOnDest == null}>{errorOnDest}</CardErrorText>
      </Card>
    </>
  );
}
