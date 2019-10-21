import React, { useContext, useEffect } from 'react'
import { Image, Button, Grid, Segment, Item, Header } from 'semantic-ui-react'
import ActivityStore from "../../../app/store/activityStore"
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import LoadingComponent from '../../../app/layout/LoadingComponent'

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

interface DetailParams {
    id: string
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({ match }) => {
    const activityStore = useContext(ActivityStore)
    const { activity, loadActivity, loadingInitial } = activityStore

    useEffect(() => {
        loadActivity(match.params.id)
    }, [loadActivity, match.params.id])

    if (loadingInitial || !activity) return <LoadingComponent content="Loading activity..." />

    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment.Group>
                    <Segment basic attached='top' style={{ padding: '0' }}>
                        <Image src='/assets/placeholder.png' fluid style={activityImageStyle} />
                    </Segment>
                    <Segment style={activityImageTextStyle} basic>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Header size='huge' content={activity.title} style={{ color: 'white' }} />
                                    <p>{activity.date}</p>
                                    <p>
                                        Hosted by <strong>Bob</strong>
                                    </p>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment clearing attached='bottom'>
                        <Button color='teal'>Join Activity</Button>
                        <Button>Cancel attendence</Button>
                        <Button color='orange' floated='right'>Manage Event</Button>
                    </Segment>
                </Segment.Group>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Sidebar here</h2>
            </Grid.Column>
        </Grid>

    )
}

export default observer(ActivityDetails) 
