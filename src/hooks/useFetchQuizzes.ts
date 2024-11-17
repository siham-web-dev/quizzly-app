"use client";
import { getOwnedQuizzes } from "@/app/actions/quizz.actions";
import { toast } from "./use-toast";
import { Quizz } from "@/types";
import { useState } from "react";

export const useFetchQuizzes = ({
  setOwnedQuizzes,
  t,
}: {
  setOwnedQuizzes: React.Dispatch<React.SetStateAction<Quizz[]>>;
  t: (key: string) => string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getQuizzes = async () => {
    setIsLoading(true);
    const { quizzes, error } = await getOwnedQuizzes();

    if (error)
      toast({
        title: t("error"),
        description: error,
        variant: "destructive",
      });
    else setOwnedQuizzes(quizzes as Quizz[]);

    setIsLoading(false);
  };

  return { getQuizzes, isLoading };
};
