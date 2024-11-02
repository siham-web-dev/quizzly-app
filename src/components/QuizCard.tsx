import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const QuizCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quizz Title</CardTitle>
        <CardDescription>Quizz Description</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex gap-3">{children}</div>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
