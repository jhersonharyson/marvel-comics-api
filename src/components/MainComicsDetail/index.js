import React from "react";
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
} from "./styles";
import { MiniComicsList } from "../ComicsList";
import ReadMoreButton from "../ReadMoreButton";

function MainComicsDetail({ comic }) {
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
        }}
      >
        <Box>
          <TitleBar>
            <ComicTitle>{comic.title}</ComicTitle>
          </TitleBar>

          <Flex>
            <div>
              <ComicCover
                src={`${comic.thumbnail.path}/portrait_incredible.jpg`}
                alt="comics"
                style={{ width: 216 * 1.5, height: 346 * 1.5 }}
              />
              <ReadMoreButton fill="#000" width={216 * 1.5} />
            </div>

            <InformationBox>
              {!!comic?.title && (
                <>
                  <Title>TITLE</Title>
                  <p>{comic.title}</p>
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
            <Names name={comic?.title?.split(" ")[0]} left={"flex-end"} />

            {!!comic?.images?.length && (
              <>
                <MiniComicsList list={comic.images} />
                <Title
                  style={{ marginRight: 10, marginTop: 15, textAlign: "right" }}
                >
                  Images
                </Title>
              </>
            )}
          </div>
        </Box>
      </Container>
    </Container>
  );
}

export default MainComicsDetail;
