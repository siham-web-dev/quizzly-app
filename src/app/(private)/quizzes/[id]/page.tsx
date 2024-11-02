import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-11">
      <h1 className="text-2xl font-bold ">Quizz </h1>
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold ">Question 1</h3>
          <small>Time remaining : 00:05</small>
        </div>
        <p> 10 pt</p>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        sapiente totam explicabo ullam. Doloremque nam voluptatem minima
        excepturi id ullam reprehenderit omnis odit debitis?
      </p>
      <RadioGroup className="flex flex-col gap-9" defaultValue="option-one">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <RadioGroupItem value={`option-${i + 1}`} id="option-one" />
            <Label htmlFor="option-one">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="flex gap-3 items-center">
        <Button variant={"default"} className="w-[fit-content]">
          Submit
        </Button>
        <Button variant={"secondary"}>Next</Button>
        {/* <p className="text-green-900 font-bold">Correct answer</p> */}
        <p className="text-red-600 font-bold">Wrong answer</p>
      </div>
    </div>
  );
};

export default page;
