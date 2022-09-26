type Props = {
  title: string
  onClick: () => void
  extraClasses?: string
}

export default function Button({ title, onClick, extraClasses }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r text-white sm:text-xl rounded-xl hover:shadow-lg font-bold p-4 from-envited-primary-200 to-envited-primary-100 ${extraClasses}`}
    >
      {title}
    </button>
  )
}
