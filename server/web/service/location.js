import Axios from 'axios';

export const getLocation =async (text) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=["address","regions"]&language=en&key=${process.env.PlacesKey}&sessiontoken=1234567890`;
  const r= await Axios.get(url);
  console.log(r.data);
};
