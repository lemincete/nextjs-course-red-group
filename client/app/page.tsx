import { createMetadata } from "@/src/utils/createMetadata";

import Home from "@/src/components/screens/home/Home";

import { NextPage } from "next";

export const metadata = createMetadata('Home', 'Home');


const HomePage: NextPage = () => {
  return <Home />
}

export default HomePage;
