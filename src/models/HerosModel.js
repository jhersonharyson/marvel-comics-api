import backgroundSpiderMan from "./../assets/images/spider-man-principal.png";
import backgroundBlackPhanter from "./../assets/images/black-panther-principal.png";
import backgroundIronMan from "./../assets/images/iron-man-principal.png";

export const ActorNames = {
  SPIDER_MAN: "TOM HOLAND",
  BLACK_PANTHER: "CHADWICK BOSEMAN",
  IRON_MAN: "ROBERT D. JR",
};

export const ActorDescription = {
  SPIDER_MAN:
    "Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  BLACK_PANTHER:
    "Lorem ipsum dolor sitetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eliqua. Ut eni.",
  IRON_MAN: "Lorem ipsum dolor sit a commodo consequat.",
};

export const ActorImages = {
  SPIDER_MAN: [
    require("./../assets/images/spider_man/1.png"),
    require("./../assets/images/spider_man/2.png"),
    require("./../assets/images/spider_man/3.png"),
  ],
  BLACK_PANTHER: [
    require("./../assets/images/black_panther/1.png"),
    require("./../assets/images/black_panther/2.png"),
    require("./../assets/images/black_panther/3.png"),
  ],
  IRON_MAN: [
    require("./../assets/images/iron_man/1.png"),
    require("./../assets/images/iron_man/2.png"),
    require("./../assets/images/iron_man/3.png"),
  ],
};

export const HeroId = {
  SPIDER_MAN: 1009610,
  BLACK_PANTHER: 1009187,
  IRON_MAN: 1009368,
};

export const HerosName = {
  BLACK_PANTHER: "BLACK PANTHER",
  SPIDER_MAN: "SPIDER MAN",
  IRON_MAN: "IRON MAN",
};

export const Theme = {
  IRON_MAN: {
    background: backgroundIronMan,
    color: "#beb571",
    name: HerosName.IRON_MAN,
    id: "IRON_MAN",
    characterId: HeroId.IRON_MAN,
  },
  SPIDER_MAN: {
    background: backgroundSpiderMan,
    color: "#0e2c48",
    name: HerosName.SPIDER_MAN,
    id: "SPIDER_MAN",
    characterId: HeroId.SPIDER_MAN,
  },
  BLACK_PANTHER: {
    background: backgroundBlackPhanter,
    color: "#030303",
    name: HerosName.BLACK_PANTHER,
    id: "BLACK_PANTHER",
    characterId: HeroId.BLACK_PANTHER,
  },
};

export default HerosName;
