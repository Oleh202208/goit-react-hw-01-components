import PropTypes from 'prop-types';

export const Statistic = ({title,stats})=>{
  const StatisticEl = ({data}) => {
    return data.map(({label,percentage,id}) => {
      return  (
       <div class="item" key={id}>
           <span class="label">{label}</span>
           <span class="percentage">{percentage}</span>
         </div>
    );
  });
}
  return(
    <section class="statistics">
      {title && <h2>{title}</h2>}
      <div>
      <StatisticEl data={stats}/>
      </div>
    </section>
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