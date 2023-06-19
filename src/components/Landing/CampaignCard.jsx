import { Link } from "react-router-dom";
import img1 from "../assets/img/49967246591_bec924ae93_c.jpg";

export default function CampaignCard({
  imageSource,
  title,
  description,
  fundedAmount,
  targetAmount,
}) {
  return (
    <div className="campaign-card mt-5">
      <div class="card shadow-sm mx-auto m-5">
        <Link to="/campaigns">
          <div className="image-box">
            <img
              src={imageSource}
              class="card-img-top enlarge-image"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text text-secondary">{description}</p>
            <h6 class="card-text my-3">
              <u>{fundedAmount} Birr</u> raised out of {targetAmount} Birr
            </h6>
            <div class="progress mb-3">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                aria-label="Info example"
                style={{
                  width: "20%",
                  backgroundColor: "#5DADAA;",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                20%
              </div>
            </div>
            <button class="btn bir-button" style={{ width: "100%" }}>
              Donate
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
