import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:03:22.756Z',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
        user: {
          create: {
            email: 'String304330',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
        toUser: {
          create: {
            email: 'String7965836',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:03:22.756Z',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
        user: {
          create: {
            email: 'String5800527',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
        toUser: {
          create: {
            email: 'String6494593',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:22.756Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
