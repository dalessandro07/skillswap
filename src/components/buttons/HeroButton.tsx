import Link from 'next/link'

export default function HeroButton({
  children,
  asLink = {
    href: '',
    value: false
  },
  asFormButton = {
    value: false,
    isLoading: false
  }
}: {
  children: string | JSX.Element
  asLink?: {
    href: string
    value: boolean
  }
  asFormButton?: {
    value: boolean
    isLoading: boolean
  }
}) {
  return asLink.value ? (
    <Link
      className="px-5 py-2.5 bg-orange-600 hover:bg-transparent border-orange-600 hover:text-orange-600 border transition-all duration-200 w-max rounded-md"
      href={asLink.href}>
      {children}
    </Link>
  ) : (
    <button
      disabled={asFormButton.isLoading}
      type={asFormButton.value ? 'submit' : 'button'}
      className={`${
        asFormButton.value
          ? asFormButton.isLoading
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-orange-600 hover:bg-transparent border-orange-600 hover:text-orange-600'
          : 'bg-orange-600 hover:bg-transparent border-orange-600 hover:text-orange-600'
      } px-4 py-2.5 border transition-all duration-200 w-max rounded-md`}>
      {children}
    </button>
  )
}
