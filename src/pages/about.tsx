import { Page } from '../components/page-body'
import { TeamMember } from '../components/team-member'
import Pedro from '../assets/images/profile-pedro.png'

export function About() {
  return (
    <Page>
      <section className='flex flex-col items-center justify-center w-full pt-10 lg:min-h-[calc(100vh-15rem)]'>
        <h1 className='text-2xl text-[#0077FF] font-semibold'>A equipe</h1>
        <div className='grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-4 p-4 mt-8'>
          <TeamMember name='Anthonius Miguel' role='CO-Founder & Backend Developer' image='pedro' link='' />
          <TeamMember name='Sávio Dias' role='CO-Founder & Backend Developer' image='pedro' link='' />
          <TeamMember name='Igor Souza' role='CO-Founder & Frontend Developer' image='pedro' link='' />
          <TeamMember name='Pedro Luca Prates' role='CO-Founder & Frontend Developer' image={Pedro} link='https://pedroluca.tech' />
        </div>
      </section>
    </Page>
  )
}