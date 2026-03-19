export const slugify = (str: string) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[()]/g, "")            // remove brackets
      .replace(/&/g, "")               // remove &
      .replace(/\./g, "-")             // convert . to -
      .replace(/\s+/g, "-")            // spaces to -
      .replace(/-+/g, "-")             // remove multiple -
      .replace(/-in-/g, "-")           // remove only '-in-'
      .replace(/^b-c-a\b/, "bca")      // convert b-c-a to bca
      .replace(/-with-.*/, "")         // remove '-with' and everything after
      .replace(/^-|-$/g, "");          // remove starting/ending -
  };