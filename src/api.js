import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
  params: {
    url: 'https://www.instagram.com/reel/CxgAOUUR8R6/'
  },
  headers: {
    'X-RapidAPI-Key': '70c1e6cb18msha1e527714e7d95bp1dcc64jsn2c7ba68d2767',
    'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}