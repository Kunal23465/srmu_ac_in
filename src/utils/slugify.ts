export const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[()]/g, "")            // remove brackets
      .replace(/&/g, "")               // remove &
      .replace(/\./g, "-")             // convert . to -
      .replace(/\s+/g, "-")            // spaces to -
      .replace(/-+/g, "-")             // remove multiple -
      .replace(/^-|-$/g, "")           // remove starting/ending -
      .replace(/^b-tech-in-/, "b-tech-")
      .replace(/^m-tech-in-/, "m-tech-")
      .replace(/^bba-in-/, "bba-")
      .replace(/^ba-in-/, "ba-")
      .replace(/^ma-in-/, "ma-")
      .replace(/^b-sc-in-/, "b-sc-")
      .replace(/^m-sc-in-/, "m-sc-")
      .replace(/^b-com-in-/, "b-com-")
      .replace(/^ph-d-in-/, "ph-d-")
      .replace(/^b-c-a\b/, "bca")      // convert b-c-a to bca
      .replace(/-with-.*/, "")         // remove '-with' and everything after
      .replace(/^-|-$/g, "");
  };
