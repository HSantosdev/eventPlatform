import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, Circle, DiscordLogo, FileArrowDown, Lightning, RocketLaunch } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css';


const GET_LESSONS_BY_SLUG_QUERY = gql`
query GetLessonsBySlug ($slug: String) {
	lesson(where: {slug: $slug}) {
		title
		videoId
		description
		teacher {
			name
			bio
			avatarURL
		}
	}
}
`

interface GetLessonsBySlugResponse {
	lesson: {
		title: string;
		videoId: string;
		description: string;
		teacher: {
			bio: string;
			avatarURL: string;
			name: string;
		}
	}
}

interface VideoProps {
	lessonSlug: string;
}
export function Video(props: VideoProps) {

	const { data } = useQuery<GetLessonsBySlugResponse>(GET_LESSONS_BY_SLUG_QUERY, {
		variables: {
			slug: props.lessonSlug
		}
	});

	console.log(data);

	if (!data) {
		return (
			<div className="flex-1">
				<Circle className="animate-spin size={80}" />
			</div>
		)
	}

	return (
		<div className="flex-1">
			
			<div className="bg-black flex p-0.5">
				<div className="h-full w-full aspect-video border border-gray-200">
					<Player>
						<Youtube videoId={data.lesson.videoId} />
						<DefaultUi />
					</Player>
				</div>
			</div>
			<div className="p-6">
			<div className="p-8  max-w-[1100px]">
				<div className="flex items-start gap-16">
					<div className="flex-1">
						<h1 className="text-2xl font-bold">{data.lesson.title}</h1>
						<p className="text-gray-200 mt-4 leading-relaxed">{data.lesson.description}</p>

						<div className="flex items-center gap-4 mt-6">
							<img
								src={data.lesson.teacher.avatarURL}
								alt="Perfil"
								className="h-16 w-16 rounded-full border-2 border-blue-500"
							/>

							<div>
								<strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
								<span className="text-gray-200 text-sm block leading-relaxed">{data.lesson.teacher.bio}</span>
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
					<div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDown size={40} /></div>
					<div className="py-6 leading-relaxed">
						<strong className="text-2xl">Material Complementar</strong>
						<p className="text-sm ext-gray-200 mt-2">
							Acesse seu material complementar para acelerar seu desenvolvimento
						</p>
					</div>
					<div className="h-full p-6 flex items-center"> <CaretRight size={24} /></div>
				</a>
				<a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
					<div className="bg-green-700 h-full p-6 flex items-center"><FileArrowDown size={40} /></div>
					<div className="py-6 leading-relaxed">
						<strong className="text-2xl">Material Complementar</strong>
						<p className="text-sm ext-gray-200 mt-2">
							Acesse seu material complementar para acelerar seu desenvolvimento
						</p>
					</div>
					<div className="h-full p-6 flex items-center"> <CaretRight size={24} /></div>
				</a>
			</div>
			</div>

			<div className="h-16 w-full bg-gray-700 border-t border-gray-300 flex justify-between items-center">
				{/* <img src="https://i.pinimg.com/736x/92/1f/66/921f6600d00a25dbe39d0315a3904e30.jpg" alt="Logo Foguete" className="h-12 w-12 p-1" />*/}
				<RocketLaunch size={30} className="ml-3" />
     			 <span> Event Platform Todos os direitos reservado</span>
      			<span className="mr-6">Politicas de Privacidade</span>
			</div>
		</div>
	)
}