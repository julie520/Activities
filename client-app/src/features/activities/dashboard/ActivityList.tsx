import React, { useContext, Fragment } from 'react'
import { Item, Label, Segment } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import ActivityListItem from './ActivityListItem';
import { RootStoreContext } from '../../../app/store/rootStore';
import {format} from "date-fns"

const ActivityList = () => {
    const rootStore = useContext(RootStoreContext)
    const { activitiesByDate } = rootStore.activityStore

    return (
        <Segment>
            {activitiesByDate.map(([group, activities]) => (
                <Fragment key={group}>
                    <Label size='large' color='blue'>{format(new Date(group),'eeee do MMMM')}</Label>
                    <Item.Group divided>
                        {activities.map(activity => (
                            <ActivityListItem key={activity.id} activity={activity} />
                        ))}
                    </Item.Group>
                </Fragment>
            ))}
        </Segment>
    );
};

export default observer(ActivityList) 
