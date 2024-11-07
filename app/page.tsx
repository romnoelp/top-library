import Book from "@/components/Book";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { title } from "process";

export default function Home() {
  const books = [
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "A fantasy novel about a hobbit's adventure with a group of dwarves to reclaim a stolen treasure.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society where the government, led by Big Brother, exerts complete control over citizens' lives.",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A novel about racism and injustice in the American South, seen through the eyes of Scout Finch, a young girl.",
    },
    {
      id: 4,
      title: "Moby-Dick",
      author: "Herman Melville",
      description:
        "The epic tale of Captain Ahab's obsessive quest to kill Moby Dick, the giant white whale that maimed him.",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A romantic novel that explores the social and romantic dynamics between Elizabeth Bennet and the wealthy Mr. Darcy.",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A story of love, wealth, and disillusionment in 1920s America, centered around Jay Gatsby's obsession with Daisy Buchanan.",
    },
    {
      id: 7,
      title: "War and Peace",
      author: "Leo Tolstoy",
      description:
        "An epic novel set during the Napoleonic Wars, examining the lives of several aristocratic families in Russia.",
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A story about the struggles of adolescence, following the disillusioned teenager Holden Caulfield as he navigates the world.",
    },
    {
      id: 9,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      description:
        "A novel about a man who remains eternally young while his portrait ages, reflecting the moral decay of his soul.",
    },
    {
      id: 10,
      title: "Frankenstein",
      author: "Mary Shelley",
      description:
        "A gothic novel about a scientist who creates a living creature, only to face the consequences of playing God.",
    },
    {
      id: 11,
      title: "Brave New World",
      author: "Aldous Huxley",
      description:
        "A dystopian vision of a future society where humans are bred for specific roles and individuality is suppressed.",
    },
    {
      id: 12,
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      description:
        "The story of an orphaned girl who becomes a governess, discovering love, mystery, and independence in the process.",
    },
    {
      id: 13,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      description:
        "The first part of Tolkien's epic fantasy trilogy, following Frodo Baggins as he begins his journey to destroy the One Ring.",
    },
    {
      id: 14,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description:
        "A psychological novel about a young man who commits a murder and struggles with his conscience in 19th-century St. Petersburg.",
    },
    {
      id: 15,
      title: "The Odyssey",
      author: "Homer",
      description:
        "An ancient Greek epic poem about the hero Odysseus' long journey home after the Trojan War, filled with adventure and challenges.",
    },
  ];

  return (
    <main className="p-8 w-screen h-screen">
      <Card className="w-full h-full relative">
        <CardHeader>
          <CardTitle>Library</CardTitle>
          <CardDescription>
            A project required to pass the advanced HTML and CSS part of the TOP
            course.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-x-16 gap-y-8 justify-center flex-wrap">
          {books.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
            />
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
