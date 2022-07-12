import { RocketLaunch } from "phosphor-react";
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
				<div className="flex-1 flex-col">
					{slug ? <Video lessonSlug={slug} /> 
					: 
					<div className="h-full w-full">
					<div className="h-[93%] border border-gray-100">
					</div>
					<div className="flex h-[7%] w-full bg-gray-700 border-t border-gray-300 justify-between items-center">
							{/* <img src="https://i.pinimg.com/736x/92/1f/66/921f6600d00a25dbe39d0315a3904e30.jpg" alt="Logo Foguete" className="h-12 w-12 p-1" />*/}
							<RocketLaunch size={30} className="ml-3" />
     						<span> Event Platform Todos os direitos reservado</span>
      						<span className="mr-6">Politicas de Privacidade</span>
						</div>
					</div>}
				</div>
				<Sidebar />
			</main>
		</div>
	)
}