import { useEffect, useState } from "react";
import axios from 'axios'
const GenerateImage = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        const prompt = e.target.prompt.value.trim();

        if (!prompt) {
            setError("Please write an image prompt.");
            return;
        }

        const form = new FormData();
        form.append("prompt", prompt);

        setLoading(true);
        setError("");

        try {
            const data  = await axios.post(`${import.meta.env.VITE_API_URL}/generate-image`, {prompt});
            console.log(data);
            if(!data?.statusText) {
                throw new Error("FAILED")
            }
            setImageSrc(data?.data?.url)
        } catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
            e.target.reset()
        }
    };

    useEffect(() => {
        return () => {
            if (imageSrc) URL.revokeObjectURL(imageSrc);
        };
    }, [imageSrc]);

    return (
        <div className="flex justify-center items-center bg-base-200 border min-h-screen">
            <div className="max-w-sm bg-base-100 w-full shrink-0 shadow-2xl p-4">
                <form onSubmit={handleSubmit} className="card-body">
                    <h2 className="font-semibold text-2xl">Generate an Image</h2>

                    <fieldset className="fieldset">
                        <input
                            name="prompt"
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Describe your image"
                        />

                        <button disabled={loading} className="btn btn-neutral mt-4">
                            {loading ? "Generating..." : "Generate"}
                        </button>
                    </fieldset>
                </form>

                {error && <p className="text-red-500 px-4 pb-2">{error}</p>}

                <div className="p-4">
                    {loading && <p>Wait for response...</p>}

                    {!loading && imageSrc && (
                        <img
                            src={imageSrc}
                            alt="Generated"
                            className="w-full rounded-lg"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default GenerateImage;