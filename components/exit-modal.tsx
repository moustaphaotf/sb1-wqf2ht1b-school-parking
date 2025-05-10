"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ExitModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ExitModal({ open, onOpenChange }: ExitModalProps) {
  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual exit verification
      toast.success("Sortie enregistrée");
      onOpenChange(false);
      setCode("");
    } catch (error) {
      toast.error("Code invalide");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Enregistrer une Sortie</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Code OTP ou scanner QR</Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Entrez le code"
            />
          </div>
          <Button type="submit" className="w-full">
            Valider la sortie
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}