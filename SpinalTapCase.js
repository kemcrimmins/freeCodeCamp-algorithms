function spinalCase(str) {
  //Transforms a string to lowercase with words separated by an underscore.
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  str = str.replace(/\s+/g, '-').toLowerCase();
  str = str.replace(/_/g, '-');
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');