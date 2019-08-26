import React from 'react'
import { Card } from 'semantic-ui-react'

const LocationCard = (props) => (
  <Card
    href='#card-example-link-card'
    header={props.data.name}
    meta={props.data.type}
    description={props.data.dimension}
  />
)

export default LocationCard;