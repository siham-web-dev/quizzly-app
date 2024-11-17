"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { Question, QuestionFormValidation } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { addQuestion } from "@/app/actions/question.action";

const EditQuiz = ({ quizId }: { quizId: string }) => {
  const t = useTranslations("QuizzesPage");
  const form = useForm<Question>({
    resolver: zodResolver(QuestionFormValidation),
    defaultValues: {
      answer: 1,
      choice1: "",
      choice2: "",
      choice3: "",
      description: "",
      nbPoints: 1,
      timeLimit: 60,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<Question> = async (data) => {
    const result = await addQuestion({ ...data, quizId });
    if (result?.error) {
      toast({
        title: t("error"),
        description: result.error,
        variant: "destructive",
      });
    }

    if (result?.message) {
      toast({
        variant: "default",
        color: "green",
        title: t("success"),
        description: result.message,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}>{t("title_add_question")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title_add_question")}</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 my-5">
                  <FormItem className="flex flex-col gap-5">
                    <FormLabel htmlFor="question">{t("question")}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...register("description")}
                        id="question"
                        placeholder={t("question")}
                      />
                    </FormControl>
                    {errors.description && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.description.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormLabel htmlFor="choice1">{t("choices")}</FormLabel>
                    <FormControl>
                      <Input
                        {...register("choice1")}
                        id="choice1"
                        placeholder={`${t("choice")} 1`}
                      />
                    </FormControl>
                    {errors.choice1 && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.choice1.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormControl>
                      <Input
                        {...register("choice2")}
                        id="choice2"
                        placeholder={`${t("choice")} 2`}
                      />
                    </FormControl>
                    {errors.choice2 && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.choice2.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormControl>
                      <Input
                        {...register("choice3")}
                        id="choice2"
                        placeholder={`${t("choice")} 2`}
                      />
                    </FormControl>
                    {errors.choice3 && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.choice3.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormLabel htmlFor="answer">{t("answer")}</FormLabel>
                    <FormControl>
                      <Input
                        {...register("answer")}
                        id="answer"
                        type="number"
                        placeholder={t("placeholder_answer")}
                      />
                    </FormControl>
                    {errors.answer && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.answer.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormLabel htmlFor="nb_points">{t("nb_points")}</FormLabel>
                    <FormControl>
                      <Input
                        {...register("nbPoints")}
                        id="nb_points"
                        type="number"
                        placeholder={t("nb_points")}
                      />
                    </FormControl>
                    {errors.nbPoints && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.nbPoints.message}
                      </p>
                    )}
                  </FormItem>
                  <FormItem className="flex flex-col gap-5">
                    <FormLabel htmlFor="time_limit">
                      {t("time_limit")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...register("timeLimit")}
                        id="time_limit"
                        type="number"
                        placeholder={t("time_limit")}
                      />
                    </FormControl>
                    {errors.timeLimit && (
                      <p className="px-1 text-xs text-red-600">
                        {errors.timeLimit.message}
                      </p>
                    )}
                  </FormItem>
                </div>
                <Button variant={"default"}>
                  {isSubmitting ? t("loading") : t("submit")}
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditQuiz;
