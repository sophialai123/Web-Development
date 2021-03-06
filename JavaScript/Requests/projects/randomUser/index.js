


//fethch is return a promise 
// const responseData = fetch("https://randomuser.me/api/").then((data) => {
//   //console.log(data);


//   // return a response json data
//   return data.json()

// })

//   .then((data) => {

//     //return a result
//     const resultData = data.results
//     console.log(resultData)

//     //return first results

//     const firstData = resultData[0]
//     console.log(firstData)

//   })
//   .catch((data) => {
//     console.log('This is failed!')
//   })

// console.log(responseData)




/*  async await function */

async function fetchUser() {

  try {
    const user = await fetch("https://randomuser.me/api/")
      .then((data) => {
        return data.json()

      })
      .then((data) => {
        console.log(data)
        return data.results[0]
      })
    displayUser(user)
  }
  catch (error) {
    alert('Sorry somethis went wrong!!!!!', error)

  }
  finally {
    console.log("This will run anyway!!!")
  }

}

fetchUser()


const displayUser = (user) => {


  //1.Create h1 html element
  let title = document.createElement("h1");
  //2.append to the body and add a classlist name
  document.body.appendChild(title).classList.add('title');
  //3. get the title document
  let titleClassName = document.querySelector(".title")
  //4. display text on the browser
  titleClassName.innerHTML = "Randome User Information";
  //5. change the style 
  titleClassName.style.textAlign = 'center';


  // create an image elment
  let img = document.createElement("IMG");
  let imgSrc = user.picture.large;
  img.setAttribute('src', imgSrc);
  let userImage = document.body.appendChild(img).classList.add("userImg");


  //create mutiple elements
  let userInfo = [`Age: ${user.dob.age}`, `Gender: ${user.gender}`, `Nationality: ${user.nat}`, `Name: ${user.name.first} ${user.name.last}`, `Phone: ${user.phone}`, `Email: ${user.email}`,];

  userInfo.forEach(function (el) {
    let div = document.createElement("div");
    div.className = "finalBlock";
    div.innerHTML = el;
    document.body.appendChild(div);
  });


}


