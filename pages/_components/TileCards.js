import React from "react";
import Card from "./Card";
import Margin from "./Margin";

const cardData = [
  {
    title: "Impact",
    body: "Trusted and proven in supporting and advising Chairs to ensure better boards, better organisations and better-connected economies",
    imageURL: "/roads.png",
    imageAlt: "roads",
  },
  {
    title: "Community",
    body: "A community that reinvests in furthering knowledge, broader support and education to the community of Chairs, whether public, private, social or not for profit",
    imageURL: "/stairs.png",
    imageAlt: "stairs",
  },
  {
    title: "Education",
    body: "Serving to connect, convene, and directly support those who lead boards. Capturing, creating and sharing collective knowledge and insights for the growth of all",
    imageURL: "/flowers.png",
    imageAlt: "flowers",
  }
];

export default function TileCards() {
  return (
    <div className="bg-tertiary">
    <Margin>
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between py-36 gap-y-10 sm:gap-x-14">
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              body={card.body}
              imageURL={card.imageURL}
              imageAlt={card.imageAlt}
              className="snap-center"
            />
          );
        })}
      </div>
    </Margin>
    </div>
  );
}
