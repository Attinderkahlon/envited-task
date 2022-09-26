type Props = {
  title: string
  onClick: () => void
}

export default function Button({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className='bg-gradient-to-r text-white sm:text-xl rounded-xl hover:shadow-lg font-bold p-4 from-envited-primary-200 to-envited-primary-100'
    >
      {title}
    </button>
  )
}
