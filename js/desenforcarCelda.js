export function DesenforcarCelda(e){
  if(e.target.id){
    if (e.code === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };
};