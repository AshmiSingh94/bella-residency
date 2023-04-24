import React from "react";
import "./Rating.scss";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

const reviews = [
  {
    id: "f9f11229-f89a-45ac-86bf-0dc4baa028e2",
    name: "Rhythm B",
    time: "a year ago",
    rating: 5,
    review:
      "Great place with super helpful people around . Such a good experience living here. Their Services are so satisfying provided with good food and accommodation",
  },
  {
    id: "602a9bb8-e100-11ed-b5ea-0242ac120002",
    name: "Chanda P",
    time: "a year ago",
    rating: 5,
    review:
      "I have stayed for about 3 months, Very good pg, hygienic. The best thing is owner of the pg is very friendly, good food too.. The best pg i can say👌",
  },
  {
    id: "67f7ae30-e100-11ed-b5ea-0242ac120002",
    name: "Manisha N",
    time: "a year ago",
    rating: 5,
    review:
      "Was my first time staying at banglore, the pg was really good. Good food , and ready to help if there is any issues at pg. Also got back the advance back within a day.",
  },
];

const Rating = () => {
  return (
    <div className="Reviewslist" id="testimonials">
      <hr className="Reviewslist__hr" />
      <div className="Reviewslist__testimonial">TESTIMONIALS</div>
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
