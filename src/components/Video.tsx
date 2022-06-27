import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css';

export function Video() {
	return (
		<div className="flex-1">
			<div className="bg-black flex">
				<div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video border border-gray-200">
					<Player>
						<Youtube videoId="AivGvJIMSxI"/>
						<DefaultUi/>
					</Player>
				</div>
			</div>
			<div className="p-8  max-w-[1100px] mx-auto">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">Aula 01 - Abertura do Evento</h1>
						<p className="text-gray-200 mt-4 leading-relaxed">Configurando e iniciando o projeto com React</p>

						<div className="flex items-center gap-4 mt-6">
							<img 
							src="https://github.com/Hsouzasantos.png" 
							alt="Perfil"
							className="h-16 w-16 rounded-full border-2 border-blue-500"
							/>

							<div>
								<strong className="font-bold text-2xl block">Hugo Santos</strong>
								<span className="text-gray-200 text-sm block leading-relaxed">Teacher for front-end applications</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-color">
							<DiscordLogo size={24} /> Comunidade do Discord
						</a>
						<a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-300 hover:text-gray-900 transition-colors">
							<Lightning size={24} /> Acesse o desafio
						</a>
					</div>
				</div>
			</div>
			<div className="gap-8 mt-12 grid grid-cols-2">
				<a href="" className="bg-gray-700 rounded overflow-hidden flex flex-row items-stretch gap-6 hover:bg-gray-600 transition-colors">
					<div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDown size={40}/></div>
					<div className="py-6 leading-relaxed"> 
						<strong className="text-2xl">Material Complementar</strong>
						<p className="text-sm ext-gray-200 mt-2">
							Acesse seu material complementar para acelerar seu desenvolvimento
						</p>
					</div>
					<div className="h-full p-6 flex items-center"> <CaretRight size={24}/></div>
				</a>
				<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
					<div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDown size={40}/></div>
					<div className="py-6 leading-relaxed"> 
						<strong className="text-2xl">Material Complementar</strong>
						<p className="text-sm ext-gray-200 mt-2">
							Acesse seu material complementar para acelerar seu desenvolvimento
						</p>
					</div>
					<div className="h-full p-6 flex items-center"> <CaretRight size={24}/></div>
				</a>


			</div>
		</div>
	)
}