// Dependencies
import type { NextApiRequest, NextApiResponse } from 'next'

// Internals
import db from '@/lib/firebase'

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const snapshot = (await db.collection('views').get()).docs
  const views = snapshot.map((snap) => {
    return snap.data().value
  })

  return res.status(200).json({
    total: views.reduce((a, b) => {
      return a + b
    }),
  })
}
