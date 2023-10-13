import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import dynamic from 'next/dynamic';

const DashboardComponent = dynamic(async () => {
  const { default: Component } = await import('./DashboardComponent');

  return new Promise<typeof Component>(resolve => {
    setTimeout(() => {
      resolve(Component);
    }, 5000);
  });
}, {
  ssr: false,
  loading: () => (
    <div
      className={
        'flex flex-1 items-center min-h-full justify-center flex-col'
      }
    >
      <div>Loading dashboard...</div>
    </div>
  ),
});

export default async function DashboardPage() {
  const isSignedIn = cookies().get("auth")?.value === "true";

  if (!isSignedIn) {
    redirect("/auth");
  }

  const data = await loadSomeData();

  return (
    <div className="flex flex-col space-y-4 max-w-lg mx-auto py-16">
      <form>
        <button formAction={signOut}>Sign Out</button>
      </form>

      <DashboardComponent data={data} />
    </div>
  );
}

async function signOut() {
  "use server";

  cookies().delete("auth");

  redirect("/auth");
}

async function loadSomeData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          data: []
        }
      ]);
    }, 1000);
  });
}