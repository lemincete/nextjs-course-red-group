import { NextPage } from "next";

import About from "@/src/components/screens/about/About";

import { createMetadata } from "@/src/utils/createMetadata";


export const metadata = createMetadata('About', 'About')

const AboutPage: NextPage = () => {
    return <About />
}

export default AboutPage;