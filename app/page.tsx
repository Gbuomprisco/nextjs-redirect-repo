import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 max-w-lg mx-auto py-16">
      <Link href="/auth">Sign In</Link>
    </div>
  );
}
