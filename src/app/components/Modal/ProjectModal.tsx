import IconGithub from "../Icons/IconGithub";
import Image from "next/image";
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
  imageUrl,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed left-0 top-0 w-screen h-sreen justify-center flex items-center z-40 h-screen place-items-center dark:bg-black/70 shadow-lg"
      onClick={() => onClose()}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col rounded-xl bg-[#ffe7ce] shadow-md shadow-black dark:bg-[#1b1b1b] w-[90%] xl:w-1/2 h-fit p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-lg dark:text-main text-black hover:text-main">
          X
        </button>
        <div className="flex flex-col">
          <div className="pb-2 sm:pb-0 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl md:text-2xl font-semibold md:mb-2">
              #<strong className="text-main btn-shine">project</strong>
            </h2>
            <div className="flex items-center gap-4 text-lg">
              {githubLink && (
                <>
                  <a
                    className="flex items-center animate-pulse hover:text-main w-fit"
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
                    className="flex items-center hover:text-main w-fit ml-auto animate-pulse"
                    href={youtubeLink}
                    target="_blank">
                    <IconYoutube /> <span className="ml-2 ">Video</span>
                  </a>
                </>
              )}
              {urlLink && (
                <a
                  className="flex items-center gap-2 text-center animate-pulse align-middle transition-all group hover:text-main"
                  href={urlLink}
                  target="_blank">
                  Visit Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 group-hover:translate-x-1 duration-200 ease-in-out text-main">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className="flex w-full bg-main h-[2px] mt-1"></div>
          <div className="flex flex-col md:flex-row h-full pt-4 space-y-4">
            <div className="sm:w-3/4 mx-1">
              <h1 className="text-xl text-main">{title}</h1>
              <p className="text-base sm:max-h-56 overflow-y-auto">
                {description}
              </p>
            </div>
            <div className="sm:w-1/2 bg-[#faeee1] dark:bg-[#100f10] h-fit self-center w-full rounded-xl px-4 space-y-4 p-2 sm:ml-auto ">
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
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              className="hidden sm:flex self-center mt-10 shadow-md shadow-black border-main/50 border rounded-2xl"
              width={400}
              height={400}
              quality={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
