import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";
import { useEffect, useState } from "react";

function ProductPage() {
  const params = useParams();
  const productId = params.productId;

  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://fakestoreapi.com/products/${productId}`;
      try {
        const res = await fetch(url);
        const resText = await res.text();
        const data = resText.length ? JSON.parse(resText) : {};
        return data;
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct().then((data) => {
      setProductData(data);
    });
  }, [productId]);

  // TODO: Add the case where item does NOT exist
  // TODO: Add the buy and cart options
  return (
    <div>
      <Header />
      <NavBar />
      {productData.id ? (
        <div className="w-4/5 m-auto p-8 flex">
          <img className="size-96 mr-auto" src={productData.image} alt="" />
          <div className="w-1/2">
            <h1 className="text-2xl font-medium">{productData.title}</h1>
            <hr className="bg-gray-400 h-[2px]" />
            {productData.price > 30 ? (
              <>
                <span className="pt-2 flex gap-2 text-2xl font-medium">
                  $ {Math.round(productData.price / 6)}
                  <p className="text-lg text-gray-700 self-end">
                    /month (6 months)
                  </p>
                </span>
                <p className="text-sm">With no cost EMI</p>
                <span className="pt-2 flex gap-2 items-center">
                  <p className="text-red-500">
                    -{Math.round(Math.random() * 80)}%
                  </p>
                  <p className="text-lg">$ {productData.price}</p>
                </span>
              </>
            ) : (
              <div className="pt-2 text-2xl font-medium">
                $ {productData.price}
              </div>
            )}
            <hr className="bg-gray-400 h-[2px]" />
            <p className="pt-2">{productData.description}</p>
          </div>
          <div className="ml-auto">
            <div className="w-64 p-4 flex flex-col gap-2 border border-gray-300">
              <div className="text-3xl font-normal">$ {productData.price}</div>
              <p className="text-xl font-normal text-green-900">In stock</p>
              <span className="flex gap-2">
                <p>Qunatity: </p>
                <select>
                  {Array.from({ length: 5 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </span>
              <button className="w-56 h-8 bg-[#FFD814] rounded-2xl">
                Add to cart
              </button>
              <button className="w-56 h-8 bg-[#FFA41C] rounded-2xl">
                Buy now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export { ProductPage };
