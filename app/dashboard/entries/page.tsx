"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Search } from "lucide-react";

const mockEntries = [
  {
    id: 1,
    plate: "AB-123-CD",
    type: "Voiture",
    ownerName: "Jean Dupont",
    entryTime: "2024-03-20 08:30",
    status: "En cours",
  },
  // Add more mock data as needed
];

export default function Entries() {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    date: "",
  });

  return (
    <div className="h-screen bg-background">
      <div className="container mx-auto p-4 md:p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Liste des Entrées</h1>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filtres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  className="pl-8"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
              
              <Select
                value={filters.type}
                onValueChange={(value) => setFilters({ ...filters, type: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de véhicule" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Voiture</SelectItem>
                  <SelectItem value="motorcycle">Moto</SelectItem>
                  <SelectItem value="bicycle">Vélo</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={filters.status}
                onValueChange={(value) => setFilters({ ...filters, status: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">En cours</SelectItem>
                  <SelectItem value="completed">Terminé</SelectItem>
                </SelectContent>
              </Select>

              <Input
                type="date"
                value={filters.date}
                onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plaque</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Propriétaire</TableHead>
                  <TableHead>Heure d'entrée</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockEntries.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell className="font-medium">{entry.plate}</TableCell>
                    <TableCell>{entry.type}</TableCell>
                    <TableCell>{entry.ownerName}</TableCell>
                    <TableCell>{entry.entryTime}</TableCell>
                    <TableCell>{entry.status}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}