export interface IBeer {
  id:                number;
  name:              string;
  tagline:           string;
  first_brewed:      string;
  description:       string;
  image_url:         string;
  abv:               number;
  ibu:               number;
  target_fg:         number;
  target_og:         number;
  ebc:               number;
  srm:               number;
  ph:                number;
  attenuation_level: number;
  volume:            BoilVolume;
  boil_volume:       BoilVolume;
  method:            Method;
  ingredients:       Ingredients;
  food_pairing:      string[];
  brewers_tips:      string;
  contributed_by:    string;
}

interface BoilVolume {
  value: number;
  unit:  string;
}

interface Ingredients {
  malt:  Malt[];
  hops:  Hop[];
  yeast: string;
}

interface Hop {
  name:      string;
  amount:    BoilVolume;
  add:       string;
  attribute: string;
}

interface Malt {
  name:   string;
  amount: BoilVolume;
}

interface Method {
  mash_temp:    MashTemp[];
  fermentation: Fermentation;
  twist:        null;
}

interface Fermentation {
  temp: BoilVolume;
}

interface MashTemp {
  temp:     BoilVolume;
  duration: number;
}
