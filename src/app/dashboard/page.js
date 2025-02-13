// src/app/dashboard/page.js

"use client"
import { Button } from '../../components/ui/button';
import { motion } from "framer-motion"

export default function DashboardPage() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Dashboard content goes here */}

      {/* Checking if Shadcn styling is being applied so the library components are being used correctly. */}
    <Button variant="destructive">Destructive Button</Button>
        <motion.div
      initial={{ opacity: 0.2, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
        <Button variant="outline">Outlined Button</Button>
    </motion.div>
    <Button variant="ghost">Ghost Button</Button>
    </div>
  );
}
