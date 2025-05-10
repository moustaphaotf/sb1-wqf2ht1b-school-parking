"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function ParkingEntry() {
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
      // TODO: Send email/SMS to owner
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Enregistrement d'entrée</CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}