import Banner from "@/components/sections/banner/Banner";
import Category from "@/components/sections/categories/Category";
import Hero from "@/components/sections/hero/Hero";
import Manual from "@/components/sections/manual/Manual";
import Subscription from "@/components/sections/subscription/Subscription";
import Testimonial from "@/components/sections/testmonial/Testimonial";
import TopSelling from "@/components/sections/topSelling/TopSelling";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Category/>
      <TopSelling/>
      <Manual/>
      <Testimonial/>
      <Banner/>
      <Subscription/>
    </div>
  );
}
