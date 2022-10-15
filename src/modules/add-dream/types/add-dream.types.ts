
export interface FormDataInterface {
  title: string;
  description: string;
  remarks?: string;
  experience?: string;
   isDone: boolean
}

export interface AddDreamServieProps {
  payload: FormDataInterface;
  firstName: string;
}
