import { useEffect, useState } from "react";
import { isBase62 } from "../utils/base62";
import { createShortLink } from "../api/apis";
const QueryBox = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (shortUrl.length > 6) {
      setError("Short url can only have 6 characters!");
    }
    if (shortUrl.length < 6) {
      setError("");
    }
    if (!isBase62(shortUrl)) {
      setError("Short url can only contain numbers and alphabets!");
    }
  }, [shortUrl]);

  const onSubmit = async () => {
    setLoading(true);
    if (shortUrl.length !== 0 && shortUrl.length !== 6) {
      setError("Short url must have 6 characters");
      setLoading(false);
      return;
    }
    try {
      const res = await createShortLink(longUrl, shortUrl);
      setResult(
        import.meta.env.VITE_PROD_CLIENT_URL + "/" + res.data[0].short_url
      );
      setLoading(false);
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "error" in error.response.data
      ) {
        setError((error as any).response.data.error);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(String(error));
      }
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/80 shadow-xl border border-gray-200 rounded-2xl flex flex-col justify-center items-center gap-6 backdrop-blur-md">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">
        Shorten Your URL
      </h2>
      <div className="w-full flex flex-col gap-2">
        <label
          className="text-slate-700 text-sm font-medium"
          htmlFor="long-url"
        >
          Enter your URL
        </label>
        <input
          id="long-url"
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.currentTarget.value)}
          placeholder="https://example.com/your-long-url"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <label
          className="text-slate-700 text-sm font-medium"
          htmlFor="short-url"
        >
          Custom 6 character short URL (optional)
        </label>
        <input
          id="short-url"
          type="text"
          value={shortUrl}
          onChange={(e) => setShortUrl(e.currentTarget.value)}
          placeholder="my-custom-short-url"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
        />
      </div>
      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-2 w-full hover:cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:from-purple-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Shorten URL
      </button>

      <p className=" text-red-500 text-sm">{error}</p>
      {result && (
        <div className="relative w-full mt-2">
          <div className="bg-lime-50 border border-lime-200 rounded-lg px-4 py-3 text-slate-800 text-center text-base font-semibold shadow-sm break-all">
            {result}
          </div>
          <button
            className=" hover:cursor-pointer absolute bottom-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-md text-xs font-medium shadow hover:from-purple-600 hover:to-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => {
              navigator.clipboard.writeText(result);
            }}
            title="Copy link"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default QueryBox;
