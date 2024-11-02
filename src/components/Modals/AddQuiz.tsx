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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AddQuiz = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>New Quiz</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Quiz</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-4 my-5">
              <div className="flex flex-col gap-5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Title of the quiz" type="text" />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="code">Code</Label>
                <Input
                  id="quiz-code"
                  placeholder="Code of the quiz"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Description of the quiz"
                />
              </div>
              <Button variant={"default"} className="w-[fit-content]">
                Create
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddQuiz;
