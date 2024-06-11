import { useState } from "react";
import Button from "src/components/Button";
import Modal from "src/components/Modal";

import { ReactComponent as PlayButton } from "../assets/icons/play.svg";

const VideoBlock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="video-block"
        style={{ backgroundImage: "url(/img/video-bg-image.png)" }}
        className="py-[150px] flex flex-col items-center gap-8 bg-no-repeat bg-center bg-cover text-white"
      >
        <Button
          className="py-4 px-10 border border-white rounded-lg"
          onClick={handleOpen}
        >
          <PlayButton />
        </Button>

        <p className="text-[48px] px-4 text-center">
          Watch the best Technology in Action
        </p>

        <p className="max-w-[700px] text-[18px] px-4 text-center gl:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          allow="fullscreen; clipboard-write; encrypted-media;"
          className="xl:h-[50vh] xl:w-[50vw] h-[200px] sm:w-[70vw] sm:h-[400px]"
        ></iframe>
      </Modal>
    </>
  );
};

export default VideoBlock;
