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
const StudentsList = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"link"}>Students list</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quiz students list</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-9 mt-7">
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> Grade: 100 </p>
              </div>
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> Grade: 100 </p>
              </div>
              <div className="flex gap-3 justify-between">
                <p>Username </p>
                <p> Grade: 100 </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default StudentsList;
