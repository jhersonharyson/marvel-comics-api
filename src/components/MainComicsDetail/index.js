import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Names from "../Names";
import {
  Box,
  ComicTitle,
  Container,
  Flex,
  InformationBox,
  Title,
  TitleBar,
  ComicCover,
  ResumeIsNotAvaliable,
  StickPosition,
} from "./styles";
import { MiniComicsList } from "../ComicsList";
import ReadMoreButton from "../ReadMoreButton";
import ComicsGallery from "../ComicsGallery";
import { Theme } from "../../models/HerosModel";
import ViewModel from "../../models/ViewModel";
import CharacterComicsGallery from "../CharacterComicsGallery";

function MainComicsDetail({ comic, handleSelect }) {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
    setTimeout(() => setUpdate(false), 500);
  }, [comic]);
  return (
    <Container
      id="result"
      style={{
        backgroundImage: `url(${comic.thumbnail.path}/portrait_incredible.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        padding: 0,
        marginBottom: 0,
        paddingBbottom: 0,
        minHeight: "125%",
      }}
    >
      <Container
        style={{
          background: "rgba(171, 153, 153, 0.15)",
          backdropFilter: "blur(50px)",
          width: "100vw",
          marginBottom: 0,
          paddingBbottom: 0,
          paddingTop: "45px",
          flexDirection: "column",
        }}
      >
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
                  <a href={comic.urls[0].url} target="blank">
                    <ReadMoreButton fill="#000" width={216 * 1.5} />
                  </a>
                )}
              </StickPosition>

              <InformationBox>
                {!!comic?.title && (
                  <>
                    <Title>TITLE</Title>
                    <p>{comic.title}</p>
                  </>
                )}

                {!!comic?.name && (
                  <>
                    <Title>NAME</Title>
                    <p>{comic.name}</p>
                  </>
                )}

                <Title>RESUME</Title>
                {!!comic?.description ? (
                  <p>{comic.description}</p>
                ) : (
                  <ResumeIsNotAvaliable>Not avaiable</ResumeIsNotAvaliable>
                )}

                {!!comic?.creators?.length && (
                  <>
                    <Title>CREATORS</Title>
                    <ul>
                      {comic?.creators?.map(({ name, role }, index) => (
                        <li key={index}>
                          {name}
                          <span> ({role})</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {!!comic?.stories?.length && (
                  <>
                    <Title>STORIES</Title>
                    <ul>
                      {comic?.stories?.map(({ name, type }, index) => (
                        <li key={index}>
                          {name}
                          <span> ({type})</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {!!comic?.characters?.length && (
                  <>
                    <Title>CHARACTERS</Title>
                    <ul>
                      {comic?.characters?.map(({ name }, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </>
                )}

                {!!comic?.dates?.length && (
                  <>
                    <Title>ONSALE DATE</Title>
                    <p>{new Date(comic?.dates[0]["date"]).toDateString()}</p>
                  </>
                )}

                {!!comic?.urls?.length && (
                  <>
                    <Title>LINKS</Title>
                    <ul>
                      {comic?.urls?.map(({ url, type }, index) => (
                        <li key={index}>
                          <a href={url} target="blank">
                            {type?.toUpperCase()}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </InformationBox>
            </Flex>
          </Box>
          <Box
            style={{
              justifyContent: "center",
              marginTop: "67px",
              maxHeight: "700px",
            }}
          >
            <div style={{ alignSelf: "flex-end" }}>
              <Names
                name={comic?.title?.split(" ")[0] || comic?.name?.split(" ")[0]}
                left={"flex-end"}
              />

              {!!comic?.images?.length && (
                <>
                  <MiniComicsList list={comic.images} />
                  <Title
                    style={{
                      marginRight: 10,
                      marginTop: 15,
                      textAlign: "right",
                    }}
                  >
                    Images
                  </Title>
                </>
              )}

              {!!comic?.events?.length && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "32px",
                  }}
                >
                  <div style={{ minWidth: "200px" }}>
                    <Title style={{ marginLeft: "-16px" }}>EVENTS</Title>
                    <ul>
                      {comic?.events?.map(({ name }, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
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
