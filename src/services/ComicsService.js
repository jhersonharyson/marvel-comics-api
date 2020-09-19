import axios from "../http";

export default class ComicsService {
  URL = {
    COMICS: "comics",
  };

  getComicByUrl(resourceUrl) {
    return axios.get(resourceUrl);
  }

  getComicByStartWithTitle(title='', offset = 0, limit = 4) {
    return axios.get(
      `${this.URL.COMICS}?titleStartsWith=${title}&offset=${offset}&limit=${limit}`
    );
  }

  async getComicResourceByStartWithTitle(title='', _offset = 0, _limit = 4) {
    
    try {
      const response = await this.getComicByStartWithTitle(title, _offset, _limit);
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
        }) => {
          return {
            id,
            images,
            thumbnail,
            title,
            description,
            creators: creators.items,
            characters: characters.items,
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
      console.log(e)
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
        title,
      } = response.data.data.results[0];

      return {
        images,
        thumbnail,
        title,
        description,
        creators: creators.items,
        characters: characters.items,
        dates,
        pageCount,
      };
    } catch (e) {}
  }
}
