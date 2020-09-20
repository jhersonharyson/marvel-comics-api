import axios from "../http";

export default class ComicsService {
  URL = {
    CHARACTER: "characters",
    COMICS: "comics",
  };

  getComicByUrl(resourceUrl) {
    return axios.get(resourceUrl);
  }

  getComicByStartWithTitle(title = "", offset = 0, limit = 10) {
    return axios.get(
      `${this.URL.COMICS}?titleStartsWith=${title}&offset=${offset}&limit=${limit}`
    );
  }

  getComicByComicId(comicId = "") {
    return axios.get(`${this.URL.COMICS}/${comicId}`);
  }

  getCharactersByComicId(comicId = "", offset = 0, limit = 10) {
    return axios.get(
      `${this.URL.COMICS}/${comicId}/${this.URL.CHARACTER}?offset=${offset}&limit=${limit}`
    );
  }

  async getComicResourceByStartWithTitle(
    isComicId = false,
    title = "",
    _offset = 0,
    _limit = 4
  ) {
    try {
      const response = isComicId
        ? await this.getComicByComicId(title)
        : await this.getComicByStartWithTitle(title, _offset, _limit);
      console.log(response);
      const { offset, limit, total, count } = response.data.data;
      const list = response.data.data.results;
      let listOfComics = list.map(
        ({
          id,
          description = "",
          images,
          thumbnail,
          creators,
          characters,
          dates,
          pageCount,
          title,
          urls = {},
        }) => {
          return {
            id,
            images,
            thumbnail,
            title,
            description,
            creators: creators.items,
            characters: characters.items,
            urls: urls.items,
            dates,
            pageCount,
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

  async getComicByResourceUrl(resourceUrl) {
    try {
      const response = await this.getComicByUrl(resourceUrl);
      console.log(response);
      const {
        description = "",
        images,
        thumbnail,
        creators,
        characters,
        dates,
        pageCount,
        name,
        comics,
        series,
        urls = {},
      } = response.data.data.results[0];

      return {
        images,
        thumbnail,
        name,
        description,
        creators: creators.items,
        characters: characters.items,
        urls: urls.items,
        dates,
        pageCount,
        comics: comics.items,
        series: comics.series,
      };
    } catch (e) {
      console.log(e);
    }
  }

  async getCharactersResourceByComicId(comicId) {
    try {
      const response = await this.getCharactersByComicId(comicId);
      console.log(response);
      const { offset, limit, total, count } = response.data.data;
      const list = response.data.data.results;
      let listOfComics = list.map(
        ({
          id,
          description = "",
          images,
          thumbnail,
          creators,
          name,
          urls = {},
          stories = {},
          series = {},
          comics = {},
          events = {}
        }) => {
          return {
            id,
            description,
            images,
            thumbnail,
            creators: creators?.items,
            stories: stories?.items,
            series: series?.items,
            events: events.items,
            name,
            urls: urls.items,
            comics: comics.items,
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
