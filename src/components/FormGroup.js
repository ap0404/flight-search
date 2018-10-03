import React from 'react';

import styled from 'styled-components';
import DataList from './DataList';

const FormLabel = styled.span`
	display: inline-block;
	color: #3e485c;
	font-weight: 700;
	margin-bottom: 6px;
	margin-left: 7px;
`;

const FormControl = styled.input`
	&::placeholder {
		color: white;
	}

	&:disabled {
		background: lightgray;
	}
	background-color: #284886;
	border-radius: 4px;
	border: none;
	height: 40px;
	width: 90%;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: white;
	font-size: 16px;
	display: block;
	padding: 6px 12px;
	line-height: 1.42857143;
	-webkit-transition: border-color ease-in-out 0.15s,
		-webkit-box-shadow ease-in-out 0.15s;
	-o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

const FormGroup = props => {
	return (
		<div style={{ margin: '30px 15px' }}>
			<FormLabel>{props.label}</FormLabel>
			<FormControl
				list={props.name}
				type={props.fieldType}
				placeholder={props.description}
				name={props.value}
				disabled={props.isOneWay}
				onChange={props.onChange}
			/>
			<DataList name={props.name} list={props.list} />
		</div>
	);
};

export default FormGroup;
