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
import { DialogClose } from "@radix-ui/react-dialog";

const DeleteQuiz = ({
  id,
  onDelete,
}: {
  id: string;
  onDelete: (id: string) => void;
}) => {
  const t = useTranslations("QuizzesPage");

  const onDeleteQuiz = async () => {
    onDelete(id);
  };

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
                <Button onClick={onDeleteQuiz} variant={"default"}>
                  {t("submit")}
                </Button>
                <DialogClose asChild>
                  <Button variant={"secondary"}>{t("cancel")}</Button>
                </DialogClose>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteQuiz;
