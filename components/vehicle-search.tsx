"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function VehicleSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual vehicle search
      toast.info("Recherche en cours...");
    } catch (error) {
      toast.error("Véhicule non trouvé");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recherche de véhicule</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="search">Plaque d'immatriculation ou Code</Label>
            <Input
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="AB-123-CD ou code"
            />
          </div>
          <Button type="submit" className="w-full">
            Rechercher
          </Button>
        </form>

        {vehicleDetails && (
          <div className="mt-4 p-4 border rounded-lg">
            {/* Vehicle details will be displayed here */}
          </div>
        )}
      </CardContent>
    </Card>
  );
}