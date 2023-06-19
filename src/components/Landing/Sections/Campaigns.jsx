import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import ProgressBar from "../Elements/ProgressBar";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import CampaignCard from "../CampaignCard";
// import ProjectImg1 from "../../assets/img/projects/7.png";

// // const testData = [
//   { bgcolor: "#00695c", completed: 30 },
// ];

export default function Campaigns() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center mt-5">Campaigns</h1>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12 ml-5">
            <CampaignCard
              imageSource={ProjectImg3}
              title="Transformative Plastic Surgeries"
              description="Diriba is the first and only child of his parents. He was born with a cleft lip, which many in his community..."
              fundedAmount="4000"
              targetAmount="10000"
            />
          </div>

          <div class="col-lg-4 col-md-6 col-sm-12 ml-5">
            <CampaignCard
              imageSource={ProjectImg2}
              title="Transformative Plastic Surgeries"
              description="Diriba is the first and only child of his parents. He was born with a cleft lip, which many in his community..."
              fundedAmount="4000"
              targetAmount="10000"
            />
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 ml-5">
            <CampaignCard
              imageSource={ProjectImg4}
              title="Transformative Plastic Surgeries"
              description="Diriba is the first and only child of his parents. He was born with a cleft lip, which many in his community..."
              fundedAmount="4000"
              targetAmount="10000"
            />
          </div>
        </div>
        <div className="mx-auto" style={{ width: "250px" }}>
          <Link to="/campain">
            <FullButton title="See More Campaigns" />
          </Link>
        </div>
      </div>
    </>
  );
}
