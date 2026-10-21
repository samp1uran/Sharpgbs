import { useState } from "react";

const Image = ({ src, alt, obj = "cover" }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imageClass =
    obj === "contain"
      ? "max-h-[400px] w-full object-contain"
      : "absolute inset-0 h-full w-full object-cover";

  return (
    <div
      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100 ${
        obj === "contain" ? "min-h-56 p-4" : "aspect-[4/3]"
      }`}
    >
      {!loaded && !failed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-slate-200"
        />
      )}
      {failed ? (
        <span
          role="img"
          aria-label={`${alt} image unavailable`}
          className="p-6 text-center text-sm text-slate-500"
        >
          Image unavailable
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`${imageClass} transition-[opacity,transform] duration-500 group-hover:scale-[1.025] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
};

export default Image;
