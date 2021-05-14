import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  async getUsersByName(query = 'sysale') {
    try {
      const users = await axios.get(
        `search/repositories?q=${query}{&page,per_page,sort,order}`,
      );
      //   return console.log(users);
      return users;
    } catch (error) {
      console.log(error);
    }
  },
};
