import React from 'react'
import { Segment, Form } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
  activity: IActivity | undefined
}

const ActivityForm: React.FC<IProps> = ({ activity }) => {
  return (
    <Segment>
      <Form>
        <Form.Input placeholder='Title' />
        <Form.TextArea rows={2} placeholder='Description' />
        <Form.Input placeholder='Category' />
        <Form.Input placeholder='Date' />
        <Form.Input placeholder='City' />
        <Form.Input placeholder='Venue' />
      </Form>
    </Segment>
  )
}

export default ActivityForm
