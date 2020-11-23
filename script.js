mapboxgl.accessToken =
  "pk.eyJ1IjoicmFodWxtaXNocmEwNSIsImEiOiJja2h1ZmUxZ3YwNG5hMnZvMmZ3eWYzMW51In0.Db_bI9t6YUt3LSS7D2qqYA"

  // We want to open map at the curret location of the user
  // The following api will take the user's currebt location
  // Whenever you see that a app says we want to use your current location they do it by this type of method
  // It takes three parameters
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })

  function successLocation(position) {
    // console.log(position);

    // We want when we open map we see our location, so to that we are writting a function.
    // IN mapbox api longitude comes first and then latitude.
    setupMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation() {
    // If there is an error then map will load at this coordinates
    // These are the coordinated of Delhi
    setUpMap([77.1025, 28.7041])
  }

  function setupMap(center) {

    // This was not initialy inside this function, we kept it in this function
    // becasue we want that when we open this it show our currect location map
    const map = new mapboxgl.Map({

      // This is sendin the map to the div with id "map"
      container: "map",

      // This is the style of the map we are accesing from the api
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,

      // We have to define zoom level because without it it will just show whole world.
      zoom: 15
    })

    // We get this from documentation of mapbox by searching navigationcontrol
    // This will give us the zoom-in and zoom-out button on the defalut position
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)

    // This is the direction plugin from mapbox
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
  }
