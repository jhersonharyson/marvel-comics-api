import React from "react";
import { Container, Box, Flex, TitleBar, ComicTitle, InformationBox, Title } from "./styles";

import {FiArrowLeft} from 'react-icons/fi'
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ComicsList from "../../components/ComicsList";

function Comics() {
	return (
		<>
			<Header />
			<Container>
				<Box>
					<TitleBar>
						<Link to="/"><FiArrowLeft /></Link>
						<ComicTitle>Ant-Man (2003) #4</ComicTitle>
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
							<Title>Resume</Title>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Consequatur, veniam iure animi
								tempore dolorum voluptatum facere? Repudiandae,
								repellendus ratione vel necessitatibus unde
								earum inventore illo quo, odit asperiores soluta
								autem.
							</p>

							<Title>Spider-Man</Title>
							<p>creator</p>
						</InformationBox>
					</Flex>
				</Box>
				<Box style={{justifyContent: "center"}}>
					<Title style={{marginLeft: 40}}>Images</Title>
					<ComicsList />
				</Box>
			</Container>
		</>
	);
}

export default Comics;
