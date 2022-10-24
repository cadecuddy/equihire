# 📃 equihire


## Inspiration

As students, all of us are applying to internships and job opportunities. However, not all of us are are afforded the same opportunity as each other. Studies have shown that hiring managers tend to hold unfair biases against minority candidates. In a study conducted by researchers from the University of Pennsylvania, it was found that on average, a female or minority candidate with a 4.0 GPA received the same rating as a white man with a 3.75 GPA. That's why we built Equihire, a tool for companies to help level the playing field for all candidates.

## What it does

As a MVP, equihire is a web application tool for companies to review applicant resumes with all potential biases removed. Companies have the ability to toggle anonymization features for Name, University, Location, etc.

## How we built it

Our backend is built with Flask and Cockroach DB. We use the Affinda API to facilitate the parsing of PDF to JSON. On the frontend, we build the applicant tracking system app using React & Tailwind CSS.

## Challenges we ran into

One of the challenges working with CockroachDB is figuring out the schema. Initially, the data returned from the parsing API is hierarchal, but we had to convert it to a flat structure for a consistent schema to use in the frontend and backend. This helped improve the performance of the resume parsing and frontend.

## Accomplishments that we're proud of

We were able to finish the entire development process from ideation, defining the requirements, and development of the application in 24 hours! We are proud of how the frontend and backend/database components came together and how much we learned along the way!

## What we learned

We were completely new to CockroachDB. The documentation made it easy to start. Another thing we learned is the importance of keeping time management, and planning ahead regarding the UI/UX and the DB schemas to make everything smoother in implementation.

## What's next for Equihire

While our solution greatly minimizes the potential for bias in the initial stage of hiring, biases may creep in after the interview stage. We aim to add more features to tackle this issue, expanding the pipeline and making sure biases don't leak in. We also plan to add the applicant-facing side of the application, as on the company-facing part of the application has been developed so far.
