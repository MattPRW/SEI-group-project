![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Software Engineering Immersive: Project 3

The third project for the General Assembly Software Engineering Immersive course. This was a full-stack application using a React front end with an Express. and MongoDB back end 

---

# Rekordr

Using  React, Node.js, Express and MongoDB along with the Deezer public API, we created a record collection comparison and management site. Users can search the Deezer library for albums, listen to previews of tracks, and add albums into their personal collections. 

## Built With	

		* HTML5
		* CSS3
		* React
		* Axios
		* Node.js
		* MongoDB
		* Mongoose
		* Express

## Deployment

The site was deployed using Heroku and can be found here:

https://rekordr.herokuapp.com/

## Getting Started

Use the clone button to download the website source code. From the root directory type 'yarn serve' in the terminal. The project wil run on localhost:8000, and wil be viewable on any web browser.

## Website Structure

The site will always open on a the home page which will only allow access to either the login or register pages. Until the user has logged in or registered the rest of the site is locked down.

![home-page-screenshot](https://imgur.com/pNXBEfq)

Once logged in the user will be taken to their dashboard or 'Rekordbox' page. If there are no records in the collection already the option will be given to move to the search page to start populating the collection. Otherwise, the collection will be displayed, with the option to play samples from each album, or to remove from the collection. The dashboard page also contains a link to the edit user details page.

![dash-screenshot](https://imgur.com/FTeoqle)

From the search page the app communicates with the Deezer library and the user can preview tracks and populate their collection. If the search returns a result that is already included in the users collection the option to add will be switched with the option to remove.

![search-screenshot](https://imgur.com/ZF1zzjL)

The final page is the 'View Users' page. From here the user can view a list of all other registered users. Along with the other user's name and profile picture the count of records in their collection is shown, along with the count of records in common with the logged in user. Following the link through allows the any other users profile to be viewed.

## Error Handling

One aspect of the development I managed was the error handling for the forms. I decided that rather than using a one-size-fits-all style of error message, I would rather create dynamic messaginges based on what response was brought back from the call to our backend. I would look for specific messages that were returned and then substitute in a more user friendly message on the front-end form. For example a different message is displayed on the register page when the email is blank to when the email has already been registered using the code below-

```javascript
{errors === 'Request failed with status code 401' && <p className="help is-danger">Invalid Email or Password </p>}
            {errors && errors.email === `Error, expected \`email\` to be unique. Value: \`${profile.email}\`` && <p className="help is-danger">Email taken</p>}
            {errors && errors.email === 'Path `email` is required.' && <p className="help is-danger">Email is required</p>}
```

## Nav Bar

I was also tasked with making a responsive Nav Bar that would be displayed throughout the app. This was made with pure CSS and has 3 different modes. The first being displayed before the user is logged in which contains only the logo and links to login or signup

![Nav-Loggedout-screenshot](https://imgur.com/agnQbRT)

The next is the logged in full size nav bar which contains more links to the search and view users page, along with the option to log out of the site. On the other side the logged in users name and image is displayed.

![Nav-Loggedout-screenshot](https://imgur.com/agnQbRT)

The third is controlled with a CSS media query and removes the username from the bar allowing the bar to shrink down to work on mobile devices

![Nav-Loggedout-screenshot](https://imgur.com/Sfn2iaw)

## Challenges and future improvements

When the project was first discussed we had a number of ideas that never made it through to the final product, due to time restrictions. If I were to revisit the project I would like to add more social features, such as messaging and liking records. We had planned to give each user a score based on the ratings that other users could anonomously give.

There are also a few styling issues that we didn't iron out before we ran out of time, so it would be good to g back and polish up the presentation somewhat swell.

## Author

Matt Wilkie
Link to portfolio here: matthewwilkie.com

