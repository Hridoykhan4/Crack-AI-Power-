import { Link } from "react-router";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";

const Creations = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/images/all")
            .then((res) => res.json())
            .then((data) => setImages(data));
    }, []);

    const handleDownload = async (imageUrl, imageName) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a')
            link.download = imageName || 'Download.jpg'
            link.href = url;
            document.body.appendChild(link);
            link.click()

            document.body.removeChild(link);
            window.URL.revokeObjectURL(url)
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="w-11/12 mx-auto pb-10">
            <PageTitle>All Creations</PageTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {images.map((img) => (
                    <div key={img._id}>
                        <div className="card bg-base-100  shadow-xl relative">
                            <figure>
                                <img src={img.original_img} alt="Shoes" className="w-full" />
                            </figure>
                            <div className="card-body flex-row  absolute bottom-[10px] ">
                                <Link to={`/creations/${img._id}`} className="btn btn-primary">
                                    Details
                                </Link>
                                <button onClick={() => handleDownload(img.original_img, `creation-${img._id}.jpg`)} className="btn btn-error">
                                    Download ⬇️
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Creations;