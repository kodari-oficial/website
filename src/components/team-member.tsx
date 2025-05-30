
export function TeamMember({ name, role, image, link }: { name: string; role: string; image: string; link: string }) {
  
  const handleTeamMemberClick = () => {
    window.open(link, '_blank')
  }
  
  return (
    <div onClick={handleTeamMemberClick} className='flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg text-center cursor-pointer'>
      <img src={image} alt={name} className='w-24 h-24 rounded-full mb-4' />
      <h3 className='text-lg font-semibold'>{name}</h3>
      <p className='text-sm text-gray-600'>{role}</p>
    </div>
  )
}