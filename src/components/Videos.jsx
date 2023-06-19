
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {
  return (
    <Stack direction='row' flexWrap='wrap'
      justifyContent='start' gap={2}>
      {videos.map((item) => (
        <Box key={item.id.videoId || item.id.channelId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

Videos.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.shape({
        videoId: PropTypes.string,
        channelId: PropTypes.string,
      }),
    })
  ).isRequired,
};

Videos.defaultProps = {
  videos: [],
};
export default Videos
