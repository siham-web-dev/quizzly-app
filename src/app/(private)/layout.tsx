import { UserButton } from "@clerk/nextjs";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-10  p-11">
      <div className="flex justify-between gap-2 items-center pb-4 border-b border-slate-300">
        <h1 className="text-2xl font-bold text-pink-900">Quizzy</h1>
        <UserButton />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
