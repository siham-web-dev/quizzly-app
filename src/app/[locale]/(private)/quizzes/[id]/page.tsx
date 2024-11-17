"use client";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { getQuestion } from "@/app/actions/question.action";
import { useEffect, useState } from "react";
import { Question } from "@/types";

const Quizz = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("QuizzesPage");
  const [question, setQuestion] = useState<Question>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();

  const getQuestionData = async () => {
    const result = await getQuestion(params.id, 1);
    if (result?.error) return;

    setQuestion(question as Question);
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-11">
      <h1 className="text-2xl font-bold ">Quizz </h1>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold ">Question {question?.index}</h3>
          <small>
            {t("time")} : {question?.timeLimit} seconds
          </small>
        </div>
        <p> {question?.nbPoints} points</p>
      </div>
      <p>{question?.description}</p>
      <form action={onSubmitAnswer}>
        <RadioGroup className="flex flex-col gap-9" defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={`choice1`} id="option-one" />
            <Label htmlFor="option-one">{question?.choice1}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={`choice2`} id="option-one" />
            <Label htmlFor="option-one">{question?.choice2}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={`choice3`} id="option-one" />
            <Label htmlFor="option-one">{question?.choice3}</Label>
          </div>
        </RadioGroup>
        <div className="flex gap-3 items-center">
          <Button type="submit" variant={"default"} className="w-[fit-content]">
            {t("submit")}
          </Button>
          <Button type="button" variant={"secondary"}>
            {t("next")}
          </Button>
          {showAnswer ? (
            isCorrectAnswer ? (
              <p className="text-green-900 font-bold">{t("correct")}</p>
            ) : (
              <p className="text-red-600 font-bold">{t("wrong")}</p>
            )
          ) : null}
          {/* <p className="text-green-900 font-bold">{t("correct")}</p> */}
          <p className="text-red-600 font-bold">{t("wrong")}</p>
        </div>
      </form>
    </div>
  );
};

export default Quizz;
