"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const mockData = [
  { hour: '08:00', vehicles: 12 },
  { hour: '10:00', vehicles: 25 },
  { hour: '12:00', vehicles: 30 },
  { hour: '14:00', vehicles: 28 },
  { hour: '16:00', vehicles: 20 },
  { hour: '18:00', vehicles: 15 },
];

export function ParkingStatus() {
  const handleExport = () => {
    // TODO: Implement data export
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Vue d'ensemble</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 border rounded-lg">
              <h3 className="text-sm font-medium">Places occupées</h3>
              <p className="text-2xl font-bold">45/50</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-sm font-medium">Entrées aujourd'hui</h3>
              <p className="text-2xl font-bold">78</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-sm font-medium">Temps moyen</h3>
              <p className="text-2xl font-bold">2h 15m</p>
            </div>
          </div>

          <div className="h-[300px] mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vehicles" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <Button onClick={handleExport} className="mt-6">
            <Download className="mr-2 h-4 w-4" />
            Exporter les données
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}