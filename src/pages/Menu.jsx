import { Link } from "react-router-dom";

const menuItems = [
  { id: 1, name: "Jollof Rice", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xDqvI6nyuEa7LQZUj16iIeZ3H9ItNM8HvRy9ji_Vm46ePuHlia9RtOmUnOB7CPj-NEc&usqp=CAU" },
  { id: 2, name: "Egusi Soup", img: "https://img-global.cpcdn.com/recipes/fa56709e08d06641/680x482cq70/egusi-soup-recipe-main-photo.jpg" },
  { id: 3, name: "Moi Moi", img: "https://i0.wp.com/casekitchen.ca/wp-content/uploads/2024/04/moi-moi.png?fit=658%2C277&ssl=1" },
  { id: 4, name: "Fried Rice", img: "https://allnigerianfoods.com/wp-content/uploads/fried_rice_recipe.jpg" },
  { id: 5, name: "Efo Riro", img: "https://www.mydiasporakitchen.com/wp-content/uploads/2022/02/B04F4133-B5D1-4000-A943-C1BA652C377D-768x1024.jpeg" },
  { id: 6, name: "Amala and Ewedu", img: "https://auntymimiskitchen.com/wp-content/uploads/2023/10/Amala-and-ewedu.png" },
  { id: 7, name: "Banga Soup", img: "https://www.myactivekitchen.com/wp-content/uploads/2015/03/niger-delta-banga-soup-recipe-img-7-500x375.jpg" },
  { id: 8, name: "Pounded Yam", img: "https://www.atravel.blog/content/images/Pounded_Yam_and_Egusi.webp" },
];

const Menu = () => {
  return (
    <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {menuItems.map((item) => (
        <Link
          to={`/menu/${item.id}`}
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">{item.name}</h3>
        </Link>
      ))}
    </section>
    
  );
};

export default Menu;