import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-04T21:02:53.220Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:02:53.220Z',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
        santa: {
          create: {
            email: 'String5818178',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
        person: {
          create: {
            email: 'String8171962',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-04T21:02:53.220Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:02:53.220Z',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
        santa: {
          create: {
            email: 'String8541484',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
        person: {
          create: {
            email: 'String9335773',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:53.220Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
