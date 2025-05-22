import { Page } from '../components/page-body'
import Card1 from '../assets/images/card1-home.jpg'

export function Home() {
  return (
    <Page>
      <section className='flex items-center justify-center w-full pt-10 lg:min-h-[calc(100vh-15rem)]'>
        <div className='flex flex-col lg:flex-row items-center justify-between h-[70%] px-4 gap-4'>
          <div className='flex flex-col items-center justify-center order-2 lg:order-1 lg:w-[37%]'>
            <div className='flex flex-col lg:flex-row items-center justify-center bg-white rounded-2xl shadow-2xl mx-4 lg:mx-0 p-4 gap-4'>
              <img src={Card1} className='h-full rounded-lg lg:rounded-l-lg' />
              <article className=''>
                <h2 className='font-bold'>Criação de Sites Profissionais</h2>
                <p className='text-sm text-gray-800'>
                  Um site bem projetado pode ajudar a aumentar a visibilidade da sua marca, atrair novos clientes e gerar vendas.
                </p>
              </article>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center order-1 lg:order-2 lg:w-[60%]'>
            <div className='flex flex-col items-center justify-center p-4 rounded-lg'>
              <h2 className='text-left w-full font-semibold'>Sobre Nós</h2>
              <p className='text-justify text-sm'>
                Somos uma equipe de profissionais dedicados a ajudar empresas a crescer online. Com anos de experiência em design e desenvolvimento web, estamos prontos para criar um site que atenda às suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}