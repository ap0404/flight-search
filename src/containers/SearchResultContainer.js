import React from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { device } from '../utilities/device';
import { flightData } from '../flightData';
import _ from 'lodash';

const SearchResultContainerWrapper = styled.div`
	width: 100%;
	margin: 100px 0px;
	display: inline-block;

	@media ${device.laptop} {
		width: 58%;
		display: inline-block;
	}
`;

const FlightBox = styled.div`
	display: inline-block;
	padding: 10px;
	width: 45%;
`;

const FlightBoxWrapper = styled.div`
	background: white;
	border-radius: 10px;
	padding: 10px;
	margin: 10px 13px;
	-webkit-box-shadow: 14px 17px 26px -5px rgba(0, 0, 0, 0.3);
	box-shadow: 14px 17px 26px -5px rgba(0, 0, 0, 0.3);
	@media ${device.laptop} {
		margin: 10px 0px;
	}
`;

const mapStateToProps = state => {
	return { flightSearchData: state.default };
};

class SearchResultContainer extends React.Component {
	render() {
		const {
			from,
			to,
			departureDate,
			noOfPersons,
			returnDate,
			oneWayOrTwoWay
		} = this.props.flightSearchData;
		const flightDataArray = [];
		if (returnDate !== '' && flightData !== undefined) {
			var returnFlight = flightData.filter(
				flight =>
					from === flight.to &&
					to === flight.from &&
					new Date(flight.departureDate).getTime() ===
						new Date(returnDate).getTime()
			);
		}
		if (flightData !== undefined) {
			var oneWayFlight = flightData.filter(
				flight =>
					flight.from === from &&
					flight.to === to &&
					new Date(flight.departureDate).getTime() ===
						new Date(departureDate).getTime()
			);
		}

		if (!_.isEmpty(returnFlight)) {
			for (let i = 0; i < oneWayFlight.length; i++) {
				let oneway = oneWayFlight[i];
				let twoway = returnFlight[i];
				flightDataArray[i] = { oneway, twoway };
			}
			console.log(flightDataArray);
		} else {
			for (let i = 0; i < oneWayFlight.length; i++) {
				let oneway = oneWayFlight[i];
				flightDataArray[i] = { oneway };
			}
		}
		return (
			<SearchResultContainerWrapper>
				{this.props.flightSearchData.from === undefined ? (
					<h1 style={{ color: 'white' }}>Plan Your Travel With us!!</h1>
				) : (
					<div>
						<h1 style={{ color: 'white' }}>Search Results</h1>
						{oneWayOrTwoWay === 'oneway' ? (
							<div>
								<h1>
									{from} > {to}
								</h1>
							</div>
						) : (
							<div>
								<h1>
									{from} > {to} > {from}
								</h1>
							</div>
						)}

						{oneWayFlight.length === 0 && (
							<FlightBoxWrapper>
								<FlightBox>
									<div>Sorry, No Flight On Searched date.</div>
								</FlightBox>
							</FlightBoxWrapper>
						)}

						{flightDataArray.map(flight => (
							<FlightBoxWrapper>
								<FlightBox key="flight.oneway.name">
									<h1>RS. {flight.oneway.price * noOfPersons}</h1>
									<p>{flight.oneway.name}</p>
									<p>
										{flight.oneway.from} > {flight.oneway.to}{' '}
									</p>
									<p>Depart : {flight.oneway.departureTime}</p>
									<p>Arrive : {flight.oneway.arrivalTime}</p>
								</FlightBox>

								{!!flight.twoway && (
									<FlightBox key="flight.twoway.name">
										<h1>RS. {flight.twoway.price * noOfPersons}</h1>
										<p>{flight.twoway.name}</p>
										<p>
											{flight.twoway.from} > {flight.twoway.to}{' '}
										</p>
										<p>Depart : {flight.twoway.departureTime}</p>
										<p>Arrive : {flight.twoway.arrivalTime}</p>
									</FlightBox>
								)}
							</FlightBoxWrapper>
						))}
					</div>
				)}
			</SearchResultContainerWrapper>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(SearchResultContainer);
