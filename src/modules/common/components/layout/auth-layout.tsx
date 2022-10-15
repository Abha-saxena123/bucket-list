import { Link } from "@material-ui/core";
import { AppLayout, AuthContent } from "./layout.styles";

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <AppLayout>
      <AuthContent>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px",
            }}
          >
            <Link href={"/auth/login"}>Login</Link>
            <Link href={"/add-user"}>Sign up</Link>
          </div>
          <div>{children}</div>
        </div>
      </AuthContent>
    </AppLayout>
  );
};
