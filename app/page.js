
import Category from "./component/Category";
import Hero from "./component/Hero";
import Products from "./component/Products";

export default function Home() {
  return (
    <main className=" ">
      <Hero/>
      <Products/>
      <Category/>
      <Products/>
    </main>
  );
}
