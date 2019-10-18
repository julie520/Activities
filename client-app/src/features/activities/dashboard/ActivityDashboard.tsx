import React from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'


const ActivityDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetails />
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard
