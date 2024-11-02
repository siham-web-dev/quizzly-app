"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuizCard from "./QuizCard";
import EditQuiz from "./Modals/EditQuiz";
import DeleteQuiz from "./Modals/DeleteQuiz";
import StudentsList from "./Modals/StudentsList";

const QuizTabs = () => {
  return (
    <Tabs
      defaultValue="own"
      className="flex w-[100%] max-h-[550px] overflow-y-auto flex-col shadow-[0_2px_10px] shadow-blackA2"
    >
      <TabsList className="flex shrink-0 border-b border-mauve6">
        <TabsTrigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative  "
          value="own"
        >
          Your own Quizzes
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative "
          value="taken"
        >
          Taken Quizzes
        </TabsTrigger>
      </TabsList>
      <TabsContent value="own" className="flex flex-col gap-3 p-10">
        <QuizCard>
          <EditQuiz />
          <DeleteQuiz />
          <StudentsList />
        </QuizCard>
      </TabsContent>
      <TabsContent value="taken" className="flex flex-col gap-3 px-10 pb-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <QuizCard key={index}>
            <div className="flex gap-3">
              <h1 className="font-semibold text-violet-900">Grade :</h1>
              <p>10/10</p>
            </div>
          </QuizCard>
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default QuizTabs;
