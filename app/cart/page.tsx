import Image from "next/image";
import React from "react";
import Snake from "@/public/snake.png";

const Cart = () => {
  return (
    <>
      <div className="h-fit flex items-center justify-center text-2xl md:text-4xl">
        My Cart
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex flex-col justify-between gap-5 lg:flex-row md:p-12">
          <div className="flex flex-col gap-5 md:flex-row md:gap-20 flex-wrap content-center">
            <div className="flex flex-col items-center md:gap-5 ">
              <span className="text-center text-xl md:text-2xl">Product</span>
              <Image src={Snake} alt="no image" width={100} height={200} />
            </div>
            <div className="w-1/2 flex flex-col items-center md:gap-5">
              <span className="md:text-center text-xl md:text-2xl">
                Description
              </span>
              <div className="items-center">
                <div className="text-xl">Snake Plant</div>
                <div>
                  <li>filter indoor air</li>
                  <li>remove toxic pollutants.</li>
                  <li>easy to care for.</li>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around lg:flex-col gap-5">
            <div className="text-start lg:text-center text-xl md:text-2xl">
              Price
            </div>
            <div className="md:text-xl">$200</div>
          </div>
        </div>
        <div className="flex p-5 justify-end">
          <button className="bg-blue-500 flex self-center xl:text-xl text-white py-2 px-4 rounded-2xl mt-4 hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
