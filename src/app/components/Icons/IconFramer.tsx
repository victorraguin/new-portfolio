// icon:framer | CSS Icons https://css.gg/ | Astrit
import * as React from "react";

function IconFramer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1.4em" width="1.4em" {...props}>
      <path fill="currentColor" fillOpacity={0.5} d="M12 21V9H6v6l6 6z" />
      <path fill="currentColor" d="M18 9V3H6l6 6H6v6h12l-6-6h6z" />
    </svg>
  );
}

export default IconFramer;
