type Props = {
  id: string
  label: string
  type: string
  accept?: string
}

export default function Input({ id, label, type, accept }: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className='block font-medium text-envited-primary-300'
      >
        {label}
      </label>
      <div className='mt-1'>
        <input
          id={id}
          name={id}
          type={type}
          required
          accept={accept}
          className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-envited-primary-400 focus:outline-none focus:ring-envited-primary-400 sm:text-sm'
        />
      </div>
    </div>
  )
}
