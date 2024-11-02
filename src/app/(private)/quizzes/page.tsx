import AddQuiz from "@/components/Modals/AddQuiz";
import QuizTabs from "@/components/QuizTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-11">
      <h1 className="text-2xl font-bold ">Quizzes dashboard</h1>
      <div className="flex gap-3">
        <AddQuiz />
        <div className="flex gap-2">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="code of the quiz" />
            <Button variant={"secondary"}>Join quizz</Button>
          </div>
        </div>
      </div>
      <QuizTabs />
    </div>
  );
};

export default page;
