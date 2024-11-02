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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useTranslations } from "next-intl";

const AddQuiz = () => {
  const t = useTranslations("QuizzesPage");
  return (
    <Dialog>
      <DialogTrigger>
        <Button>{t("add")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title_add_quiz")}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 my-5">
              <div className="flex flex-col gap-5">
                <Label htmlFor="title">{t("title")}</Label>
                <Input id="title" placeholder={t("title")} type="text" />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="code">{t("code")}</Label>
                <Input id="quiz-code" placeholder={t("code")} type="text" />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="description">{t("description")}</Label>
                <Textarea id="description" placeholder={t("description")} />
              </div>
              <Button variant={"default"} className="w-[fit-content]">
                {t("create")}
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuiz;
