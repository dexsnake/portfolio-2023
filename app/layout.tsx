import './globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { projects } from '@/data/projects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'Travis Butler | Portfolio', description: 'The portfolio website for Travis Butler, Software Engineer' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={twMerge('bg-gray-950 antialiased', inter.className)}>
				<header id="header">
					<div className="px-12 py-4 border-b border-b-gray-900 flex justify-between items-center">
						<div>
							<span className="text-gray-400 font-semibold text-3xl tracking-widest">
								{'{'}
								<span className="text-white">T</span>
								{'}'}
							</span>
						</div>
						{projects.length > 0 && (
							<div className="text-white font-medium flex gap-8">
								<a href="#about" className="hover:bg-white/5 rounded-lg px-3 py-2 transition-all">
									About
								</a>
								<a href="#work" className="hover:bg-white/5 rounded-lg px-3 py-2 transition-all">
									Work
								</a>
							</div>
						)}
					</div>
				</header>
				<main className="max-w-screen-xl mx-auto px-4">{children}</main>
				<footer className="pt-10 pb-2">
					<div className="flex justify-center">
						<span className="text-gray-300 text-sm">
							Built with <span className="text-emerald-400">Next.js</span> & <span className="text-emerald-400">Tailwind</span>. Hosted on{' '}
							<span className="text-emerald-400">Netlify</span>
						</span>
						.
					</div>
				</footer>
			</body>
		</html>
	)
}
