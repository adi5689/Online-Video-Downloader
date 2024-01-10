import {  useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoData, setVideoData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [Thumbnail, setThumbnail] = useState("");
  const [videoQuality, setvideoQuality] = useState("");
  const [videoDownloadURL, setvideoDownloadURL] = useState("");

  
  const getApidata = async () => {
    const options = {
      method: 'GET',
      url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/all',
      params: {
        url: videoUrl,
        filename: 'download'
      },
      headers: {
        'X-RapidAPI-Key': '70c1e6cb18msha1e527714e7d95bp1dcc64jsn2c7ba68d2767',
        'X-RapidAPI-Host': 'social-media-video-downloader.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setVideoData(response.data);
      setThumbnail(response.data.picture);
      const [{ quality, link }] = response.data.links;
      setvideoQuality(quality);
      setvideoDownloadURL(link);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };


  


  return (
    <div className="box bg-black">
      <a href='/' target='_blank' rel='noreferrer' className='flex gap-2 flex-row justify-center items-center'>
        <h1 className='text-xl text-white font-semibold font-mono'>🔥 Made by Adi</h1>
      </a>
      <div className="content">
        <h1 className="heading text-center pb-2 font-serif">Online Video <span className='ease-in text-[gradient-to-br from-[#cd5bf0] via-[#ff1940] to-[#ff9900]]'>Downloader</span></h1>
        <p className="text-[16px] text-white mb-5 text-center">Bring on the link of any video of public profile from platforms like Youtube, Instagram, TikTok and Facebook.</p>
        
        <input
          type="text"
          value={videoUrl}
          className='p-2 rounded border-2 border-blue-500'
          placeholder='Enter video url'
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      <button className="button" onClick={getApidata}>Download Video</button>
      {isLoading && <div className='text-white bg-transparent mt-5'>Loading...</div>}
      {videoData && <div className='flex flex-row justify-between border-2 border-indigo-400 items-center w-10/12 p-5 m-5'>
        <img src={Thumbnail} alt="" srcset="" className='h-20 w-20'/>
        <h3 className='text-white'>{videoQuality}</h3>
        <a href={videoDownloadURL} target='_blank' rel='noreferrer' className='bg-blue-500 text-white p-2 rounded'> Download </a>
      </div>}
      </div>
    </div>
  );
}

export default App;
