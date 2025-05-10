"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ParkingStatus } from "@/components/parking-status";
import { PlusCircle, LogOut } from "lucide-react";
import { useState } from "react";
import { EntryModal } from "@/components/entry-modal";
import { ExitModal } from "@/components/exit-modal";

export default function Dashboard() {
  const [showEntryModal, setShowEntryModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  return (
    <div className="h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="flex h-16 items-center px-4 md:px-8">
          <h1 className="text-xl font-bold">Gestion du Parking</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-8 space-y-8">
        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="flex-1 h-24 text-lg"
            onClick={() => setShowEntryModal(true)}
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Nouvelle Entrée
          </Button>
          <Button 
            className="flex-1 h-24 text-lg"
            variant="secondary"
            onClick={() => setShowExitModal(true)}
          >
            <LogOut className="mr-2 h-5 w-5" />
            Enregistrer une Sortie
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Places Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15/50</div>
              <p className="text-xs text-muted-foreground">
                70% d'occupation
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Entrées Aujourd'hui</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35</div>
              <p className="text-xs text-muted-foreground">
                +2 depuis la dernière heure
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temps Moyen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h 15m</div>
              <p className="text-xs text-muted-foreground">
                Par véhicule
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <ParkingStatus />

        <EntryModal open={showEntryModal} onOpenChange={setShowEntryModal} />
        <ExitModal open={showExitModal} onOpenChange={setShowExitModal} />
      </div>
    </div>
  );
}