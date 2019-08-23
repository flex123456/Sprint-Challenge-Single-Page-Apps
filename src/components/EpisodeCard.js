import React from 'react'
import { Card } from 'semantic-ui-react'

const CardExampleLinkCardProp = (props) => (
  <Card
    link
    header={props.data.name}
    meta={props.data.created}
    description={props.data.air_date}
  />
)

export default CardExampleLinkCardProp