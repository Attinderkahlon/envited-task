import Button from '../components/Button'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()

  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' action='#' method='POST'>
            <Input id='host-name' type='text' label='Host Name' />
            <Input id='start-name' type='text' label='Start Date' />
            <Input id='end-date' type='date' label='End Date' />
            <Input id='event-name' type='date' label='Event Name' />
            <Input id='location' type='text' label='Location' />
            <Input
              id='upload-photo'
              type='file'
              label='Upload Photo'
              accept='image/png, image/jpeg'
            />
            <Button
              title='Next'
              onClick={() => navigate('/event')}
              extraClasses='w-full'
            />
          </form>
        </div>
      </div>
    </div>
  )
}
