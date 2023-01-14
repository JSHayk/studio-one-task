import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { IKeywordsRequest } from "../../../interfaces/auth";
import resetForm from "../../../helpers/resetForm";
// Common
import Button from "../../../common/Button";
import Form from "../../../common/Form";
import Input from "../../../common/Input";
import Title from "../../../common/Title";

interface IEditKeywordsForm {
  submitForm: (sendData: IKeywordsRequest) => void;
}

const EditKeywordsForm: FC<IEditKeywordsForm> = ({ submitForm }) => {
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
      <Title>Edit Keyword</Title>
      <Input
        value={keywords}
        change={(value: string) => {
          setKeywords(value);
        }}
      />
      <Button className="edit-button">Edit</Button>
    </Form>
  );
};

export default memo(EditKeywordsForm);
