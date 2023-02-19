import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percentage,
} from './Statistic.styled'

export const Statistic = ({title,stats})=>{
  const StatisticEl = ({data}) => {
    return data.map(({label,percentage,id}) => {
      return  (
       <ListItem key={id}>
           <Label>{label}</Label>
           <Percentage>{percentage}</Percentage>
         </ListItem>
    );
  });
}
  return(
    <Container>
      {title && <Title>{title}</Title>}
      <List>
      <StatisticEl data={stats}/>
      </List>
    </Container>
  )
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats:PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};