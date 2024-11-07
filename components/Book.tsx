import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type BookProps = {
  title: string;
  author: string;
  description: string;
};

const Book = (props: BookProps) => {
  return (
    <div>
      <Card className="w-64 h-64">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.author}</CardDescription>
        </CardHeader>
        <CardFooter>{props.description}</CardFooter>
      </Card>
    </div>
  );
};

export default Book;
