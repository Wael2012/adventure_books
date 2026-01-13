import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { books } from "@/lib/books";
import { BookOpen, MapPin } from "lucide-react";

/**
 * Design Philosophy: Literaire Elegantie
 * - Dark navy background (#1a2a4a) with gold accents (#d4af37)
 * - Playfair Display for elegant headings
 * - Asymmetric layout with rich typography
 * - Premium, refined aesthetic celebrating adventure literature
 */
export default function Home() {
  // Group books by category
  const categories = Array.from(new Set(books.map((book) => book.category)));
  const booksByCategory = categories.map((category) => ({
    category,
    books: books.filter((book) => book.category === category),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <BookOpen className="w-16 h-16 text-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 drop-shadow-lg">
            Literatuurlijst
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-light">
            Ontdek de meest spannende en inspirerende verhalen uit de VKO-literatuurlijst
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => {
                document.getElementById("books")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Verken de Boeken
            </Button>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              Onze Collectie
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {books.length} boeken, ingedeeld in {categories.length} categorieën
            </p>
          </div>

          {/* Categories */}
          {booksByCategory.map((section) => (
            <div key={section.category} className="mb-16">
              <h3 className="text-3xl font-bold text-accent mb-8 pb-4 border-b border-accent/30">
                {section.category}
              </h3>

              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {section.books.map((book) => (
                  <Card
                    key={book.id}
                    className="bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 group overflow-hidden"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <BookOpen className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        {book.year && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                            {book.year}
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                        {book.title}
                      </CardTitle>
                      <CardDescription className="text-accent font-semibold">
                        {book.author}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {book.summary}
                      </p>
                      <Button
                        asChild
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group-hover:shadow-lg transition-all"
                      >
                        <a
                          href="https://bibliotheek.be/mijn-bibliotheek"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          Vind in Bibliotheek
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60 mb-2">
            © 2025 Literatuurlijst. Alle boeken zijn beschikbaar in bibliotheken in Oost-Vlaanderen.
          </p>
          <p className="text-sm text-foreground/40">
            Bron: VKO Opwijk Literatuurlijst 2025-2026
          </p>
        </div>
      </footer>
    </div>
  );
}
