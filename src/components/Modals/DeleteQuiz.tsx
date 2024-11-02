"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const DeleteQuiz = () => {
  const t = useTranslations("QuizzesPage");
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"destructive"}>{t("delete")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title_delete_quiz")}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-9 mt-7">
              <p>{t("message")}</p>
              <div className="flex gap-3">
                <Button variant={"default"}>{t("submit")}</Button>
                <Button variant={"destructive"}>{t("cancel")}</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteQuiz;
