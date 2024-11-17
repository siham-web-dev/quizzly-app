"use client";

import { useFetchQuizzes } from "@/hooks/useFetchQuizzes";
import { Quizz } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

export const Context = React.createContext({
  isLoading: true,
  setQuizzes: () => {},
  ownedQuizzes: [] as Quizz[],
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [ownedQuizzes, setOwnedQuizzes] = React.useState<Quizz[]>([]);
  const t = useTranslations("QuizzesPage");
  const {
    getQuizzes,
    isLoading,
  }: { getQuizzes: () => Promise<void>; isLoading: boolean } = useFetchQuizzes({
    setOwnedQuizzes,
    t,
  });

  const setQuizzes = async () => await getQuizzes();

  return (
    <Context.Provider value={{ isLoading, ownedQuizzes, setQuizzes }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
