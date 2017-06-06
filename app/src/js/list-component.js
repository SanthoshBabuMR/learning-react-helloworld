import React from 'react';

const ListComponent = ({list=[1,2,3,4,5]}) => {
  var items = list.map((i, k) => <li key={k.toString()}>{i}</li>);
  return (
    <ul>
      {items}
    </ul>
  );
}
export default ListComponent;
