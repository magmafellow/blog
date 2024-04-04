
function minimize(text: string, length: number, dotted: boolean = true) {
  let minimizedS = '';
  for (let i = 0; i < length; i++) {
    minimizedS = minimizedS + text[i];
  }
  if(dotted){
    minimizedS = minimizedS + '...';
  }
  return minimizedS;
}

export {
  minimize
}