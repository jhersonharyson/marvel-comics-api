import axios from "./../http";

export default class CharacterService {
  URL = {
    CHARACTERS: "characters",
    COMICS: "comics",
  };

  getCharacter(characterId) {
    return axios.get(`${this.URL.CHARACTERS}/${characterId}`);
  }

  getCharacterComics(characterId = "", offset = 0, limit = 10) {
    return axios.get(
      `${this.URL.CHARACTERS}/${characterId}/${this.URL.COMICS}?offset=${offset}&limit=${limit}`
    );
  }

  getCharacterByNameStartsWith(name = "", offset = 0, limit = 10) {
    return axios.get(
      `${this.URL.CHARACTERS}?nameStartsWith=${name}&offset=${offset}&limit=${limit}`
    );
  }

  async getCharacterDescription(characterId) {
    try {
      const response = await this.getCharacter(characterId);

      const {
        name = "",
        description = "",
        comics,
      } = response.data.data.results[0];

      return { name, description, comics: comics.items };
    } catch (e) {}
  }

  async getCharacterResourceByNameStartsWith(
    isCharacterId,
    _name,
    _offset = 0,
    _limit = 10
  ) {
    try {
      const response = isCharacterId
        ? await this.getCharacter(_name)
        : await this.getCharacterByNameStartsWith(_name, _offset, _limit);

      const { offset, limit, total, count } = response.data.data;
      const list = response.data.data.results;

      let listOfComics = list.map(
        ({ id, description = "", images, thumbnail, pageCount, name, comics, stories, events, urls }) => {

          return {
            id,
            description,
            images,
            thumbnail,
            pageCount,
            name,
            comics: comics.items,
            stories: stories.items,
            events: events.items,
            urls,
          };
        }
      );

      return {
        results: [...listOfComics],
        offset,
        limit,
        total,
        count,
      };
    } catch (e) {}
  }

  async getComicsResourceByCharcterId(characterId, _offset = 0, _limit = 10) {
    try {
      const response = await this.getCharacterComics(
        characterId,
        _offset,
        _limit
      );

      const { offset, limit, total, count } = response.data.data;
      const list = response.data.data.results;

      let listOfComics = list.map(
        ({ id, description = "", images, thumbnail, pageCount, title, stories, events = {}, urls, characters, creators }) => {
          return {
            id,
            description,
            images,
            thumbnail,
            pageCount,
            title,
            stories: stories.items,
            urls,
            characters: characters.items,
            creators: creators.items,
          };
        }
      );


      return {
        results: [...listOfComics],
        offset,
        limit,
        total,
        count,
      };
    } catch (e) {
      console.log(e);
    }
  }
}
