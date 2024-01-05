import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import "./Property.css";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  console.log(data);
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/*Like Button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        {/*Image */}
        <img src={data?.image} alt="home" />

        <div className="flexCenter property-details">
          {/*Left */}
          <div className="flexColStart left">
            {/*Head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div>

            {/*Facilities */}

            <div className="flexStart facilities">
              {/*Bathrooms*/}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/*Parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities?.parking} Parking</span>
              </div>
              {/*Bedrooms*/}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Bedrooms</span>
              </div>
            </div>
            {/*Description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/*Address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>

            {/*Booking Button */}

            <button className="button">Book your visit</button>
          </div>
          {/*Right */}
          <div className="right">This is right side</div>
        </div>
      </div>
    </div>
  );
};

export default Property;
