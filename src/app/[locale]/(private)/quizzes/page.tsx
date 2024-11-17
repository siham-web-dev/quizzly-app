"use client";

import { joinQuizz } from "@/app/actions/studentQuizzes.action";
import AddQuiz from "@/components/Modals/AddQuiz";
import QuizTabs from "@/components/QuizTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const t = useTranslations("QuizzesPage");
  const joinQuizzSubmit = async (formData: FormData) => {
    const { code } = Object.fromEntries(formData);
    const result = await joinQuizz(code as string);

    if (result?.error) {
      toast({
        title: t("error"),
        description: result.error,
        variant: "destructive",
      });
    } else if (result?.message) {
      toast({
        title: t("success"),
        description: result.message,
        variant: "default",
      });

      redirect("/quizzes/" + result.question?.quizId);
    }
  };

  return (
    <div className="w-full flex flex-col gap-11">
      <h1 className="text-2xl font-bold ">{t("title")}</h1>
      <div className="flex gap-3">
        <AddQuiz />
        <div className="flex gap-2">
          <form
            action={joinQuizzSubmit}
            className="flex w-full max-w-sm items-center space-x-2"
          >
            <Input name="code" type="text" placeholder={t("code")} />
            <Button type="submit" variant={"secondary"}>
              {t("join")}
            </Button>
          </form>
        </div>
      </div>
      <QuizTabs />
    </div>
  );
};

export default Dashboard;
