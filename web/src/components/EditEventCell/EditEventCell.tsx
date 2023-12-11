import type {
  FindEditEventQuery,
  FindEditEventQueryVariables,
} from 'types/graphql'

import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import EventForm from '../EventForm/EventForm'
import SlideInPanel from '../SlideInPanel/SlideInPanel'

export const QUERY = gql`
  query FindEditEventQuery($id: String!) {
    event(id: $id) {
      id
      date
      name
      sendReminder
    }
  }
`

const UPDATE_EVENT_MUTATION = gql`
  mutation updateEventMutation($id: String!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      date
      id
      name
      sendReminder
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditEventQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
  handleClose,
}: CellSuccessProps<FindEditEventQuery, FindEditEventQueryVariables> & {
  handleClose: () => void
}) => {
  const [updateEvent, { loading }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event was successfully updated.')
      handleClose()
    },
    onError: (error) => {
      toast.error(error.message)
      console.error({ error })
    },
  })

  const handleSubmit = (data) => {
    // const dateString = data.eventDate.toISOString().split('T')[0] // convert to 'YYYY-MM-DD' format
    console.log({ data })

    const eventDate = new Date(data.eventDate) // create a new Date object
    console.log({ eventDate })
    // let dateString = eventDate.toISOString().split('T')[0] // convert to 'YYYY-MM-DD' format

    updateEvent({
      variables: {
        id: event.id,
        input: {
          name: data.eventName,
          date: data.eventDate,
          sendReminder: data.eventReminder,
        },
      },
    })
  }

  return (
    <div>
      <SlideInPanel handleClose={handleClose}>
        <h1 className="m-0 p-0 font-condensed text-[116px] uppercase leading-[0.8] text-white">
          Edit Details
        </h1>
        <h2 className="mb-10 font-handwriting text-3xl uppercase text-white">
          Edit the current event
        </h2>
        <EventForm
          buttonLabel="Update"
          handleSubmit={handleSubmit}
          loading={loading}
          defaultValues={{
            eventName: event?.name,
            eventDate: event?.date,
            eventReminder: event?.sendReminder,
          }}
        />
      </SlideInPanel>
    </div>
  )
}
