import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3308343',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-04T21:02:02.408Z',
      },
    },
    two: {
      data: {
        email: 'String9675949',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-04T21:02:02.408Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
