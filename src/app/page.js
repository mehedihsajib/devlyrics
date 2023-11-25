"use client";

import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <main className="py-8">
      <div className="container">
        <div className="grid grid-cols-12 gap-4">
          <aside className="bg-zinc-800 col-span-4 p-4 rounded-sm">
            <h2 className="text-zinc-50">Sidebar</h2>
          </aside>
          <section className="col-span-8">
            <BlogList />
          </section>
        </div>
      </div>
    </main>
  );
}
