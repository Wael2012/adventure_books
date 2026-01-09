"use client";

import { useState } from "react";
import books from "@/lib/books";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">

      {/* Zoekbalk */}
      <input
        type="text"
        placeholder="Zoek op titel of auteur..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input w-full p-2 rounded border mb-4 text-black"
      />

      {/* Boekenlijst */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-card fade-in p-4 border rounded shadow-sm bg-white">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-sm text-gray-700">{book.author}</p>
            <p className="text-xs text-gray-500">{book.category}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
