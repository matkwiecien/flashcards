import { CardSet } from '../CardSet/interfaces';
import { Link as RouterLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import NewCardSetCard from './NewCardSetCard';
import CardGridList from '../common/CardGridList';
import CardGridListItem from '../common/CardGridListItem';
import React from 'react';
import CardTitle from '../common/CardTitle';

type CardSetsListProps = {
  sets: CardSet[];
};

const CardSetsList = ({ sets }: CardSetsListProps) => {
  return (
    <CardGridList>
      <CardGridListItem>
        <NewCardSetCard />
      </CardGridListItem>

      {sets.map(({ id, name }) => (
        <React.Fragment key={id}>
          <CardGridListItem>
            <Card>
              <CardContent>
                <CardTitle>{name}</CardTitle>
              </CardContent>
              <CardActions>
                <Button component={RouterLink} to={`/card-set/${id}`}>
                  Add card
                </Button>
              </CardActions>
            </Card>
          </CardGridListItem>
        </React.Fragment>
      ))}
    </CardGridList>
  );
};

export default CardSetsList;
