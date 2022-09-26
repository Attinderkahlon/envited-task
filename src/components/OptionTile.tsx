import { BsChevronRight } from 'react-icons/bs'
import { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  heading: string
  subHeading: string
}

export default function OptionTile({ icon, heading, subHeading }: Props) {
  return (
    <div className='flex justify-between items-center cursor-pointer'>
      <div className='flex space-x-4'>
        <div className='bg-white h-16 w-16 flex items-center justify-center rounded-2xl border-envited-neutral-200'>
          {icon}
        </div>
        <div className='flex flex-col justify-center '>
          <p className='text-envited-primary-400 font-bold'>{heading}</p>
          <span className='text-envited-neutral-600 text-sm'>{subHeading}</span>
        </div>
      </div>
      <div>
        <BsChevronRight size={22} className='text-envited-neutral-500' />
      </div>
    </div>
  )
}
