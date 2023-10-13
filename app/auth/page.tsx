import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function AuthPage() {
  return (
    <form action={signInAction}>
      <div className="flex flex-col space-y-4 max-w-lg mx-auto py-16">
        <input placeholder="Email" type="email" required />
        <input placeholder="Password" type="password" required />
        <button>Submit</button>
      </div>
    </form>
  );
}

async function signInAction() {
  "use server";

  cookies().set("auth", "true", {
    path: "/",
  });

  redirect("/dashboard");
}
