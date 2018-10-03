import React from 'react';

import styled from 'styled-components';
import { device } from '../utilities/device';
import FormGroup from '../components/FormGroup';
import { defaultFunction } from '../actions';
import { connect } from 'react-redux';

const cities = ['Ahmedabad', 'Pune', 'Mumbai'];

const BookingForm = styled.form`
	background-color: #fff;
	margin: 80px 30px;
	padding: 30px 20px;
	-webkit-box-shadow: 14px 17px 26px -5px rgba(0, 0, 0, 0.3);
	box-shadow: 14px 17px 26px -5px rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	width: 300px;
	@media ${device.laptop} {
		width: 400px;
	}
`;

const FlightContainerWrapper = styled.div`
	display: inline-block;
	float: left;
	width: 100%;

	@media ${device.laptop} {
		width: 40%;
		display: inline-block;
	}
`;

const SearchButton = styled.button`
	padding: 10px 30px;
	font-size: 16px;
	margin: 0px auto;
	text-align: center;
	background: #3885af;
	color: #fff;
	text-weight: bold;
	border-radius: 5px;
	display: block;
`;

const OneWayOrTwoWayWrapper = styled.div`
	display: inline-block;
	width: 100%;
`;

const RadioInput = styled.input`
	display: inline-block;
`;

const InputGroup = styled.div`
	background-color: #fff;
	display: inline-block;
	margin: 10px 0;
	position: relative;
`;

const Label = styled.label`
	padding: 12px 15px;
	width: 100%;
	text-align: left;
	color: #3c454c;
	cursor: pointer;
	position: relative;
	z-index: 2;
	transition: color 200ms ease-in;
	overflow: hidden;
`;

class FlightContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			from: '',
			to: '',
			departureDate: '',
			returnDate: '',
			noOfPersons: 0,
			oneWayOrTwoWay: 'oneway'
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onRadioChange = this.onRadioChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		let flightSearchPayload = this.state;
		if (this.validateInputs(flightSearchPayload)) {
			this.props.defaultFunction(flightSearchPayload);
		}
	}

	onRadioChange(event) {
		console.log(event.target.value);
		this.setState({
			oneWayOrTwoWay: event.target.value
		});
	}

	validateInputs(payload) {
		if (payload.from === '') {
			alert('Please Enter Origin!!');
			return false;
		}
		if (payload.to === '') {
			alert('Please Enter Destination!!');
			return false;
		}
		if (payload.from === payload.to) {
			alert('Origin and Destination can not be same');
			return false;
		}
		if (payload.departureDate === '') {
			alert('Please Enter Departure Date!!');
			return false;
		}
		if (new Date(payload.departureDate - 1) < new Date()) {
			alert('Departure date can not be before present date!!');
			return false;
		}
		if (payload.noOfPersons === 0) {
			alert('Please Enter Number of Persons travelling!!');
			return false;
		}
		if (
			payload.returnDate !== '' &&
			new Date(payload.returnDate - 1) < new Date()
		) {
			alert('Return date can not be before present date!!');
			return false;
		}
		if (new Date(payload.departureDate) > new Date(payload.returnDate)) {
			alert('Departure date can not be ahead of return date!!');
			return false;
		}
		return true;
	}
	onChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render() {
		return (
			<FlightContainerWrapper>
				<BookingForm>
					<OneWayOrTwoWayWrapper>
						<InputGroup>
							<RadioInput
								type="radio"
								name="oneWayOrTwoWay"
								id="oneway"
								value="oneway"
								checked={this.state.oneWayOrTwoWay === 'oneway' ? true : false}
								onChange={this.onRadioChange}
							/>
							<Label htmlFor="oneway">One Way</Label>
						</InputGroup>
						<InputGroup>
							<RadioInput
								type="radio"
								name="oneWayOrTwoWay"
								id="twoway"
								value="twoway"
								onChange={this.onRadioChange}
							/>
							<Label htmlFor="twoway">Two Way</Label>
						</InputGroup>
					</OneWayOrTwoWayWrapper>
					<FormGroup
						label="Your Origin"
						description="Enter an origin"
						fieldType="text"
						name="cities"
						list={cities}
						value="from"
						onChange={this.onChange}
					/>
					<FormGroup
						label="Your Destination"
						description="Enter a destination"
						fieldType="text"
						name="cities"
						list={cities}
						value="to"
						onChange={this.onChange}
					/>
					<FormGroup
						label="Departure Date"
						description="dd/mm/yyyy"
						fieldType="date"
						value="departureDate"
						onChange={this.onChange}
					/>
					<FormGroup
						label="Return Date"
						description="dd/mm/yyyy"
						fieldType="date"
						isTwoWay={false}
						isOneWay={this.state.oneWayOrTwoWay === 'oneway' ? true : false}
						value="returnDate"
						onChange={this.onChange}
					/>
					<FormGroup
						label="Passengers"
						description="How many are travelling?"
						fieldType="number"
						value="noOfPersons"
						onChange={this.onChange}
					/>
					<SearchButton type="button" onClick={this.onSubmit}>
						Search
					</SearchButton>
				</BookingForm>
			</FlightContainerWrapper>
		);
	}
}

// wrapping the component within the connect HOC and calling the default function directly
export default connect(
	null,
	{ defaultFunction }
)(FlightContainer);
