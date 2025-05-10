"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface EntryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EntryModal({ open, onOpenChange }: EntryModalProps) {
  const [vehicleData, setVehicleData] = useState({
    type: "",
    plate: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual vehicle registration
      toast.success("Véhicule enregistré avec succès");
      onOpenChange(false);
      setVehicleData({
        type: "",
        plate: "",
        ownerName: "",
        ownerPhone: "",
        ownerEmail: "",
      });
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Nouvelle Entrée</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type de véhicule</Label>
            <Select onValueChange={(value) => setVehicleData({ ...vehicleData, type: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner le type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Voiture</SelectItem>
                <SelectItem value="motorcycle">Moto</SelectItem>
                <SelectItem value="bicycle">Vélo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="plate">Plaque d'immatriculation</Label>
            <Input
              id="plate"
              value={vehicleData.plate}
              onChange={(e) => setVehicleData({ ...vehicleData, plate: e.target.value })}
              placeholder="AB-123-CD"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ownerName">Nom du propriétaire</Label>
            <Input
              id="ownerName"
              value={vehicleData.ownerName}
              onChange={(e) => setVehicleData({ ...vehicleData, ownerName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ownerPhone">Téléphone</Label>
            <Input
              id="ownerPhone"
              type="tel"
              value={vehicleData.ownerPhone}
              onChange={(e) => setVehicleData({ ...vehicleData, ownerPhone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ownerEmail">Email</Label>
            <Input
              id="ownerEmail"
              type="email"
              value={vehicleData.ownerEmail}
              onChange={(e) => setVehicleData({ ...vehicleData, ownerEmail: e.target.value })}
            />
          </div>

          <Button type="submit" className="w-full">
            Enregistrer l'entrée
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}