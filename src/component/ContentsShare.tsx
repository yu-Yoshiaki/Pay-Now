import type { VFC } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const config = {
  size: 40,
};

type SocialProps = {
  url?: string;
  title?: string;
  size?: number;
  via?: string;
};

export const ContentsShare: VFC<SocialProps> = (props) => {
  const title = "SHOP by α-release - カートの無いショッピングサイト";
  const url = "https://a-release.com";
  return (
    <div className="flex p-8">
      <FacebookShareButton url={url}>
        <FacebookIcon size={props.size ? props.size : config.size} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={props.size ? props.size : config.size} round />
      </TwitterShareButton>
      <LineShareButton url={url} title={title}>
        <LineIcon size={props.size ? props.size : config.size} round />
      </LineShareButton>
    </div>
  );
};
