export default function useRouteTitle({ title, id }: { title: string; id: number }) {
  const routeTitle = title.replace(/ /g, '-').toLocaleLowerCase().concat(`-${id}`)

  return { routeTitle }
}
