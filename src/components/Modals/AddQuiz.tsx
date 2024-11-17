"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { Quizz, QuizzFormValidation } from "@/types";
import { addQuizz } from "@/app/actions/quizz.actions";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormItem, FormLabel } from "../ui/form";
import { useContext } from "react";
import { Context } from "../ContextProvider";

const AddQuiz = () => {
  const t = useTranslations("QuizzesPage");
  const form = useForm<Quizz>({
    resolver: zodResolver(QuizzFormValidation),
    defaultValues: { code: "", title: "", description: "" },
  });
  const { setQuizzes } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<Quizz> = async (data) => {
    const result = await addQuizz(data);
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
      setQuizzes();
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button>{t("add")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title_add_quiz")}</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 my-5"
              >
                <FormItem className="flex flex-col gap-5">
                  <FormLabel htmlFor="title">{t("title_input")}</FormLabel>
                  <FormControl>
                    <Input
                      id="title"
                      {...register("title")}
                      placeholder={t("title_input")}
                      type="text"
                    />
                  </FormControl>
                  {errors.title && (
                    <p className="text-red-500">{errors.title.message}</p>
                  )}
                </FormItem>
                <FormItem className="flex flex-col gap-5">
                  <FormLabel htmlFor="code">{t("code")}</FormLabel>
                  <FormControl>
                    <Input
                      id="quiz-code"
                      {...register("code")}
                      placeholder={t("code")}
                      type="text"
                    />
                  </FormControl>
                  {errors.code && (
                    <p className="text-red-500">{errors.code.message}</p>
                  )}
                </FormItem>
                <FormItem className="flex flex-col gap-5">
                  <FormLabel htmlFor="description">
                    {t("description")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...register("description")}
                      id="description"
                      placeholder={t("description")}
                    />
                  </FormControl>
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </FormItem>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant={"default"}
                  className="w-[fit-content]"
                >
                  {isSubmitting ? t("loading") : t("create")}
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuiz;
