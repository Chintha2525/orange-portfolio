import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item?.title}</h1>

      {item?.img && (
        <Slider {...settings}>
          {item.img.map((image, index) => (
            <div key={index} className="mt-6">
              <div
                className="mx-1 md:mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary flex flex-col justify-between"
                style={{ backgroundColor: "#313131" }}
              >
                <LazyLoadImage
                  placeholderSrc={placeholderImage}
                  src={image}
                  alt={item?.title || "Project Image"}
                  className="project_image object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      )}

      <p className="text-neutral font-medium mt-10 mb-6">
        <span className="font-semibold text-white text-xl">Description : </span>{" "}
        {item?.description}
      </p>
      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Features :</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies :</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4">
          {item?.technologies?.map((tech, index) => (
            <li key={index} className="text-neutral">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center mt-8">
        <a href={item?.clientLink} className="mr-4" target="_blank" rel="noopener noreferrer">
          <SecondaryBtn>
            <span>Client Code</span>
          </SecondaryBtn>
        </a>
        <a href={item?.liveLink} className="mr-4" target="_blank" rel="noopener noreferrer">
          <PrimaryBtn>
            <span>Visit Now</span>
          </PrimaryBtn>
        </a>
        {item?.backend === "yes" && (
          <a href={item?.serverLink} target="_blank" rel="noopener noreferrer">
            <SecondaryBtn>
              <span>Server Code</span>
            </SecondaryBtn>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
