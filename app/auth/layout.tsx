import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function AuthLayout(props: React.PropsWithChildren) {
  const isSignedIn = cookies().get("auth")?.value;

  if (isSignedIn) {
    redirect("/dashboard");
  }

  return <div>{props.children}</div>;
}
