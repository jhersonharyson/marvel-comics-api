import axios from "../http";

export default class ComicsService {
  URL = {
    CHARACTERS: "comic",
  };

  getComicByUrl(resourceUrl) {
    return axios.get(resourceUrl);
  }

  async getComicByResourceUrl(resourceUrl) {
    try {
      const response = await this.getComicByUrl(resourceUrl);
      console.log(response)
      const {
        description = "",
        images,
        thumbnail,
        creators,
        characters,
        dates,
        pageCount,
        title
      } = response.data.data.results[0];
      return { images, thumbnail, title, description, creators: creators.items, characters: characters.items, dates, pageCount };
    }catch(e){
       
    }
  }
}
