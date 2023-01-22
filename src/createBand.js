const createBand = (band) => {
  const addLeader = (leader) => {
    return `
    <div class="col d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item heading">${leader.getName()}</li>
                <li class="list-group-item heading">
                  <i class="fa-solid fa-user"></i>${leader.getClass()}
                </li>
                <li class="list-group-item">Smart</li>
                <li class="list-group-item">Neutral</li>
              </ul>
            </div>
          </div>
          </div>
        `;
  };

  const addNonLeader = (member) => {
    return `
    <div class="col d-flex justify-content-center">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item heading">${member.getName()}</li>
                <li class="list-group-item heading">
                  <i class="fa-solid fa-user"></i>${member.getClass()}
                </li>
                <li class="list-group-item">Smart</li>
                <li class="list-group-item">Neutral</li>
              </ul>
            </div>
          </div>
          </div>
        `;
  };

  const html = [];

  html.push(
    band
      .filter((bandMember) => bandMember.getMemberRole() === "Leader")
      .map((leader) => addLeader(leader))
      .join("")
  );
  html.push(
    band
      .filter((bandMember) => bandMember.getMemberRole() === "Non-Leader")
      .map((member) => addNonLeader(member))
      .join("")
  );
  return html.join("");
};

module.exports = (band) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./styles/reset.css" />
    <link rel="stylesheet" href="./styles/css/fontawesome.min.css" />
    <link rel="stylesheet" href="./styles/css/solid.min.css" />
    <link rel="stylesheet" href="./styles/css/brands.min.css" />
    <link rel="stylesheet" href="./styles/style.css" />
    <title>Band of Heroes</title>
  </head>
  <body>
    <h1>Band of Heroes</h1>
    <div class="container text-center">
      <div class="row">
          ${createBand(band)}
      </div>
    </div>
  </body>
</html>
`;
};
