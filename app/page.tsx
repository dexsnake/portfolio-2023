'use client'

import Image from 'next/image'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export default function Home() {
	return (
		<>
			<section>
				<div className="pt-20 sm:pt-32">
					<div className="relative">
						<Image src="https://svgsilh.com/svg/26432.svg" alt="dots pattern" height={150} width={150} className="absolute filter invert opacity-10 -top-6 -left-10" />
						<div>
							<span className="font-semibold text-2xl sm:text-4xl text-emerald-400">Hey there, I&#39;m -</span>
						</div>
						<div className="mb-8">
							<h1 className="text-6xl sm:text-9xl font-extrabold text-white">Travis Butler.</h1>
						</div>
					</div>
					<div className="mb-10">
						<span className="font-semibold text-2xl sm:text-4xl text-gray-500">
							An experienced <span className="text-white">Software Engineer</span> based in the <br className="hidden sm:block" /> Philadelphia suburbs.
						</span>
					</div>
					<div className="mb-10">
						<span className="text-lg sm:text-2xl text-gray-500">
							🧑‍💻 Currently working at <span className="text-emerald-400 hover:text-emerald-300 transition-all hover:underline"><a href="https://grafana.com" target="_blank">Grafana Labs</a></span>.
						</span>
					</div>
					{/* <div className="mb-10">
						<span className="text-lg sm:text-2xl text-gray-500">🚀 Exploring new opportunities and side projects.</span>
					</div> */}
					<div className="flex gap-6">
						<a href="https://www.linkedin.com/in/travisrbutler/" target="_blank">
							<button className="bg-white/5 flex items-center font-semibold gap-2 hover:bg-white/10 text-white px-4 py-3 rounded-lg">
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 448 512"
									className="text-emerald-400"
									aria-hidden="true"
									focusable="false"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
								</svg>
								Linkedin
							</button>
						</a>
						<a href="https://github.com/dexsnake" target="_blank">
							<button className="bg-white/5 flex items-center font-semibold gap-2 hover:bg-white/10 text-white px-4 py-3 rounded-lg">
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 496 512"
									className="text-emerald-400"
									aria-hidden="true"
									focusable="false"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
								</svg>
								Github
							</button>
						</a>
					</div>
				</div>
			</section>
			<section>
				<div className="pt-32">
					<div className="flex items-center">
						<div className="w-full sm:w-1/2">
							<h2 id="about" className="font-extrabold text-2xl text-white mb-2">
								⚡️ About Me
							</h2>
							<p className="text-gray-500 max-w-xl mb-3 text-lg">
								I am a Software Engineer with 10+ years of experience building full stack web applications, sleek websites and custom software.
							</p>
							<p className="text-gray-500 max-w-xl text-lg">
								I currently work at Grafana Labs as a Senior Software Engineer, building scalable observability and monitoring solutions used by engineering teams worldwide.
							</p>
						</div>
						<div className="hidden w-1/2 sm:flex justify-center">
							<Image
								src="/images/headshot.jpg"
								height={250}
								width={250}
								className="rounded-full bg-emerald-400 p-1 shadow-lg shadow-white/30"
								alt="travis butler headshot"
							/>
						</div>
					</div>
				</div>
			</section>
			{projects.length > 0 && <section>
				<div className="pt-32">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
						<div className="mb-6">
							<h2 id="work" className="font-extrabold text-2xl text-white mb-2">
								🔥 Recent Work
							</h2>
							<p className="text-gray-500 max-w-xl mb-2 text-lg">Here are a few projects I&#39;ve worked on the last few years at ARC.</p>
							{/* <a href="/work" className="text-emerald-400 hover:text-orange-400 flex items-center gap-1 text-xl">
								More projects{' '}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
								</svg>
							</a> */}
						</div>
						{projects.map((p) => (
							<ProjectCard key={p.name} project={p} />
						))}
					</div>
				</div>
			</section>}
		</>
	)
}
