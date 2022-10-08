# Vasco Da Gama Fan QUIZ!

Vasco Da Gama Fan Quiz was made for the Second Project required to complete the Diploma in Full Stack Software Development program at The Code Institute and shoes to accomplish with success all requirements as well to provide the developer a great learning experience through out the process. 

This Quiz intends to target Vasco da Gama fans from all around the world where fans are able to get their knowlodge and curiosities about the team checked trough a series of Questions. Each correct  answer will count a score point for you, and for each incorrect answer a point goes to the Outside Team.

![Vasco Da Gama Fan Quiz Mockup](assets/images/mockupframe.png)

[View the live project here]()

## Features 

### Existing Features

- __Header__

  - Featured on all pages, the header will include our club logo including our name and menu to the right handside.
  - Over half of the logo is presented as overlay to provide a consistent presence everywhere you go, reminding you who we are.

- __Navigation Bar__

  - Featured on all pages, the full responsive navigation bar always displayed on the top right includes links to the Home, Video, Gallery and Join Us page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the "back" button. 
  - The navigation bar includes a hover option underlining text to provide you a more visual friendly look and to give you a responsive idea of where are you about to click.

![Nav Bar](assets/images/navigationbar.png)

- __The landing page image__

  - The landing page includes a photograph of our team in the field and who we are description providing details as since when we exist, our goals and respect to what our flag stands for. 

![Landing Page](assets/images/landingpage.png)

- __Come Join Us__

  - This mid section provides an invitation to join us by showing a picture of our fan club watching the game in a bar, a happy moment for our members.
  - The user will aknowledge this invitation with a warm styling link in form of text trough out our message, we take this opportunity to also inform where we gather during the games and that it is not mandatory to consume alcohol in this location.

![Come Join us](assets/images/comejoinus.png)

- __Video Tribute__

  - Youtube video embedded to this page feature included to display the use of Iframe synthax learned in this course.
  - A preview text above the video suggesting it's content, video would display a few footages from Vasco da Gama team trough the 80's, 90's and 2000, our Vasco Dublin members with new shirt and a tribute to a loved member who died tragically from a hit and run in Dublin. 

![Video](assets/images/videotribute.png)

- __The Footer__ 

  - Appearing on every page the footer section includes links through icons from "Font Awesome" to the relevant social media sites for Vasco Dublin. The links will open to a new tab to allow easy navigation for the user. 
  - The icons should appear on centre of footer and social media it's mandatory this days, to create a better connection as well main form of news and point of contact along our form.

![Footer](assets/images/footer.png)

- __Gallery__

  - The gallery will provide the user with supporting images to see more of our members, what we do, our meetings, our games as well as cool logos and flags. 
  - Through properties such as column gaps and count learned in this course we provide a more visual friendly frame to the user. 

![Gallery](assets/images/gallery.png)

- __The Sign Up Page__

  - This page will allow the user to contac us through a form feature, including name, email, mobile number, desired message and option to join us on whatsapp group.
  - The form is grouped with fieldset tag as well as have other visual friendly and nice design features such as background color faded giving you opportunity to see flag image behind, border colors for hover option to visualy identify where you at, mandatory field setting to inform what is missing.

![Contact us](assets/images/contactus.png)

### Features Left to Implement

- To have live schedule introduced for next games.
- To introduce page designed to sell our uniforms, jackets and acessories to support charities.

## Testing 

- Different browsers(Chrome, Safari and Firefox) been tested to verify that page would work with no issue as well as mobile and table devices are responsive to Media querie styles implemented.

- The project is responsive, have a good clean visual effect and is fully functional.

- All features within header, main body, footer, menu been tested to confirm working properly and texts are clear and readable as well easy to understand.

- Form feature works where as desired all fields with except of "sign up for whatsapp group" are mandatory and submit button is responsive.

## Issues and Bugs

- Wrong use of rel attribute instead of target for _blank value.
- Embedded video link missused where forgot to remove parts of Youtube video link.
- Forgot to commit at certain stage of process leading to "modified" or "unmarked" notifications on GitPod having to research I was missing a simple save input.
- Gitpod blanked returning with no access to github, unable to push. A sign in from terminal or app would not work, resulting on having to open a new gitpod from github and paste changes made.
- Issues to set up logo image properly and having to recap CSS lessons as well using codebro channel to better understand how margins and padding works.
- Error 404 as href for "Video" was changed from id to class, issue solved.
- Error 404 as some images had extra / on path, hence not loading.
- Error 501 for unsupported method form, fixed.
- Space left on jpeg files later adjusted.

## Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](link)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](link)
- Accessibility
  - Accessibility confirmed by running it through lighthouse in devtools
  ![Accessibility](assets/images/lighthouse.png)

## Unfixed Bugs

No unfixed bugs

## Technologies Used
### Main language used

- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")

### Frameworks, Libraries & Programs Used

- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Open Sans" and "Playfair" into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used on all pages of this website to import icons to the footer (social media icons) for UX purposes.
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
     - GitPod was used for writing code, commiting, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing.
- [Figma](https://www.figma.com/ "Link to Figma homepage")
     - Figma was used to create the concept art during the design phase of the project.

## Deployment

- This project was developed using [GitPod](https://www.gitpod.io/ "Link to GitPod site"). 
- Through Gitpod terminal I have executed commitments and pushed changes to [GitHub](https://github.com/ "Link to GitHub").
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section General, select the option "Pages".
  - Under GitHub Pages, select Branch from "None" to "main".
  - Once selected "main" push the save option, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://6viper.github.io/Vasco-Dublin/

## Credits 

### Content 

- The text for the Home page was provided by myself and members of the Vasco Dublin Fan Club.
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home page, gallery, sign up page and logos are from Vasco Dublin whatsapp group or Instagram page.
- The Video used for this Tribute is from Vasco Dublin Youtube channel.

### Code 
This has been the most learning experience trough out this course so far, where the developer have used several sites and channels to better understand codes been used and how it properly works. Several learning projects reviewed such as Coffee House, Running project, Readme file ideas from Running project, samples from Coding Club and Survival Guild. Links bellow:

- [Code Institue videos](https://learn.codeinstitute.net/dashboard "Link to Code institute dashboard")
- [Love Running](https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md "Link to Running Project Readme.md")
- [Survival Guild](https://github.com/Irishbecky91/survival-guild/blob/main/README.md#Issues-and-Bugs "Link to Survival Guild")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")
- [Bro Code](https://www.youtube.com/c/BroCodez "Link to Bro Code Youtube Channel")
