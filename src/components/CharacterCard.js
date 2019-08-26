import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CharacterCard = (props) => (
  <Card>
    <Image src={props.data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.data.gender}</span>
      </Card.Meta>
      <Card.Description>
        {props.data.species}
      </Card.Description>
      <Card.Description>
        {props.data.status}
      </Card.Description>
      <Card.Description>
        {props.data.created}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Homies
      </a>
    </Card.Content>
  </Card>
)

export default CharacterCard;
