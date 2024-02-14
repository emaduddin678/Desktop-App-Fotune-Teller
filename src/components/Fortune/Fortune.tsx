import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import name from "../../assets/fortune-teller.png";
import tia from "../../assets/tia.png";
import { useNavigate } from "react-router-dom";
import { getIdFromCode } from "../../utilities/getCodeNo";
// import ReactCardFlip from "react-card-flip";

const Fortune: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const navigate = useNavigate();
  const [fortuneURL, setFortuneURL] = useState<string>("");
  const [cardImage, setCardImage] = useState<string>("");
  const [cardImageNumber, setCardImageNumber] = useState<number>();
  const [wrongMsg, setWrongMsg] = useState<boolean>(true);

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = (e.target as HTMLFormElement).code.value;

    console.log("getIdFromCode => ", getIdFromCode(code));

    if (getIdFromCode(code)?.toString() === cardNumber) {
      setWrongMsg(true);
      navigate("/fortune-view");
      (e.target as HTMLFormElement).code.value = "";
    } else {
      setWrongMsg(false);
      (e.target as HTMLFormElement).code.value = "";
    }
  };

  useEffect(() => {
    fetch("https://sunquick-scoreboard.xri.com.bd/fortune-teller/last-user")
      .then((res) => res.json())
      .then((data) => {
        setCardNumber(data.card);
        setCardImageNumber(Number(cardNumber));
      });
    console.log(cardNumber, fortuneURL);
  }, [cardNumber, fortuneURL, cardImage]);

  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    const intervalId = setInterval(handleClick, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <section className="relative bg-[#F38AAA] bg-[url('/src/assets/bg-2.png')] bg-cover bg-center bg-no-repeat bgbg bg-fixed h-screen overflow-hidden">
        <form onSubmit={handleChange} className="bg-transparent">
          <input
            type="text"
            name="code"
            className="bg-transparent text-white focus:border-0 focus:outline-none hover:border-0 hover:outline-none"
            autoFocus
            autoComplete="off"
          />
        </form>
        <div className=" mx-auto max-w-screen-xl px-4  flex h-screen items-center">
          <div className="mx-auto  max-w-7xl text-center ">
            <div className="relative mx-auto  mt-20">
              <img
                src={tia}
                className="w-1/4 mx-auto emad absolute -top-28 right-[47%] "
                alt=""
              />
              <img src={name} className="w-1/4 mx-auto z-30" alt="brandName" />
            </div>

            <div className="relative mx-auto mt-2">
              {cardImageNumber ? (
                <>
                  {!wrongMsg ? (
                    <div
                      className="inline-block bg-gradient-to-t from-[#400c43] to-[#820d96] p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                      role="alert"
                    >
                      <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <div className="inline">
                        <span className="font-medium">
                          You Pick A Wrong Card!
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="inline-block bg-gradient-to-t from-[#400c43] to-[#820d96] p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
                      role="alert"
                    >
                      <svg
                        className="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <div className="inline">
                        <span className="font-medium">
                          Please Enter Your Card!
                        </span>
                      </div>
                    </div>
                  )}
                  <img
                    src={`/card-${cardImageNumber}.png`}
                    className="w-[15%] mx-auto "
                    alt="Card"
                  />
                  
                </>
              ) : (
                <div
                  role="status"
                  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                  <div className="flex items-center justify-center w-[15%] lg:h-80 md:h-60 h-40 mx-auto bg-gray-300 rounded  dark:bg-gray-700">
                    <svg
                      className="w-60 h-40 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <img
          src={logo}
          className=" lg:w-28 md:w-20 w-12 absolute bottom-8 right-12 element"
          alt="logo"
        />
      </section>
    </div>
  );
};

export default Fortune;
