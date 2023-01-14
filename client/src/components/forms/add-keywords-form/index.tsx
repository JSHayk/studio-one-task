import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { IKeywordsRequest } from "../../../interfaces/auth";
import resetForm from "../../../helpers/resetForm";
// Common
import Button from "../../../common/Button";
import Form from "../../../common/Form";
import Input from "../../../common/Input";
import Title from "../../../common/Title";
import "./index.scss";

interface IAddKeywordsForm {
  submitForm: (sendData: IKeywordsRequest) => void;
  link?: string;
}

const AddKeywordsForm: FC<IAddKeywordsForm> = ({ submitForm, link }) => {
  const [keywords, setKeywords] = useState<string>("");

  return (
    <Form
      submit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitForm({ keywords });
        resetForm([setKeywords]);
      }}
      className="add-keywords"
    >
      <Title>Add Keyword</Title>
      <Input
        value={keywords}
        change={(value: string) => {
          setKeywords(value);
        }}
      />
      <Button>Add</Button>
    </Form>
  );
};

export default memo(AddKeywordsForm);
