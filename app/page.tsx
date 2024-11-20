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

type Donation = {
	name: string;
	format: string;
	contribution: number;
};

export default function App() {
	const [total, setTotal] = useState(0);
	const [percent, setPercent] = useState(0);
	const goal = 7000;

	const donations: Donation[] = [
		{
			name: 'Brian Buitrago',
			format: 'Zelle',
			contribution: 100,
		},
		{
			name: 'Jacinto Lopez',
			format: 'Zelle',
			contribution: 25,
		},
		{
			name: 'Adalberto Galindo',
			format: 'Zelle',
			contribution: 100,
		},
		{
			name: 'William Hernandez',
			format: 'Zelle',
			contribution: 400
		},
		{
			name: 'Carmen Cordero',
			format: 'CashApp',
			contribution: 10,
		},
		{
			name: 'Wilma Roman',
			format: 'Zelle',
			contribution: 500,
		},
		{
			name: 'Yennifer Jaime',
			format: 'PayPal',
			contribution: 100,
		},
		{
			name: 'Maria Castillo',
			format: 'CashApp',
			contribution: 150,
		},
		{
			name: 'Stephy',
			format: 'CashApp',
			contribution: 60,
		},
		{
			name: 'Elba Roman',
			format: 'Zelle',
			contribution: 250,
		},
		{
			name: 'Jorge Valdivia',
			format: 'Paypal',
			contribution: 500,
		},
		{
			name: 'Yareni Barron',
			format: 'Zelle',
			contribution: 40,
		},
		{
			name: 'Oscar Rodriguez',
			format: 'Zelle',
			contribution: 100,
		},
		{
			name: 'Andrea Gollen',
			format: 'Zelle',
			contribution: 100,
		},
	];
	const shuffledDonations = [...donations].sort(() => Math.random() - 0.5);


	useEffect(() => {
		const sum = donations.reduce((acc, donation) => acc + donation.contribution, 0);
		// console.log(sum);
		
		const getPercent = Number(sum*100/goal).toFixed(0);
		setTotal(sum);
		setPercent(Number(getPercent));
	}, [donations]);

	return (
		<main className="p-4 bg-gradient-to-r from-white via-gray-100 to-white min-h-[100lvh]">

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

							<a href="#donate" className="mb-4 bg-blue-900 text-white rounded-md py-3 px-10 mr-2 uppercase text-md md:text-1xl inline-block hover:bg-black transition-colors">Donate</a>
							<a href="#location" className="mb-4 bg-blue-800 text-white rounded-md py-3 mr-2 px-10 uppercase text-md md:text-1xl inline-block hover:bg-black transition-colors">Location</a>
							<a href="#live-stream" className="mb-4 bg-blue-800 text-white rounded-md py-3 px-10 uppercase text-md md:text-1xl inline-block hover:bg-black transition-colors">Live Stream</a>

						</div>
						<div className={`col-span-4 text-[1.2em] md:text-[1.4em]`}>
							<div className={`max-w-[800px] m-auto mb-20`}>
								<p className={`mb-4`}>If you knew our dad, you got to know the most amazing human being in the entire world! His contagious smile and laugh, his bright spirit would light up anywhere and everywhere he went.</p>
								<p className={`mb-4`}>Over a year ago, he got diagnosed with biliary duct cancer that ultimately led to severe cirrhosis. Dad gave cancer a run for its money, and along the way, Mom was his ultimate supporter. Not once did she leave his side; it was always them against all odds.</p>
								<p className={`mb-2`}>So many great people have reached out and asked how they can help and we are so very grateful for every donation during this difficult time.</p>
								<p className={`mb-2`}>With love,</p>
								<p className={`text-5xl ${corinthia.className}`}>Jeisley y Angel</p>
							</div>
						</div>
					</div>
				</div>

				<div id="location" className={`bg-white`}>
					<div className={`container m-auto`}>
						<div className={`grid grid-cols-4 gap-4`}>
							<div className={`col-span-4`}>
								<div className={`max-w-[800px] m-auto mb-20 py-20 text-3xl`}>
									<p className={`text-lg uppercase font-bold`}>Date</p>
									<p className={`mb-10`}>Saturday, November 23rd, 2024</p>
									<p className={`text-lg uppercase font-bold`}>Time</p>
									<p className={`mb-10`}>4 PM - 8 PM</p>
									<p className={`text-lg uppercase font-bold`}>Location</p>
									<p>Funeraria San Juan / San Juan Funeral Home</p>
									<p className={`mb-10`}>3189 S John Young Pkwy,<br />Kissimmee, FL 34746</p>
									
									<p className={`text-lg uppercase font-bold`}>Map</p>
									<div className="w-full pt-[56.25%] relative">
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112421.06745434884!2d-81.46735352011142!3d28.29352671968435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd837f4bda75f9%3A0x1ea308684a5064ec!2sFuneraria%20San%20Juan%20Funeral%20Home%20-%20Young%20Parkway!5e0!3m2!1sen!2sus!4v1731966650567!5m2!1sen!2sus" className="w-full h-full absolute inset-0" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="live-stream">
					<div className={`container max-w-[1200px] m-auto py-20`}>
						<div className="mb-6">
							<h2 className="text-lg uppercase font-bold">Live Stream</h2>
							<p>A webcast for the services of Angel L Centeno Rodriguez can be viewed from 5 PM - 8 PM.</p>
							<a className="text-blue-600 underline text-sm" href="https://view.oneroomstreaming.com/index.php?data=MTczMTk2NTczOTMzNzQ4MCZvbmVyb29tLWFkbWluJmNvcHlfbGluaw==" target="_blank"><em>Open live stream in new window</em></a>
						</div>
						<div className={`relative pt-[60%]`}>
							<iframe
								src="https://view.oneroomstreaming.com/index.php?data=MTczMTk2NTczOTMzNzQ4MCZvbmVyb29tLWFkbWluJmNvcHlfbGluaw=="
								className="w-full h-full absolute inset-0"
							/>
						</div>
					</div>
				</div>

				<div id="donate" className={`bg-white`}>
					<div className={`container max-w-[1200px] m-auto py-20`}>
						<div className={`grid grid-cols-6 gap-8 text-[1.1em]`}>
							<div className={`col-span-6 mb-10`}>
								<div className={`w-100 max-w-[600px] m-auto`}>
									<div className="mb-2">
										<h2 className={`text-lg font-bold mb-0 uppercase`}>Goal</h2>
										<p>{percent}% raised of <span className="text-4xl">${Number(goal).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
									</div>
									<div className="w-100 bg-gray-200 h-4 relative rounded-full overflow-hidden border-solid border-2 border-blue-900">
										<div className={`absolute z-10 top-0 left-0 h-full bg-blue-900`} style={{ width: `${percent}%` }}></div>
									</div>
									<div className="overflow-hidden whitespace-nowrap py-4">
										<div className="flex animate-marquee space-x-8">
											{ shuffledDonations.map((item, index) => (
												<span key={index} className="mx-8 text-blue-900 text-lg font-bold">
													<em>{item.name[0]}{item.name[1]}**** ****</em> - {item.format} - ${item.contribution}
												</span>
											)) }
										</div>
									</div>
								</div>
							</div>
							<div className={`col-span-6 md:col-span-2`}>
								<h2 className={`text-lg font-bold mb-0 uppercase`}>Donate with Zelle</h2>
								<p className={`mb-2`}>Please send Zelle donations to <strong>407-338-9299</strong> or use this QR code:</p>
								<img className="w-[200px] m-auto" src="https://papiobituary.s3.us-east-1.amazonaws.com/zelle-mami.jpg" />
							</div>
							<div className={`col-span-6 md:col-span-2`}>
								<h2 className={`text-lg font-bold mb-0 uppercase`}>Donate with PayPal</h2>
								<p className={`mb-2`}>Please send PayPal donations to <strong>jeisleyann@gmail.com</strong></p>
								<img className="w-[200px] m-auto" src="https://papiobituary.s3.us-east-1.amazonaws.com/paypal.jpg" />
							</div>
							<div className={`col-span-6 md:col-span-2`}>
								<h2 className={`text-lg font-bold mb-0 uppercase`}>Donate with Cash App</h2>
								<p className={`mb-2`}>Please send CashApp donations to <strong>$angcenteno</strong></p>
								<img className="w-[250px] m-auto" src="https://papiobituary.s3.us-east-1.amazonaws.com/cashapp.jpg" />
							</div>
						</div>
					</div>
				</div>

			</section>
			
		</main>
	);
}
