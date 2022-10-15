import Error from "../../common/components/error/errors";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Form } from "../../common/components/form/form";
import { StyledInput } from "../../common/components/form/form.styles";
import { useAddDream } from "../hooks/use-add-dream";
import { AddDreamServieProps } from "../types/add-dream.types";

export const AddDreamFrom: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const { mutate: addDream, isError: isError, error } = useAddDream();

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  const onSubmit = async (payload: AddDreamServieProps): Promise<void> => {
    const finalPayload = { ...payload, isDone: false };
    addDream(finalPayload, { onSuccess });
  };

  const onSuccess = () => {
    reset();
    router.push("/");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitBtnTxt="Add Dream">
      <StyledInput
        required
        id="outlined-basic"
        label="FirstName"
        variant="outlined"
        {...register("firstName")}
      />
      <StyledInput
        required
        id="outlined-basic"
        label="Dream Title"
        variant="outlined"
        {...register("title")}
      />
      <StyledInput
        required
        id="outlined-basic"
        label="Description"
        variant="outlined"
        multiline
        {...register("description")}
      />
      <StyledInput
        id="remarks"
        label="Remarks"
        variant="outlined"
        multiline
        {...register("remarks")}
      />
    </Form>
  );
};
