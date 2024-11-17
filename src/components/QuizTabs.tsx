"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import QuizCard from "./QuizCard";
import EditQuiz from "./Modals/EditQuiz";
import DeleteQuiz from "./Modals/DeleteQuiz";
import StudentsList from "./Modals/StudentsList";
import { useTranslations } from "next-intl";
import { deleteQuizz } from "@/app/actions/quizz.actions";
import { useContext, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Quizz } from "@/types";
import { Context } from "./ContextProvider";

const QuizTabs = () => {
  const t = useTranslations("QuizzesPage");
  const { setQuizzes, isLoading, ownedQuizzes } = useContext(Context);

  useEffect(() => {
    setQuizzes();
  }, []);

  const onDelete = async (id: string) => {
    const { error } = await deleteQuizz(id);
    if (error) {
      toast({
        title: t("error"),
        description: error,
        variant: "destructive",
      });
    } else {
      toast({
        variant: "default",
        color: "green",
        title: t("success"),
        description: "you have successfully deleted a quizz !!",
      });
      setQuizzes();
    }
  };

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
          {t("own")}
        </TabsTrigger>
        <TabsTrigger
          className="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-[15px] leading-none text-mauve11 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative "
          value="taken"
        >
          {t("taken")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="own" className="flex flex-col gap-3 p-10">
        {isLoading && <p>Loading...</p>}
        {ownedQuizzes?.map((quiz: Quizz) => (
          <>
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              description={quiz.description}
            >
              <EditQuiz quizId={quiz.id as string} />
              <DeleteQuiz id={quiz.id as string} onDelete={onDelete} />
              <StudentsList />
            </QuizCard>
          </>
        ))}
      </TabsContent>
      <TabsContent value="taken" className="flex flex-col gap-3 px-10 pb-5">
        {/* {Array.from({ length: 10 }).map((_, index) => (
          <QuizCard  key={index}>
            <div className="flex gap-3">
              <h1 className="font-semibold text-violet-900">{t("grade")}</h1>
              <p>10/10</p>
            </div>
          </QuizCard>
        ))} */}
      </TabsContent>
    </Tabs>
  );
};

export default QuizTabs;
