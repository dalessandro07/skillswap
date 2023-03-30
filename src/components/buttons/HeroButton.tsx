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
      className="px-3.5 py-2 bg-orange-600 hover:bg-orange-700 transition-all duration-200 w-max rounded-sm"
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
            : 'bg-orange-600 hover:bg-orange-700'
          : 'bg-orange-600 hover:bg-orange-700'
      } px-3.5 py-2 transition-all duration-200 w-max rounded-sm`}>
      {children}
    </button>
  )
}
