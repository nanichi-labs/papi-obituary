"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { gsap } from "gsap";
import Image from "next/image";
import { Corinthia } from "next/font/google";
import Link from "next/link";

Amplify.configure(outputs);

const client = generateClient<Schema>();

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: "400"
});

export default function App() {

  return (
    <main className="p-2 bg-gradient-to-r from-white via-gray-100 to-white min-h-[100lvh]">

      <section>
        <div className={`container m-auto`}>
          <div className={`grid grid-cols-4 gap-4`}>
            <div className={`col-span-2`}>
              <p className="text-1xl uppercase">En </p>
              <p className={`text-4xl md:text-5xl font-bold ${corinthia.className}`}>Memoria De</p>
            </div>
            <div className={`col-span-2 text-right`}>
              <p className="text-1xl uppercase">In Loving</p>
              <p className={`text-4xl md:text-5xl font-bold ${corinthia.className}`}>Memory</p>
            </div>
            <div className={`col-span-4 text-center`}>
              <div className={`rounded-full border-2 border-gray-200 w-[320px] h-[320px] md:w-[400px] md:h-[400px] m-auto mb-6 flex justify-center items-center`}>
                <img className="rounded-full border-2 border-gray-300 w-[90%] h-[90%]" src={`https://papiobituary.s3.us-east-1.amazonaws.com/papi.jpg`} />
              </div>
              <h1 className={`text-7xl md:text-9xl ${corinthia.className} text-blue-900 mb-6`}>Angel Centeno</h1>
              <p className={`font-bold uppercase tracking-widest relative z-10 mb-10 bg-white py-2`}>Feb. 27, 1966 - Nov. 14, 2024</p>
            </div>
            <div className={`col-span-4 text-[1.2em] md:text-[1.4em]`}>
              <div className={`max-w-[800px] m-auto mb-20 px-2`}>
                <p className={`mb-4`}>If you knew our dad, you got to know the most amazing human being in the entire world! His contagious smile and laugh, his bright spirit would light up anywhere and everywhere he went.</p>
                <p className={`mb-4`}>Over a year ago, he got diagnosed with biliary duct cancer that ultimately led to severe cirrhosis. Dad gave cancer a run for its money, and along the way, Mom was his ultimate supporter. Not once did she leave his side; it was always them against all odds.</p>
                <p className={`mb-2`}>So many great people have reached out and asked how they can help and we are so very grateful for every donation during this difficult time.</p>
                <p className={`mb-2`}>With love,</p>
                <p className={`text-5xl ${corinthia.className}`}>Jeisley y Angel</p>
              </div>
              <div className={`bg-white`}>
                <div className={`max-w-[800px] m-auto mb-20 px-2 py-20`}>
                  <h2 className={`text-3xl font-bold mb-4`}>Donate with Zelle</h2>
                  <p>Please send Zelle donations to <strong>407-338-9299</strong>.</p>
                  {/* <hr className="mb-10" />
                  <h2 className={`text-3xl font-bold mb-5`}>Donate with PayPal</h2>
                  <p>Please send any Zelle donations to <strong>407-338-9299</strong></p> */}
                </div>
              </div>
              <div className={`max-w-[800px] m-auto mb-20 px-2`}>
                <h2 className={`text-3xl font-bold mb-4`}>Location</h2>
                <p>Expected soon.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
