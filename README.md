# PROJECT NAME


  - [Overview](#Overview)
  - [Team](#Team)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
    - [Data Flow](#Data-Flow)
  - [Post-MVP](#Post-MVP)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview

**PROJECT NAME** is a workplace communication and informational tool. It
incorporates real-time chat with ActionCable connection to a Ruby on Rails
server, as well as a directory service organizing employees by their team,
expertise, etc.


## Team

- David Coughlin - User Experience Designer
- Errol Highberg - Software Developer
- Tara Solbrig - Software Developer
- Trevor Smith-Holbourn - Software Developer
- Valeria Gonzalez - User Experience Designer

<br>

## MVP

One core feature is an employee directory system which users can search by
employee name, team, or self-defined tags (skills, hobbies, etc.). These
searches can be used to start chats directly (with an entire team, for
example), as well as look up contact information for specific people.


### MVP Libraries and external APIs


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React            | _Front end framework for reusable components._ |
|   React Router   | _In-app routing to make single page application._ |
|     Axios        | _Simpler interface for getting data to/from front end._ |
|      Formik      | _Simpler form handling in React by reducing boilerplate._ |
|    Faker         | _Generate seed data for fast development._          |
| Ruby on Rails    | _Backend server with easy database and routing setup._ |
| CORS             | _Allow Cross Origin Resource Sharing in development._ |
| Tailwind CSS     | _Reduce boilerplate CSS for fast development._ |
| ActionCable.js   | _Real-time updates interfacing with Rails backend._ |
| React-Swipeable  | _Add swipe gestures for improved mobile experience._ |


|  External API    | Description |
| --- | --- |
| [GeoJS](https://geojs.io) | _Local time and geolocation._ |


<br>

### MVP Client (Front End)

#### Wireframes


#### Component Hierarchy
![Component Hierarchy](./docs/component_diagram.png)


#### Component Breakdown

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   N   | _The header will contain site navigation and logo._|



<br>

### MVP Server (Back End)

#### ERD Model
![ERD Model](./docs/erd.png)


#### Endpoints

- GET `/users`
	- Index route returning all users
- GET `/users/:id`
  - Show route returning a single user requested by ID

- GET `/rooms`
  - Index route returning a list of all chat rooms
- GET `/roomwithdetails/:id`
  - Show route for a single chat room with all its posts and user info

- POST `/posts`
  - Create route which adds a post to a room

- GET `/teams`
  - Index route returning all teams


<br>

### Data Flow

***


## Post-MVP

- Send email from app
- Share documents and / or media


<br>

***

## Code Showcase



## Code Issues & Resolutions

### Expected Issues



### Encountered Issues



***
