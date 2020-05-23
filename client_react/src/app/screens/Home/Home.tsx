import React, { FC } from 'react'
import AuthorizedWrapper from '../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper'
// import SingleEvent from "../../components/singleEvent/SingleEvent";
import { Button } from '@material-ui/core'
import GooglePlacesAutocomplete, {
  getLatLng,
  geocodeByPlaceId,
} from 'react-google-places-autocomplete'
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/index.min.css'
import EventsList from '../../components/singleEvent/EventsList'
import { connect } from 'react-redux'
import { logOutUser } from '../../redux/actions/auth/auth.actions'
import { Subscription } from 'react-apollo'
import { commentsSubscriptions } from '../../graphql/subscriptions/comments.subscriptions'

interface propTypes {
  logOutUser: Function
}

const Home: FC<propTypes> = ({ logOutUser }): JSX.Element => {
  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>
      <Button onClick={() => logOutUser()}>Logout</Button>
      <EventsList />
      <GooglePlacesAutocomplete
        onSelect={async (e) => {
          console.log(e)
          const geoMetry = await geocodeByPlaceId(e.place_id)
          console.log(await getLatLng(geoMetry[0]))
        }}
      />
      <Subscription
        subscription={commentsSubscriptions}
        variables={{ name: 'Test' }}
        onSubscriptionData={({
          subscriptionData,
        }: {
          subscriptionData: any
        }) => {
          console.log(subscriptionData)
        }}
      />

      {/*<Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
        <Grid item md={4} sm={6} xs={8} lg={4} xl={4}>
          <SingleEvent />
        </Grid>
      </Grid> */}
    </AuthorizedWrapper>
  )
}

export default connect(null, { logOutUser })(Home)
