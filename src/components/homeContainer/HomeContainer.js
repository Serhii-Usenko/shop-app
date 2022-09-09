import React from "react";
import bike from "../../images/bike.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="p-4 flex-1 flex flex-col gap-6 items-start md:items-center justify-center">
        <div className="flex items-end justify-center gap-2">
          <p className="font-oswald text-orange-500">Bike Delivery</p>
          <div className="w-6 h-6 rounded-full overflow-hiden">
            <img src={bike} alt="bike" className="object-contain" />
          </div>
        </div>

        <p className="text-[2rem] font-bold">
          The fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem]">Your City</span>
        </p>

        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsum
          minus, eligendi nulla reiciendis rerum illo molestias tenetur autem
          voluptates in debitis explicabo repellendus, dolorem numquam sint.
          Quas, tenetur qui.
        </p>

        <button
          type="button"
          className="bg-orange-300 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="p-4 bg-orange-100 h-370 lg:w-auto lh:h-650 rounded-lg flex-1"></div>
    </section>
  );
};

export default HomeContainer;
