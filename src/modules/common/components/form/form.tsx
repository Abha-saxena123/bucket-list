import { useForm } from "react-hook-form";
import { FormWrapper, FormSubmitButton, FormContainer } from "./form.styles";

interface FormProps {
  onSubmit: () => void;
  submitBtnTxt?: string;
  isLogin?: boolean;
}

export const Form: React.FC<FormProps> = ({
  onSubmit,
  submitBtnTxt,
  children,
  isLogin,
}) => {
  return (
    <FormContainer isLogin={isLogin}>
      <FormWrapper onSubmit={onSubmit}>
        {children}
        <FormSubmitButton type="submit">
          {submitBtnTxt ? submitBtnTxt : "Submit"}
        </FormSubmitButton>
      </FormWrapper>
    </FormContainer>
  );
};
