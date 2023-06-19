export default function AboutUs() {
  return (
    <>
      <div className="about-us lightBg m-5">
        <h1 className="text-center mb-4 mt-5 pt-4">About Us</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col-md">
              <i class="bi bi-rocket-takeoff"></i>
              <h4>Mission</h4>
              <p className="lead">
                Availing high quality, free, life changing surgeries and medical
                treatments by partnering with local hospitals and respective
                partners
              </p>
            </div>
            <div class="col-md">
              <i class="bi bi-bullseye"></i>
              <h4>Big Mission</h4>
              <p className="lead">
                Giving a purpose of life for the giver and reciever! Giving a
                purpose of life for you and me!
              </p>
            </div>
            <div class="col-md">
              <i class="bi bi-eyeglasses"></i>
              <h4>Vision</h4>
              <p className="lead">
                Enabling unlimited access to life changing healthcare
                opportunities free of charge by 2030 for People in Need
              </p>
            </div>
          </div>
        </div>

        <div className="text-center core-values">
          <i class="bi bi-shield-lock"></i>
          <h4 className="text-black">Core Values</h4>
          <div class="container text-center mt-5">
            <div class="row">
              <div class="col-md">
                <h4>Team Work</h4>
                <p className="lead">
                  We recognize, embrace and capitalize on the unique talents of
                  everyone.
                </p>
              </div>
              <div class="col-md">
                <h4>Advancement</h4>
                <p className="lead">
                  We're committed to setting ambitious goals, move healthcare
                  and our communites forward.
                </p>
              </div>
              <div class="col-md">
                <h4>Stewardship</h4>
                <p className="lead">
                  We are prudent, careful and deliberate with all resources.
                </p>
              </div>
            </div>
          </div>
          <div class="container text-center mt-4">
            <div class="row">
              <div class="col-md">
                <h4>Respect</h4>
                <p className="lead">
                  In our regard for, and our actions toward communites, and each
                  other!
                </p>
              </div>
              <div class="col-md">
                <h4>Responsibility</h4>
                <p className="lead">
                  Acting in ethical, honest, forthright and fiscally responsible
                  ways.
                </p>
              </div>
              <div class="col-md">
                <h4>Trustworthiness</h4>
                <p className="lead">
                  We act with integrity and honor in all situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
