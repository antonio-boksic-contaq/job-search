import axios from 'axios';

const getJobs = async () => {
  const baseUrl = 'http://localhost:3000'; // qua lui usa l env variables, a me non andava di farle sinceramente
  const url = `${baseUrl}/jobs`;
  const response = await axios.get(url);
  return response.data;
};

export default getJobs;
