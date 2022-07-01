import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {

	const { slug } = useParams<{ slug: string }>();

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex flex-1">
				<div className="flex flex-col">
					{slug ? <Video /> : <div className="w-[60rem] h-[81vh]" />}
					{/* <Video /> */}
					<Footer />
				</div>
				<Sidebar />
			</main>
		</div>
	)
}