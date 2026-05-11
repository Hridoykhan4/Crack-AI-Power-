import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageTitle from "../components/PageTitle";

const SingleImage = () => {
    const { id } = useParams();
    const [image, setImage] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/images/${id}`)
            .then((res) => res.json())
            .then((data) => setImage(data));
    }, [id]);
    return (
        <div>
            <PageTitle>{image?.prompt}</PageTitle>
            <div className="w-11/12 mx-auto">
                <figure className="my-5 p-1 flex justify-center">
                    <img src={image.original_img} alt="" className="rounded-md" />
                </figure>
            </div>
        </div>
    );
};

export default SingleImage;