const inq = require("inquirer");
const path = require("path");
const fs = require("fs");
const Leader = require("./lib/Leader");
const BandMember = require("./lib/NonLeader");
const renderBand = require("./src/createBand");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

const bandMembers = [];
const idsArray = [];

console.log(
  "\nWelcome to the band generator!\nUse `npm run reset` to reset the dist/ folder\n"
);

const appMenu = () => {
  function createBand() {
    inq
      .prompt([
        {
          type: "list",
          name: "bandMemberChoice",
          message: "Which type of band member would you like to add?",
          choices: [
            "Leader",
            "Non-leader",
            "I don't want to add any more band members"
          ]
        }
      ])
      .then((response) => {
        switch (response.bandMemberChoice) {
          case "Leader":
            addLeader();
            break;
          case "Non-leader":
            addNonLeader();
            break;
          default:
            buildTeam();
        }
      });
  }
  function addLeader() {
    inq
      .prompt([
        {
          type: "input",
          name: "leaderName",
          message: "What is your leader's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "You have to enter name for your leader.";
          }
        },
        {
          type: "input",
          name: "leaderId",
          message: "What is your leader's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idsArray.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "leaderClass",
          message: "What is your leader's class?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "You have to enter class for your leader.";
          }
        }
      ])
      .then((response) => {
        const leader = new Leader(
          response.leaderName,
          response.leaderId,
          response.leaderClass
        );
        bandMembers.push(leader);
        idsArray.push(response.leaderId);
        createBand();
      });
  }
  function addNonLeader() {
    inq
      .prompt([
        {
          type: "input",
          name: "nonLeaderName",
          message: "What is your band member's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "You have to enter name for your band member.";
          }
        },
        {
          type: "input",
          name: "nonLeaderId",
          message: "What is your band member's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idsArray.includes(answer)) {
                return "This ID is already taken. Please enter a different number.";
              } else {
                return true;
              }
            }
            return "Please enter a positive number greater than zero.";
          }
        },
        {
          type: "input",
          name: "nonLeaderClass",
          message: "What is your band member's class?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "You have to enter class for your band member.";
          }
        }
      ])
      .then((response) => {
        const bandMember = new BandMember(
          response.nonLeaderName,
          response.nonLeaderId,
          response.nonLeaderClass
        );
        bandMembers.push(bandMember);
        idsArray.push(response.nonLeaderId);
        createBand();
      });
  }

  const buildTeam = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, renderBand(bandMembers), "utf-8");
  };

  createBand();
};

appMenu();
