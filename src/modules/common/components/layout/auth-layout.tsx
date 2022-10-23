import { AppLayout } from "./layout.styles";

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      <div>{children}</div>
    </AppLayout>
  );
};
