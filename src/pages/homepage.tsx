import Button from '../components/Button'

export default function Homepage() {
  return (
    <div className='flex bg-envited-secondary-100 min-h-screen pt-24 pb-10 justify-center'>
      <div className='grid relative h-min gap-8 lg:w-full lg:h-auto xl:mx-96 lg:mx-52'>
        <div className='grid h-min ml-auto my-auto lg:w-80 justify-end gap-6'>
          <div className='grid gap-2 text-center lg:text-right'>
            <h1 className='font-bold text-4xl sm:text-5xl'>
              Imagine if{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-envited-primary-200 to-envited-primary-100 block'>
                Snapchat
              </span>{' '}
              had events.
            </h1>
            <span className='text-envited-neutral-600 sm:text-lg'>
              Easily host and share events with your friends across any social
              media.
            </span>
          </div>
          <img
            src='/assets/images/Landing page image.svg'
            alt='landing img'
            className='w-44 sm:w-60 lg:w-auto mx-auto shadow-sm rounded-xl left-0 block lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2'
          />
          <div className='lg:w-auto lg:ml-auto lg:mx-0 mx-auto'>
            <Button onClick={() => console.log()} title='🎉 Create my event' />
          </div>
        </div>
      </div>
    </div>
  )
}
