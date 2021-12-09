// function subSeq(p, up) {
//   if (up.length == 0) {
//     console.log(p);
//     return;
//   }
//   //now take make two recursion call whether it will accept first char or not it will have both choics
//   let ch = up.charAt(0);

//   // either we will add it or ignore it
//   subSeq(p + ch, up.substring(1));
//   subSeq(p, up.substring(1));
// }

// subSeq("", "abc");

//print subsequence

function runProgramme(input) {
  let data = input;

  function subseq(p, up) {
    if (up.length == 0) {
      console.log(p);

      return;
    }

    let firstCh = up.charAt(0);

    subseq(p + firstCh, up.substring(1));
    subseq(p, up.substring(1));
  }
  subseq("", data);
}

runProgramme("abcd");
