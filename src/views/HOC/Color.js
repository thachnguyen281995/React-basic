function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function Color(WrappedComponent){
      const styleRandomColor = getRandomColor()
    return(props=>
        <div style = {{color:styleRandomColor}}>
            <WrappedComponent {...props} /> 
        </div>
    )
  }
  export {getRandomColor,Color}