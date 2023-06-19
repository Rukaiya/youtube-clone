import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(79,69,247,1) 5%, rgba(121,114,241,1) 29%, rgba(149,89,152,1) 50%, rgba(124,208,230,1) 79%, rgba(123,142,241,1) 100%, rgba(0,206,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail}
          marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px'}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail;
