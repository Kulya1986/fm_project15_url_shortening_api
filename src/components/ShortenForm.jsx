import { useEffect, useReducer, useState } from "react";
import ShortenButton from "./ShortenButton";
import ShortenedLinkItem from "./ShortenedLinkItem";
import { useLocalStorageState } from "../hooks/useLocalStorage";

// USING REDUCER HOOK

// const initialState = {
//   urlInput: "",
//   formError: "",
//   shortenedUrls: [],
//   linkCopied: null,
//   copyError: "",
//   isConverted: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "input_change":
//       return { ...state, urlInput: action.payload, formError: "" };
//     case "form_error":
//       return { ...state, formError: action.payload, isConverted: false };
//     case "form_reset":
//       return { ...state, urlInput: "", formError: "", isConverted: false };
//     case "copy_link":
//       return { ...state, linkCopied: action.payload };
//     case "copy_error":
//       return { ...state, copyError: "Failed to copy!" };
//    case "is_converted":
//       return { ...state, isConverted: true };
//     case "shorten_link":
//       return {
//         ...state,
//         shortenedUrls: [
//           ...state.shortenedUrls,
//           { url: state.urlInput, short_url: action.payload },
//         ],
//       };
//     default:
//       throw new Error("Unknow action type");
//   }
// }

function ShortenForm() {
  const [urlInput, setUrlInput] = useState("");
  const [formError, setFormError] = useState("");
  const [shortenedUrls, setShortenedUrls] = useLocalStorageState(
    [],
    "shortened"
  );
  const [linkCopied, setLinkCopied] = useState(null);
  const [copyError, setCopyError] = useState("");
  const [isConverted, setIsConverted] = useState(false);

  // USING REDUCER HOOK
  // const [
  //   { urlInput, formError, shortenedUrls, linkCopied, copyError },
  //   dispatch,
  // ] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setInterval(async function () {
      if (await document.hasFocus()) {
        if (linkCopied) {
          navigator.clipboard.readText().then((text) => {
            if (text !== shortenedUrls[linkCopied].short_url)
              setLinkCopied(null);
          });
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [linkCopied]);

  function handleUrlInputChange(url) {
    setUrlInput(url);
    setFormError("");
  }

  function resetForm() {
    // dispatch({type:"form_reset"});
    setUrlInput("");
    setFormError("");
  }

  const copyLinkToClipboard = async (link, ind) => {
    try {
      await navigator.clipboard.writeText(link);
      // dispatch({ type: "copy_link", payload: ind });
      setLinkCopied(ind);
    } catch (e) {
      // dispatch({ type: "copy_error" });
      setCopyError("Failed to copy!");
    }
  };

  async function handleFormSubmit(e) {
    const baseURL = "https://spoo.me/";

    e.preventDefault();
    if (urlInput.length === 0) setFormError("Please add a link");
    // dispatch({ type: "form_error", payload: "Please add a link" });
    else {
      setIsConverted(true);
      // dispatch({ type: "is_converted" });
      try {
        const res = await fetch(`${baseURL}?url=${urlInput}`, {
          method: "POST",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          },
        });
        const data = await res.json();
        if (data.short_url) {
          // dispatch({ type: "shorten_link", payload: data.short_url });
          setShortenedUrls((currentUrlsList) => [
            ...currentUrlsList,
            {
              url: urlInput,
              short_url: data.short_url,
            },
          ]);
          // dispatch({ type: "form_reset" });
          resetForm();
        } else throw new Error(data.UrlError);
      } catch (err) {
        // dispatch({ type: "form_error", payload: err.message });
        setFormError(err.message);
      } finally {
        setIsConverted(false);
      }
    }
  }

  return (
    <div id="form" className="px-6 flex flex-col bg-app-gray 2xl:px-[165px]">
      <form
        className="grow relative -top-20 flex flex-col p-6 rounded-[10px] bg-[url(/images/bg-shorten-mobile.svg)] bg-no-repeat bg-right-top bg-app-very-dark-violet 2xl:bg-[url(/images/bg-shorten-desktop.svg)] 2xl:flex-row 2xl:gap-6 2xl:py-[52px] 2xl:px-16 2xl:bg-cover"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex flex-col grow mb-4">
          <input
            id="url-input"
            type="text"
            placeholder="Shorten a link here..."
            value={urlInput}
            onChange={
              (e) => handleUrlInputChange(e.target.value)
              // dispatch({ type: "input_change", payload: e.target.value })
            }
            className="h-12  px-4 py-1.5 bg-white text-app-very-dark-blue text-base/[36px] tracking-[0.12px] font-medium rounded-[5px] 2xl:h-16 2xl:mb-0 2xl:px-8 2xl:py-3.5 2xl:grow 2xl:text-[20px] 2xl:tracking-[0.15px]"
          />
          {formError.length > 0 && (
            <p className="mt-2 text-app-red font-medium text-xs/[18px] italic tracking-[0.08px] 2xl:text-base 2xl:tracking-[0.11px]">
              {formError}
            </p>
          )}
        </div>
        <ShortenButton buttonCopy={"Shorten It!"} isConverted={isConverted} />
      </form>
      {shortenedUrls.length > 0 && (
        <div className="relative -top-20 2xl:pt-2">
          {shortenedUrls.map((item, ind) => (
            <ShortenedLinkItem
              item={item}
              key={item.short_url}
              copyLink={() => copyLinkToClipboard(item.short_url, ind)}
              copied={ind === linkCopied}
              copyError={copyError}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShortenForm;
