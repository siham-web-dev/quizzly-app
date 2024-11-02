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

const DeleteQuiz = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"destructive"}>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Quiz</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-9 mt-7">
              <p> Are you absolutely sure to delete this quiz? </p>
              <div className="flex gap-3">
                <Button variant={"default"}>Submit</Button>
                <Button variant={"destructive"}>Cancel</Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteQuiz;
