import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String2714046',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:37.185Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:02:37.185Z',
            updatedAt: '2023-12-04T21:02:37.185Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String2194526',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:02:37.185Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:02:37.185Z',
            updatedAt: '2023-12-04T21:02:37.185Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
