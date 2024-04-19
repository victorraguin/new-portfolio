import IconGithub from "../Icons/IconGithub";
import IconYoutube from "../Icons/IconYoutube";

interface ModalProps {
  title: string;
  description: string;
  urlLink: string;
  githubLink?: string;
  youtubeLink?: string;
  imageUrl: string;
  logoUrl: string;
  technologies: { icon: JSX.Element; name: string }[];
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  urlLink,
  githubLink,
  youtubeLink,
  technologies,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 w-screen h-sreen justify-center flex items-center z-40 h-screen place-items-center bg-black/50 shadow-lg"
      onClick={() => onClose()}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col rounded-xl bg-[#1b1b1b] w-[90%] xl:w-1/2 h-fit p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-semibold md:mb-2">
            #<strong className="text-main btn-shine">project</strong>
          </h2>
          <div className="flex items-center gap-4">
            {githubLink && (
              <>
                <a
                  className="flex items-center hover:text-main w-fit"
                  href={githubLink}
                  target="_blank">
                  <IconGithub /> <span className="ml-2">Github</span>
                </a>
                <span className="text-main">-</span>
              </>
            )}
            {youtubeLink && (
              <>
                <a
                  className="flex items-center hover:text-main w-fit ml-auto"
                  href={youtubeLink}
                  target="_blank">
                  <IconYoutube /> <span className="ml-2">Video</span>
                </a>
              </>
            )}
            {urlLink && (
              <a
                className="flex items-center gap-2 text-center align-middle transition-all group hover:text-main"
                href={urlLink}
                target="_blank">
                Visit Site
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  className="w-4 h-4 group-hover:translate-x-1 duration-200 ease-in-out text-main">
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                </svg>
              </a>
            )}
          </div>
        </div>

        <div className="flex w-full bg-main h-[2px] mt-1"></div>
        <div className="flex flex-row h-full pt-4">
          <div className="w-3/4 mx-1">
            <h1 className="text-xl text-main">{title}</h1>
            <p className="text-base max-h-56 overflow-y-auto">{description}</p>
          </div>
          <div className="w-1/2 bg-[#100f10] h-fit self-center rounded-xl px-4 space-y-4 p-2 ml-auto ">
            <ul className="flex flex-col flex-wrap space-y-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center hover:text-main border-b pb-1 w-fit border-main">
                  {tech.icon} <span className="ml-2">{tech.name}</span>
                </span>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
