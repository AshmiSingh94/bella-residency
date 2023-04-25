import React from "react";
import "./Rating.scss";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

const reviews = [
  {
    id: "f9f11229-f89a-45ac-86bf-0dc4baa028e2",
    name: "Preeti Thangunna",
    time: "a year ago",
    rating: 5,
    review:
      "Amazing experience living here, with great people and satisfying services. Highly recommended for anyone seeking good food and comfortable accommodation.",
  },
  {
    id: "602a9bb8-e100-11ed-b5ea-0242ac120002",
    name: "Rita Singh",
    time: "a year ago",
    rating: 5,
    review:
      "Great PG, with a hygienic environment, friendly owner, and excellent food. It's definitely the best PG I've stayed in and I would highly recommend it to others.👌",
  },
  {
    id: "67f7ae30-e100-11ed-b5ea-0242ac120002",
    name: "Kavya Gurang",
    time: "a year ago",
    rating: 5,
    review:
      "Exceptional first-time experience in Kathmandu, with delicious food and accommodating hosts. Prompt refund of advance payment. Highly recommend this PG to others.",
  },
];

const Rating = () => {
  return (
    <div className="Reviewslist" id="testimonials">
      <div className="Reviewslist__header">
        <hr className="Reviewslist__header__hr" />
        <div className="Reviewslist__header__testimonial">TESTIMONIALS</div>
      </div>
      <div className="Reviewslist__list">
        {reviews.map((item) => (
          <div key={item.id} className="Reviewslist__list__item">
            <div className="Reviewslist__list__item__rating">
              <div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <StarIcon
                    key={item}
                    sx={{ color: item <= 5 ? yellow[700] : "" }}
                  />
                ))}
              </div>
              <div className="Reviewslist__list__item__time">{item.time}</div>
            </div>
            <div className="Reviewslist__list__item__review">{item.review}</div>
            <div className="Reviewslist__list__item__name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
