import React from 'react';

const DataList = props => {
	return (
		<datalist id={props.name}>
			{props.list !== undefined &&
				props.list.map(item => <option key={item}>{item}</option>)}
		</datalist>
	);
};

export default DataList;
