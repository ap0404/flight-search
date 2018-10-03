import React, { Component } from 'react';

import Header from './components/Header';
import styled from 'styled-components';
import FlightContainer from './containers/FlightContainer';
import SearchResultContainer from './containers/SearchResultContainer';

const Wrapper = styled.div`
	position: relative;
	overflow-x: hidden;
	width: 100%;
	height: 100%;
	-webkit-transition: 0.5s;
	-o-transition: 0.5s;
	transition: 0.5s;
`;

const BgCover = styled.div`
	&::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(47, 103, 177, 0.6);
	}
	background-image: url(images/background1.jpg);
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	position: relative;
	height: 900px;
	position: relative;
	float: left;
	width: 100%;
`;
class App extends Component {
	render() {
		return (
			<div className="App">
				<BgCover>
					<Wrapper>
						<Header />
						<FlightContainer />
						<SearchResultContainer />
					</Wrapper>
				</BgCover>
			</div>
		);
	}
}

export default App;
