import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ActivityDetails = () => {
    return (
        <Card fluid>
            <Image src='/assets/placeholder.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
          </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group>
                    <Button basic color="blue" content='Edit' />
                    <Button basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails
