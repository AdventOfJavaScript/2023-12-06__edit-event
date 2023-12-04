import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-04T21:02:46.593Z',
        updatedAt: '2023-12-04T21:02:46.593Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-04T21:02:46.593Z',
        updatedAt: '2023-12-04T21:02:46.593Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
