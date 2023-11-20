"use client";
import { AccordionComponent } from "@/components/Accordion";
import { Button } from "keep-react";

export default function Home() {
  return (
    <main>
      <h1>Hello devlyrics</h1>
      <Button size="md">Default</Button>
      <AccordionComponent />
    </main>
  );
}
