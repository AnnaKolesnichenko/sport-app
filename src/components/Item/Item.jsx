import './Item.scss';
import ItemDescription from './ItemDescription';
import ItemImages from './ItemImages';

const Item = () => {
  return (
    <div className="main-container">
      <div>
        <p className="filter-items">
          <span className="light">
            головна - чоловіки - одяг - термобілизна - atlantic
          </span>
          <span className="dark">
            - чоловічий термокостюм atlantic MW0MW32 780
          </span>
        </p>
      </div>
      <div className="item-description">
        <ItemImages />
        <ItemDescription />
      </div>
    </div>
  );
};

export default Item;
