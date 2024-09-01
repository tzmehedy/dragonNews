import { FaArrowLeft } from "react-icons/fa";
const SingleNewsCard = ({ singleNews }) => {

    const { title, image_url, details } = singleNews;

  return <>
    <div className="space-y-5">
        <img src={image_url} alt="" />
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-justify">{details}</p>

        <div>
            <button className="btn btn-secondary"> <FaArrowLeft></FaArrowLeft> All news in this category</button>
        </div>

    </div>
  </>;
};

export default SingleNewsCard;