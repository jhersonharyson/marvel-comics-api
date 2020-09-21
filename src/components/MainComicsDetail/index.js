import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ViewModel from "../../models/ViewModel";
import CharacterComicsGallery from "../CharacterComicsGallery";
import { MiniComicsList } from "../ComicsList";
import Names from "../Names";
import ReadMoreButton from "../ReadMoreButton";
import {FiX} from 'react-icons/fi'
import {
  Box,
  ComicCover,
  ComicTitle,
  Container,
  Flex,
  InformationBox,
  ResumeIsNotAvaliable,
  StickPosition,
  Title,
  TitleBar,
  Item,
  Text,
  List,
  ListItem,
  TextDetail,
  ContainerDetail,
  ContainerCloseButton,
  CloseButton
} from "./styles";

function MainComicsDetail({ comic, handleSelect }) {
  const [update, setUpdate] = useState(false);
  let history = useHistory();
  
  useEffect(() => {
    setUpdate(true);
    setTimeout(() => setUpdate(false), 500);
  }, [comic]);

  return (
    <Container id="result" className="background-image" imageUrl={`url(${comic.thumbnail.path}/portrait_incredible.jpg)`}>
      <Container className={"background-blur"}>
        <ContainerCloseButton><CloseButton onClick={history.goBack}><FiX size={32}/></CloseButton></ContainerCloseButton>
        <Container>
          <Box>
            <TitleBar>
              <ComicTitle>{comic.title || comic.name}</ComicTitle>
            </TitleBar>

            <Flex>
              <StickPosition>
                <ComicCover
                  src={`${comic.thumbnail.path}/portrait_incredible.jpg`}
                  alt="comics"
                  style={{ width: 216 * 1.5, height: 346 * 1.5 }}
                />

                {!!comic?.urls?.length && (
                  <Item href={comic.urls[0].url} target="blank">
                    <ReadMoreButton fill="#000" width={216 * 1.5} />
                  </Item>
                )}
              </StickPosition>

              <InformationBox>
                {!!comic?.title && (
                  <ContainerDetail>
                    <Title>TITLE</Title>
                    <Text>{comic.title}</Text>
                  </ContainerDetail>
                )}

                {!!comic?.name && (
                  <ContainerDetail>
                    <Title>NAME</Title>
                    <Text>{comic.name}</Text>
                  </ContainerDetail>
                )}

                <Title>RESUME</Title>
                {!!comic?.description ? (
                  <Text>{comic.description}</Text>
                ) : (
                  <ResumeIsNotAvaliable>Not available</ResumeIsNotAvaliable>
                )}

                {!!comic?.creators?.length && (
                  <ContainerDetail>
                    <Title>CREATORS</Title>
                    <List>
                      {comic?.creators?.map(({ name, role }, index) => (
                        <ListItem key={index}>
                          {name}
                          <TextDetail> ({role})</TextDetail>
                        </ListItem>
                      ))}
                    </List>
                  </ContainerDetail>
                )}

                {!!comic?.stories?.length && (
                  <ContainerDetail>
                    <Title>STORIES</Title>
                    <List>
                      {comic?.stories?.map(({ name, type }, index) => (
                        <ListItem key={index}>
                          {name}
                          <TextDetail> ({type})</TextDetail>
                        </ListItem>
                      ))}
                    </List>
                  </ContainerDetail>
                )}

                {!!comic?.characters?.length && (
                  <ContainerDetail>
                    <Title>CHARACTERS</Title>
                    <List>
                      {comic?.characters?.map(({ name }, index) => (
                        <ListItem key={index}>{name}</ListItem>
                      ))}
                    </List>
                  </ContainerDetail>
                )}

                {!!comic?.dates?.length && (
                  <ContainerDetail>
                    <Title>ONSALE DATE</Title>
                    <Text>
                      {new Date(comic?.dates[0]["date"]).toDateString()}
                    </Text>
                  </ContainerDetail>
                )}

                {!!comic?.urls?.length && (
                  <ContainerDetail>
                    <Title>LINKS</Title>
                    <List>
                      {comic?.urls?.map(({ url, type }, index) => (
                        <ListItem key={index}>
                          <Item href={url} target="blank">
                            {type?.toUpperCase()}
                          </Item>
                        </ListItem>
                      ))}
                    </List>
                  </ContainerDetail>
                )}

              </InformationBox>
            </Flex>
          </Box>

          <Box className={"right"}>
            <ContainerDetail style={{ alignSelf: "flex-end" }}>

              <Names name={comic?.title?.split(" ")[0] || comic?.name?.split(" ")[0]} left={"flex-end"} />

              {!!comic?.images?.length && (
                <ContainerDetail>
                  <MiniComicsList list={comic.images} />
                  <Title className="right">
                    IMAGES
                  </Title>
                </ContainerDetail>
              )}

              {!!comic?.events?.length && (
                <ContainerDetail className={"right"}>
                  <ContainerDetail style={{ minWidth: "200px" }}>
                    <Title style={{ marginLeft: "-16px" }}>EVENTS</Title>
                    <List>
                      {comic?.events?.map(({ name }, index) => (
                        <ListItem key={index}>{name}</ListItem>
                      ))}
                    </List>
                  </ContainerDetail>
                </ContainerDetail>
              )}

            </ContainerDetail>
          </Box>
        </Container>

        {!update && (
          <CharacterComicsGallery
            isComic={!!comic.title}
            queryIsId={true}
            query={comic.id}
            filter={ViewModel.CHARACTER}
            handleSelect={handleSelect}
          />
        )}
      </Container>
    </Container>
  );
}

export default MainComicsDetail;
