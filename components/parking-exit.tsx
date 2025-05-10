"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function ParkingExit() {
  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual exit verification
      toast.success("Sortie enregistrée");
    } catch (error) {
      toast.error("Code invalide");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enregistrement de sortie</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}