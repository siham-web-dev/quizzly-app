"use client";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { getQuestion } from "@/app/actions/question.action";
import { useEffect, useState } from "react";
import { Question } from "@/types";
import {
  moveNextQuestion,
  setPoints,
} from "@/app/actions/studentQuizzes.action";
import { toast } from "@/hooks/use-toast";

const Quizz = ({ params }: { params: { id: string } }) => {
  const t = useTranslations("QuizzesPage");
  const [question, setQuestion] = useState<Question>();
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);
  const [isDisabledSubmit, setIsDisabledSubmit] = useState<boolean>(false);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getQuestionData();
  }, [index]);

  const getQuestionData = async () => {
    const { error, question } = await getQuestion(params.id, index);
    if (error) return;

    if (question) setQuestion({ ...question, timeLimit: +question.timeLimit });
    setIsLoading(false);
  };

  const onSubmitAnswer = async (formData: FormData) => {
    const { answer } = Object.fromEntries(formData);

    const rightAnswer = question?.answer as number;
    const userAnswer = Number(answer as string);

    setIsCorrectAnswer(rightAnswer === userAnswer);
    setShowAnswer(true);
    setIsDisabledNext(false);
    setIsDisabledSubmit(true);

    await setPoints({
      quizzId: question?.quizId as string,
      questionId: question?.id as string,
      nbPoints: isCorrectAnswer ? (question?.nbPoints as number) : 0,
    });
  };

  const moveToNext = async () => {
    setShowAnswer(false);
    setIsDisabledNext(true);
    setIsDisabledSubmit(false);

    const { question: q, error } = await moveNextQuestion({
      quizzId: question?.quizId as string,
      questionId: question?.id as string,
    });

    if (q) setIndex(index + 1);
    else if (error)
      toast({
        title: error,
        variant: "destructive",
      });
  };

  return (
    <div className="w-full flex flex-col gap-11">
      <h1 className="text-2xl font-bold ">Quizz </h1>
      {isLoading && <p>loading ...</p>}
      {question && (
        <>
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold ">Question {question.index}</h3>
              <small>
                {t("time")} : {question.timeLimit} seconds
              </small>
            </div>
            <p> {question.nbPoints} points</p>
          </div>
          <p>{question.description}</p>
          <form action={onSubmitAnswer}>
            <RadioGroup
              name="answer"
              className="flex flex-col gap-9"
              defaultValue="option-one"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`choice1`} id="option-one" />
                <Label htmlFor="option-one">{question.choice1}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`choice2`} id="option-2" />
                <Label htmlFor="option-2">{question.choice2}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={`choice3`} id="option-3" />
                <Label htmlFor="option-3">{question.choice3}</Label>
              </div>
            </RadioGroup>
            <div className="flex gap-3 items-center mt-6">
              <Button
                disabled={isDisabledSubmit}
                type="submit"
                variant={"default"}
                className="w-[fit-content]"
              >
                {t("submit")}
              </Button>
              <Button
                onClick={moveToNext}
                disabled={isDisabledNext}
                type="button"
                variant={"secondary"}
              >
                {t("next")}
              </Button>
              {showAnswer &&
                (isCorrectAnswer ? (
                  <p className="text-green-900 font-bold">{t("correct")}</p>
                ) : (
                  <p className="text-red-600 font-bold">{t("wrong")}</p>
                ))}
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Quizz;
