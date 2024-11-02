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
import { useTranslations } from "next-intl";

const StudentsList = () => {
  const t = useTranslations("QuizzesPage");

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"}>{t("students")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("students")}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-9 mt-7">
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> {t("grade")}: 100 </p>
              </div>
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> {t("grade")}: 100 </p>
              </div>
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> {t("grade")}: 100 </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StudentsList;
