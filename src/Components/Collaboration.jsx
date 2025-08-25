import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI chatApp with seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className=" py-3 mt-3 ">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 border flex w-[22rem] border-n-6 aspect-square rounded-full scale-75 md:scale-100 -translate-x-1/2">
            <div className="flex w-60 aspect-square border border-n-6 rounded-full m-auto">
              <div className="w-[6rem] aspect-square m-auto rounded-full p-[0.2rem] bg-conic-gradient">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul className="absolute inset-0 flex items-center justify-center">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                   className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45}`}
                  style={{
                    transform: `rotate(${index * (360 / collabApps.length)}deg) translate(9rem) rotate(-${index * (360 / collabApps.length)}deg)`,
                  }}
          >
               <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
