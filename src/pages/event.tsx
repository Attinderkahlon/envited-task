import OptionTile from '../components/OptionTile'
import { GrLocation } from 'react-icons/gr'
import { VscCalendar } from 'react-icons/vsc'

export default function Event() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col gap-4 max-w-6xl lg:justify-between lg:flex-row-reverse lg:w-full justify-center'>
        <div>
          <img
            src='/assets/images/Birthday cake.png'
            alt='birthday cake'
            className='w-96 lg:w-[500px]'
          />
        </div>
        <div className='grid gap-4 h-min'>
          <div>
            <h1 className='text-envited-primary-400 font-semibold lg:text-5xl'>
              Birthday Bash
            </h1>
            <p className='text-envited-neutral-500'>
              Hosted by <b>Elysia</b>
            </p>
          </div>
          <OptionTile
            icon={<VscCalendar size={26} />}
            heading='18 August 6:00PM'
            subHeading='to 19 August 1:00PM UTC +10'
          />
          <OptionTile
            icon={<GrLocation size={26} />}
            heading='Street name'
            subHeading='Suburb, State, Postcode'
          />
        </div>
      </div>
    </div>
  )
}
