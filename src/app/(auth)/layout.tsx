import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (userId != null) redirect("/quizzes");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default layout;
