import { RocketLaunch } from "phosphor-react"

export function Footer() {
  return (
    <div className="fixed bottom-0">
      <div className="w-full h-full max-h-16 bg-gray-700 border-t mt-4 border-gray-300 flex justify-between items-center bottom-0">
        {/* <img src="https://i.pinimg.com/736x/92/1f/66/921f6600d00a25dbe39d0315a3904e30.jpg" alt="Logo Foguete" className="h-12 w-12 p-1" />*/}
        <RocketLaunch size={30} className="ml-3" />
        <span> Event Platform Todos os direitos reservado</span>
        <span className="mr-6">Politicas de Privacidade</span>
      </div>
    </div>
  )
}
