import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import { observer } from 'mobx-react-lite'
import ACtivityStore from "../../../app/store/activityStore"
import LoadingComponent from '../../../app/layout/LoadingComponent'


const ActivityDashboard = () => {
    const activityStore = useContext(ACtivityStore)

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])

    if (activityStore.loadingInitial)
        return <LoadingComponent content='Loading Activity' />

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Activity filters</h2>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard) 