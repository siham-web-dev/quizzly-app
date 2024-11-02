"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const localActive = useLocale();
  const router = useRouter();

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(value);
    router.push(`/${value}/quizzes`);
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </label>
  );
};

export default LanguageSwitcher;
