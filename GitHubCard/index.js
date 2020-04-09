/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const entryPoint = document.querySelector('.cards')

const followersArray = ['https://https://api.github.com/users/SandraCoburn', 'https://api.github.com/users/jonush', 'https://api.github.com/users/msheets1983', 'https://api.github.com/users/maryjwaters7']

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

// followersArray.forEach(attr => {
//   axios.get('https://api.github.com/users/${attr}/')
//   .then(
//     answer => {
//       cards.appendChild(cardMaker(answer.data))
//     })
//   .catch(
//     error => {
//       console.log('Corrupt API with other users')
//     }
//   )
// })



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function cardMaker(attr){

  //Define DOM elements
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const gitAddress = document.createElement('a')
  const follower = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')


  userImg.src = attr.avatar_url
  name.textContent = attr.name
  userName.textContent = attr.userName
  location.textContent = 'Location: ' + attr.location
  profile.textContent = 'Profile: '
  gitAddress.textContent = attr.html_url
  gitAddress.href = attr.html_url
  follower.textContent = 'Followers: ' + attr.followers
  following.textContent = 'Following: ' + attr.following
  bio.textContent = 'Bio ' + attr.bio

  //Add classes
    card.classList.add('card')
    cardInfo.classList.add('card-info')
    name.classList.add('name')
    userName.classList.add('username')

  //
  card.append(userImg)
  card.append(cardInfo)
  cardInfo.append(name)
  cardInfo.append(userName)
  cardInfo.append(location)
  cardInfo.append(profile)
  profile.append(gitAddress)
  cardInfo.append(follower)
  cardInfo.append(following)
  cardInfo.append(bio)
  
  return card
}


axios.get('https://api.github.com/users/james-coulter', { crossdomain: true })


.then( response => {
  console.log(response.data)
  entryPoint.append(cardMaker(response.data))
})

.catch( error => {
  console.log('Issue with personal data', error)
})

followersArray.forEach(item => {
  axios.get(item)
  .then(response => {
    console.log(response.data)
    entryPoint.append(cardMaker(response.data));
  })
  .catch(error => {
    console.log("the data was not returned", error)
  });
});