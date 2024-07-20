import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center px-8 py-8 sm:px-12">
    <SignUp path="/sign-up" />
    </div>
  )
}