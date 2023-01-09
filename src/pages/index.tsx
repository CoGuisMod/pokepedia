import Head from "next/head";

/* Component imports */
import Navbar from "../components/Navbar";
import RandomPokemon from "../components/RandomPokemon";
import PokemonsGrid from "../components/PokemonsGrid";

import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokepedia</title>
        <meta name="description" content="Pokemon wiki, made with the API." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content */}
      <main className={`${poppins.variable} font-sans`}>
        {/* Navbar */}
        <Navbar />

        <section className="flex flex-col sm:flex-row gap-4 gap-y-24 p-4">
          <RandomPokemon />

          <PokemonsGrid />
        </section>
      </main>
    </>
  );
}
