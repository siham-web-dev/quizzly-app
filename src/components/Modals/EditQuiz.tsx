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

const EditQuiz = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"}>Add Questions</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 my-5">
              <div className="flex flex-col gap-5">
                <Label htmlFor="question">Question</Label>
                <Textarea id="question" placeholder="Question of the quiz" />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="choice1">choices</Label>
                <Input id="choice1" placeholder="choice1" />
                <Input id="choice2" placeholder="choice2" />
                <Input id="choice3" placeholder="choice3" />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="answer">answer</Label>
                <Input
                  id="answer"
                  type="number"
                  placeholder="enter the choice number"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="nb_points">Number of points</Label>
                <Input
                  id="nb_points"
                  type="number"
                  placeholder="number of points"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="time_limit">Time limit</Label>
                <Input id="time_limit" type="time" placeholder="time limit" />
              </div>
            </div>
            <Button variant={"default"}>Submit</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditQuiz;
