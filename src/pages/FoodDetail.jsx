import { useParams } from "react-router-dom";

const foodDetails = {
  1: {
    name: "Jollof Rice",
    description: "A classic West African rice dish cooked in a flavorful tomato base.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT335FsFPYlXZSAHEr5liQYmL0TU9lIOkuZRdYd49cOpiSbf-h1KXdSiKazJZg0cG4IZn8&usqp=CAU",
  },
  2: {
    name: "Egusi Soup",
    description: "A rich Nigerian soup made with ground melon seeds, meat, and leafy vegetables. ",
    img: "https://i0.wp.com/dobbyssignature.com/wp-content/uploads/2015/06/egusi-soup.jpg?fit=640%2C426&ssl=1",
  },
  3: {
    name: "Moi Moi",
    description: "A steamed bean pudding made from a mixture of peeled beans, onions, and spices.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6S3ndzKKXXG6s1n1VRfqw9q6rjPO4FTTsjpHYNfw9siOONhZJ38krjXLjjxQ0fK1TlvY&usqp=CAU",
  },
  4: {
    name: "Fried Rice",
    description: "Rice stir-fried with vegetables, proteins, and spices for a savory delight.",
    img: "https://kikifoodies.com/wp-content/uploads/2024/01/5447E9BE-44B1-428D-8E53-27805DFB7F27.jpeg",
  },
  5: {
    name: "Efo Riro",
    description: "A Nigerian spinach stew loaded with spices and assorted meats.",
    img: "https://pbs.twimg.com/media/FvHzmBTXsAANG63?format=jpg&name=large",
  },
  6: {
    name: "Amala and Ewedu",
    description: "Yam flour (amala) paired with ewedu soup, a Yoruba delicacy.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhHPqHaf1Qbw60UuRBCA_B-QaYrBWSC0gR51-LUzPHWJLO3bTMK9PTDAyIg2hmXwbzrY&usqp=CAU",
  },
  7: {
    name: "Banga Soup",
    description: "A palm fruit soup popular in the Niger Delta, served with starch or rice.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK6-nLb5VuoIBs-aelEfiQ4woqFTbnfjs0pPV-r1ZZz0grryHlIfg9-ros_nLvjbCSeM&usqp=CAU",
  },
  8: {
    name: "Pounded Yam and Egusi",
    description: "A smooth yam dish paired with egusi soup, a Nigerian favorite.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpkrzZ4VtBKfoCRfpx3UaUEs8AvhCqcS9WQ&s",
  },
};

const FoodDetail = () => {
  const { id } = useParams();
  const food = foodDetails[id];

  if (!food) return <p>Food not found!</p>;

  return (
    <section className="p-8 text-center">
      <img
        src={food.img}
        alt={food.name}
        className="w-full max-w-md mx-auto rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4">{food.name}</h2>
      <p className="text-lg">{food.description}</p>
    </section>
  );
};

export default FoodDetail;