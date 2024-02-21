import React from "react";
import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function CreateElement () {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Create Element</DialogTitle>
        <DialogDescription>
            Make changes to your profile here.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
         happy
      </div>
    </div>
  );
}

export default CreateElement;
