const en1 = require("./enum");

function initByRole(role: number) {
  if (role === en1.Role.Reporter || role === en1.Role.Developer) {
    //  do sth
  } else if (role === en1.Role.Maintainer || role === en1.Role.Owner) {
    // do sth
  } else if (role === en1.Role.Guest) {
    // do sth
  } else {
    // do sth
  }
}
