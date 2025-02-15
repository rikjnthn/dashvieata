import { useId, useRef, useState } from "react";
import clsx from "clsx";

import ImageIcon from "../image-icon";
import PlaneIcon from "../plane-icon";
import { MessageType, SetStateType } from "../../interface";

const MessageInput = ({ setMessages }: MessageInputPropsType) => {
  const [isUploadImage, setIsUploadImage] = useState<boolean>(false);

  const imageInputId = useId();

  const textRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  const sendMessage = (e: React.FormEvent) => {
    const textInp = textRef.current;
    const imageInput = imageInputRef.current;

    e.preventDefault();
    const messageObject = {
      content: textInp?.value ?? "",
      sender: true,
      image: "",
    };

    if (imageInput?.files?.[0]) {
      messageObject.image = URL.createObjectURL(imageInput.files[0]);
      imageInput.value = "";

      imageRef.current?.classList.add("hidden");
      URL.revokeObjectURL(imageRef.current?.src ?? "");
    }

    if (textInp) textInp.value = "";

    if (!messageObject.content) {
      if (messageObject.image) {
        setMessages((prev) => [...prev, messageObject]);
        setIsUploadImage(false);
      }

      return;
    }

    setMessages((prev) => [...prev, messageObject]);
  };

  return (
    <div className="border-grey-200-50 relative flex rounded-full border py-1.25 pr-2.5 pl-5">
      <form
        onSubmit={sendMessage}
        className="flex w-full items-center justify-between gap-2.5"
      >
        <div className="w-full">
          <input
            ref={textRef}
            className="text-grey-400 w-full py-2.5 text-sm placeholder:text-sm placeholder:text-gray-400"
            type="text"
            placeholder="Message..."
          />
        </div>

        <div>
          <label
            onClick={() => !isUploadImage && setIsUploadImage(true)}
            className={clsx(
              "border-grey-200-50 rounded-md bg-white drop-shadow-md",
              {
                "absolute -top-4 left-0 h-40 w-full -translate-y-full cursor-pointer border":
                  isUploadImage,
              },
            )}
            htmlFor={imageInputId}
          >
            <img
              ref={imageRef}
              className="hidden h-full w-full object-contain"
              src="#"
              alt="Image preview"
            />

            <div
              ref={placeholderRef}
              className={clsx(
                "flex h-full flex-col items-center justify-center",
                { "opacity-50": isUploadImage },
              )}
            >
              <ImageIcon />
              <span className={clsx(isUploadImage ? "flex" : "hidden")}>
                Add Image
              </span>
            </div>
          </label>
          <input
            onInput={(e) => {
              const file = e.currentTarget.files?.[0];

              if (!file) return;
              if (!imageRef.current) return;

              imageRef.current.src = URL.createObjectURL(file);
              imageRef.current.classList.remove("hidden");

              placeholderRef.current?.classList.add("hidden");
            }}
            ref={imageInputRef}
            id={imageInputId}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>

        <button type="submit">
          <PlaneIcon />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

interface MessageInputPropsType {
  setMessages: SetStateType<MessageType[]>;
}
