import React from "react";
import { Container, Box, Flex, TitleBar, Title, InformationBox } from "./styles";

import {FiArrowLeft} from 'react-icons/fi'
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Comics() {
	return (
		<>
			<Header />
			<Container>
				<Box>
					<TitleBar>
						<Link to="/"><FiArrowLeft /></Link>
						<Title>Ant-Man (2003) #4</Title>
					</TitleBar>

					<Flex>
						<Box>
							<img
								src="https://i.pinimg.com/originals/1e/b7/b9/1eb7b91872acb58f6577ceb854313cc5.png"
                                alt="comics"
                                style={{maxWidth: "100%"}}
							/>
						</Box>

						<InformationBox>
							<h2>Resume</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, veniam iure animi
								tempore dolorum voluptatum facere? Repudiandae,
								repellendus ratione vel necessitatibus unde
								earum inventore illo quo, odit asperiores soluta
								autem.
							</p>

							<h2>Spider-Man</h2>
							<p>creator</p>
						</InformationBox>
					</Flex>
				</Box>
				<Box>laksmdklsmdkladsm</Box>
			</Container>
		</>
	);
}

export default Comics;
