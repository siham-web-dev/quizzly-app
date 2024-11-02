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
import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

const EditQuiz = () => {
  const t = useTranslations("QuizzesPage");

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}>{t("title_add_question")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title_add_question")}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 my-5">
              <div className="flex flex-col gap-5">
                <Label htmlFor="question">{t("question")}</Label>
                <Textarea id="question" placeholder={t("question")} />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="choice1">{t("choices")}</Label>
                <Input id="choice1" placeholder={`${t("choice")} 1`} />
                <Input id="choice2" placeholder={`${t("choice")} 2`} />
                <Input id="choice3" placeholder={`${t("choice")} 3`} />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="answer">{t("answer")}</Label>
                <Input
                  id="answer"
                  type="number"
                  placeholder={t("placeholder_answer")}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="nb_points">{t("nb_points")}</Label>
                <Input
                  id="nb_points"
                  type="number"
                  placeholder={t("nb_points")}
                />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="time_limit">{t("time_limit")}</Label>
                <Input
                  id="time_limit"
                  type="time"
                  placeholder={t("time_limit")}
                />
              </div>
            </div>
            <Button variant={"default"}>{t("submit")}</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditQuiz;
