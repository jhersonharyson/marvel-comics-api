import HerosModel from "./../models/HerosModel";
import axios from "./../http";

export default class CharacterService {
  URL = {
    CHARACTERS: "characters",
  };

  getCharacter(characterId) {
    return axios.get(`${this.URL.CHARACTERS}/${characterId}`);
  }

  async getCharacterDescription(characterId) {
    try {
      const response = await this.getCharacter(characterId);
      console.log(response)
      const {
        name = "",
        description = "",
        comics: comics,
      } = response.data.data.results[0];
      return { name, description, comics: comics.items };
    }catch(e){
       
    }
  }
}
