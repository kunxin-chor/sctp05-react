import React, { useState } from "react";

export default function App() {
  // when the component renders for the first time (i.e after being mounted)
  // the fullName's value will be ""
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("blue");
  const [country, setCountry] = useState("sg");
  const [comments, setComments] = useState("");
  const [hobbies, setHobbies] = useState([]);

  // every event handler in React will recieve one parameter which is
  // event data (automatically) as the first argument
  const updateFullname = (e) => {
    setFullname(e.target.value);
  }

  const updateEmail = (e) => {
    // why use an arrow function to set the value
    // for this case, not necesary.
    // setting a state is ASYNC, we have no control over when it happens
    // when we use the arrow, the first parameter is the latest, freshest
    // known MOST accurate value of the state
    setEmail((prevValue) => e.target.value);
  }

  const updateFavoriteColor = (e) => {
    setFavoriteColor(e.target.value);
  }

  const updateComment = (e) => {
    // e.target => the element the changes happens on
    // e.target.value => what the element is supposed to change to
    setComments(e.target.value);
  }

  const updateHobbies = (e) => {
    console.log(e.target.value);
    console.log(e.target.checked);


    if (e.target.checked) {
      //hobbies.push(e.target.value);  
      // it might work, but not the correct way not supposed to mutate an array directly

      // straightforward method:
      // 1. clone the array
      const cloned = hobbies.slice();

      // 2. update (i.e mutate) the array
      cloned.push(e.target.value);

      // 3. set the cloned as the new state
      setHobbies(cloned);
    } else {
      const cloned = hobbies.slice();

      // delete: find the index and use splice
      const indexToDelete = hobbies.findIndex(current => current == e.target.value)
      cloned.splice(indexToDelete, 1);

      setHobbies(cloned);
   
    }


  }

  const updateHobbiesV2 = (e) => {
    if (e.target.checked) {
      // the user has just check the checkbox for a hobby
      const newHobby = e.target.value;

      // 1. clone an array with the spread operator
      // assume: hobbies contain ["netflix", "others"]
      // const cloned = [ ...hobbies]
      // => const cloned =  ["netflix", "others"]
      const cloned = [...hobbies];
      
      // 2. modify the cloned
      cloned.push(newHobby)

      // 3. set the new state
      setHobbies(cloned);
    } else {
      const hobbyToRemove = e.target.value;
      const cloned = [...hobbies];
      const index = cloned.findIndex(current => current == hobbyToRemove);
      cloned.splice(index);
      setHobbies(cloned);
    }
  }

  const updateHobbiesv3 = (e) => {
    if (e.target.checked) {
      const newHobby = e.target.value;
      const cloned = [...hobbies, newHobby];
      // assume hobbies = ["netflix", "others"]
      // and newHobby is 'sleeping'
      // const cloned = [...hobbies, newHobby] 
      // => const cloned = [...hobbies, "sleeping"]
      // => const cloned = ["netflix", "others", "sleeping"]
      setHobbies(cloned);

      // => setHobbies([...hobbies, e.target.value])
    } else {
      const hobbyToRemove = e.target.value;
      const indexToDelete = hobbies.findIndex(current => current ==hobbyToRemove);

      const lhs = hobbies.slice(0, indexToDelete);
      const rhs = hobbies.slice(indexToDelete+1);
      const cloned = [...lhs, ...rhs];

      // const cloned = [...hobbies.slice(0, indexToDelete), ...hobbies.slice(indexToDelete + 1)]
      // hobbies = ["netflix", "sleeping", "cycling", "others"]
      // goal: remove "cycling"
      // index to delete = 2
      // Left Hand Side = hobbies.slice(0, 2) => ["netflix", "sleeping"]
      // Right Hand Side = slices.slice(3) => ["others"]
      // ["netflix", "sleeping", "others"]
      setHobbies(cloned);

    }
  }

  return (
    <>
      <div>
        <label>Full Name</label>
        <input type="text" value={fullName} placeholder="Your full name here"
          onChange={updateFullname} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email}
          onChange={updateEmail} />
      </div>
      <div>
        <label>Favorite Color</label>
        <input type="radio" name="favoriteColor" value="red"
          onChange={updateFavoriteColor}
          checked={favoriteColor === "red"} />
        <label>Red</label>

        <input type="radio" name="favoriteColor"
          value="green"
          onChange={updateFavoriteColor}
          checked={favoriteColor === "green"}

        />
        <label>Green</label>

        <input type="radio" name="favoriteColor"
          value="blue"
          onChange={updateFavoriteColor}
          checked={favoriteColor === "blue"}

        />
        <label>Blue</label>
      </div>

      <div>
        <label>Comments</label>
        <textarea placeholder="Please leave your comments"
          value={comments}
          onChange={updateComment}></textarea>
      </div>

      <div>
        <label>Country</label>
        <select value={country} onChange={(e) => {
          setCountry(e.target.value)
        }}>
          <option value="">Select a country</option>
          <option value="sg">Singapore</option>
          <option value="th">Thailand</option>
          <option value="jp">Japan</option>
        </select>
      </div>

      <div>
        <label>Hobbies (choose more than one)</label>
        <input type="checkbox" name="hobbies" value="netflix"
          onChange={updateHobbies}
        />
        <label>Netflix and Chill</label>

        <input type="checkbox" name="hobbies" value="sleeping"
          onChange={updateHobbies}
        />
        <label>Sleeping</label>

        <input type="checkbox" name="hobbies" value="cycling"
          onChange={updateHobbies}
        />
        <label>Cycling</label>

        <input type="checkbox" name="hobbies" value="others"
          onChange={updateHobbies}
        />
        <label>Others</label>


      </div>

      <h2>Summary</h2>
      <ul>
        <li>Full name: {fullName}</li>
        <li>Email {email} </li>
        <li>Favorite Color: {favoriteColor}</li>
      </ul>
    </>
  )
}