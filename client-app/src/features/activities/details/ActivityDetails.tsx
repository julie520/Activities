import React, { useContext, useEffect, Fragment } from 'react'
import { Image, Button, Grid, Segment, Item, Header, Icon, Comment, Form } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import { RouteComponentProps } from 'react-router'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { Link } from 'react-router-dom'
import { format } from "date-fns"
import { RootStoreContext } from '../../../app/store/rootStore'
import ActivityDetailedSidebar from './ActivityDetailedSidebar'


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
    const rootStore = useContext(RootStoreContext)
    const { activity, loadActivity, loadingInitial, attendActivity, cancelAttendence, loading } = rootStore.activityStore

    useEffect(() => {
        loadActivity(match.params.id)
    }, [loadActivity, match.params.id])

    if (loadingInitial || !activity) return <LoadingComponent content="Loading activity..." />

    const host = activity.attendees.filter(x => x.isHost)[0];

    return (
        <Grid>
            <Grid.Column width={10}>
                <Segment.Group>
                    <Segment basic attached='top' style={{ padding: '0' }}>
                        <Image src={`/assets/categoryImages/${activity.category}.jpg`} fluid style={activityImageStyle} />
                    </Segment>
                    <Segment style={activityImageTextStyle} basic>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Header size='huge' content={activity.title} style={{ color: 'white' }} />
                                    <p>{format(activity.date, 'eeee do MMMM')}</p>
                                    <p>
                                        Hosted by <strong>{host.displayName}</strong>
                                    </p>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment clearing attached='bottom'>
                        {activity.isHost ? (
                            <Button as={Link} to={`/manage/${activity.id}`} color='orange' floated='right'>Manage Event</Button>
                        ) : activity.isGoing ? (
                            <Button loading={loading} onClick={cancelAttendence}>Cancel attendence</Button>
                        ) : <Button loading={loading} onClick={attendActivity} color='teal'>Join Activity</Button>}
                        
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Segment attached='top'>
                        <Grid>
                            <Grid.Column width={1}>
                                <Icon size='large' color='teal' name='info' />
                            </Grid.Column>
                            <Grid.Column width={15}>
                                <p>{activity.description}</p>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment attached>
                        <Grid verticalAlign='middle'>
                            <Grid.Column width={1}>
                                <Icon name='calendar' size='large' color='teal' />
                            </Grid.Column>
                            <Grid.Column width={15}>
                                <span>{format(activity.date, 'eeee do MMMM')} at {format(activity.date, 'h:mm a')}</span>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                    <Segment attached>
                        <Grid verticalAlign='middle'>
                            <Grid.Column width={1}>
                                <Icon name='marker' size='large' color='teal' />
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <span>
                                    {activity.venue}, {activity.city}
                                </span>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Segment.Group>
                <Fragment>
                    <Segment textAlign='center' attached='top' inverted color='teal' style={{ border: 'none' }}>
                        <Header>Chat about this event</Header>
                    </Segment>
                    <Segment attached>
                        <Comment.Group>
                            <Comment>
                                <Comment.Avatar src='/assets/user.png' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Matt</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 5:42PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>How artistic!</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                            <Comment>
                                <Comment.Avatar src='/assets/user.png' />
                                <Comment.Content>
                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                    <Comment.Metadata>
                                        <div>5 days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                            <Form reply>
                                <Form.TextArea />
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                            </Form>
                        </Comment.Group>
                    </Segment>
                </Fragment>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar attendees={activity.attendees} />
            </Grid.Column>
        </Grid>

    )
}

export default observer(ActivityDetails) 
