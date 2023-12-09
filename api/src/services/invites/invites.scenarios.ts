import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-08T22:42:08.308Z',
            updatedAt: '2023-12-08T22:42:08.308Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-08T22:42:08.308Z',
            updatedAt: '2023-12-08T22:42:08.308Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
