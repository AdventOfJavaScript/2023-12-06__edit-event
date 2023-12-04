import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-04T21:03:02.075Z',
        user: {
          create: {
            email: 'String5829916',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:02.075Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:03:02.075Z',
            updatedAt: '2023-12-04T21:03:02.075Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-04T21:03:02.075Z',
        user: {
          create: {
            email: 'String7379862',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-04T21:03:02.075Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-04T21:03:02.075Z',
            updatedAt: '2023-12-04T21:03:02.075Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
