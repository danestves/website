// Dependencies
import useSWR from 'swr'
import { Gif } from '@giphy/react-components'
import { IGif } from '@giphy/js-types'

// Libraries
import fetcher from '@/lib/fetcher'

export default function Giphy({ id }: { id: string }): JSX.Element | null {
  const { data } = useSWR(`/api/giphy/${id}`, fetcher)
  const gif = ((data as unknown) as Record<string, unknown>)?.gif as IGif

  return gif ? <Gif gif={gif} width={300} /> : null
}
