import React from "react";

function TouristInfoCards() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src="https://static.standard.co.uk/2021/10/26/10/2BD1M59-1.jpg?width=1024&auto=webp&quality=50&crop=968%3A645%2Csmart"
            className="card-img-top"
            alt="Glasgow View"
          />
          <div className="card-body">
            <h3>Glasgow</h3>
            <p>
              Glasgow is famed for its Victorian and art nouveau architecture.
              Today it's a national cultural hub, home to institutions including
              the Scottish Opera, Scottish Ballet and National Theatre of
              Scotland, as well as acclaimed museums and a thriving music scene.
            </p>
            <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
              Go to Glasgow
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.gq-magazine.co.uk/photos/5d139e8db4079f706c0c529f/master/pass/Manchester-HP-GQ-8Mar17_istock_b.jpg"
            className="card-img-top"
            alt="Manchester View"
          />
          <div className="card-body">
            <h3>Manchester</h3>
            <p>
              Manchester is a major city in the northwest of England with a rich
              industrial heritage. The Castlefield conservation area’s
              18th-century canal system recalls the city’s days as a textile
              powerhouse, and visitors can trace this history at the interactive
              Museum of Science & Industry.
            </p>
            <a href="www.visitmanchester.com" className="btn btn-primary">
              Go to Manchester
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg"
            className="card-img-top"
            alt="London View"
          />
          <div className="card-body">
            <h3>London</h3>
            <p>
              London, is a 21st-century city with history stretching back to
              Roman times. At its centre stand the imposing Houses of
              Parliament, the iconic ‘Big Ben’ clock tower and Westminster
              Abbey, site of British monarch coronations.
            </p>
            <a href="www.visitlondon.com" className="btn btn-primary">
              Go to London
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TouristInfoCards;
