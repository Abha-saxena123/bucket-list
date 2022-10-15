import Error from "../../common/components/error/errors";
import { ObjectId } from "mongodb";
import { useForm } from "react-hook-form";
import { useUpdateDream } from "../hooks/use-dream-update";
import {
  UpdateFormWrapper,
  UpdateForm,
  StyledExperienceInput,
  FormSubmitButton,
} from "./dream-list.styles";

interface MarkItDoneFormProps {
  id: ObjectId;
  isDone: boolean;
  refetch: () => void;
}

export const MarkItDoneFrom: React.FC<MarkItDoneFormProps> = ({
  id,
  isDone,
  refetch,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const { mutate: updateDream, error, isError } = useUpdateDream();

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const onSubmit = async (payload: any): Promise<void> => {
    reset();
    updateDream(
      { _id: id, isDone: !isDone, ...payload },
      { onSuccess, onError }
    );
    closeForm();
  };

  const onSuccess = () => {
    refetch();
  };

  const onError = () => {
    throw error;
  };

  const closeForm = () => {
    (document.getElementById("markDonePopup") as HTMLElement).style.display =
      "none";
  };

  window.onclick = function (event) {
    let modal = document.getElementById("markDonePopup");
    if (event.target == modal) {
      closeForm();
    }
  };

  return (
    <UpdateFormWrapper id="markDonePopup">
      <UpdateForm onSubmit={handleSubmit(onSubmit)}>
        <StyledExperienceInput
          id="markDoneInput"
          label="Experience"
          variant="outlined"
          multiline
          {...register("experience")}
        />
        <FormSubmitButton type="submit">Submit</FormSubmitButton>
      </UpdateForm>
    </UpdateFormWrapper>
  );
};
