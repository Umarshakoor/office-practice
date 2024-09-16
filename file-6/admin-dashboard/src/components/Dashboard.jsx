import { useState, useEffect } from "react";

const initialCards = [
  {
    id: 1,
    title: "card 1",
    description: "description 1",
    date: new Date().toLocaleDateString("en-GB"),
    active: "true",
  },
  {
    id: 2,
    title: "card 2",
    description: "description 2",
    date: new Date().toLocaleDateString("en-GB"),
    active: "false",
  },
];

const Dashboard = () => {
  const [cards, setCards] = useState(() => {
    const savedCards = sessionStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : initialCards;
  });

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      description: `Description ${cards.length + 1}`,
      date: new Date().toLocaleDateString("en-GB"),
      active: true,
    };
    const updatedCard = [...cards, newCard];
    setCards(updatedCard);
    sessionStorage.setItem("cards", JSON.stringify(updatedCard));
  };

  useEffect(() => {
    sessionStorage.setItem("cards", JSON.stringify(cards));
  }),
    [cards];

  return (
    <div className="dashboard">
      <button onClick={addCard}></button>
      <div className="card-container">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>{card.date}</p>
            <p>{card.active ? "Active" : "Inactive"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
