import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Your Pal Collective",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/* navbar: saving this for when the rest of the UI is built */}
				<nav className="globalNav">
					<ul className="siteNav">
						<li className="home">
							<a>
								<img src="Symbol.svg" />
							</a>
						</li>
						<li>
							<a className="linkText">About PalCollective</a>
						</li>
						<li>
							<a className="linkText">How it works</a>
						</li>
						<li>
							<a className="linkText">Impact</a>
						</li>
						<li>
							<a className="linkText">Get involved</a>
						</li>
						<li>
							<a className="linkText">FAQs</a>
						</li>
						<li>
							<a className="linkText">Contact us</a>
						</li>
						{/* </ul> */}
						{/* <ul className="iconNav"> */}
						<li>
							<button>Search</button>
						</li>
						<li>
							<button>Language</button>
						</li>
					</ul>
				</nav>
				{children}
			</body>
		</html>
	)
}
