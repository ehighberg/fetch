# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


teamA = Team.create!(
    name: "A",
    description: "A",
    department: "Engineering",
    manager_id: 0
)

teamB = Team.create!(
    name: "B",
    description: "B",
    department: "UX",
    manager_id: 0
)

teamC = Team.create!(
    name: "C",
    description: "C",
    department: "CSUITE",
    manager_id: 0
)

userA = User.create(
    name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
    email: Faker::Internet.email,
    password_digest: "password",
    presence: "offline",
    status_message: "Out of office till May 27th - Reachable on 555-999-0000",
    slack: Faker::Internet.username,
    phone: Faker::PhoneNumber.phone_number,
    avatar: Faker::Placeholdit.image(size:"50x50"),
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: Faker::Company.profession,
    team: teamC,
    bio: Faker::Hipster.paragraph,
    pronouns: "they / them",
    preferred_contact_method: 'cell phone',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60)
)

teamA.manager_id = userA.id
teamA.save()
teamB.manager_id = userA.id
teamB.save()

userB = User.create(
    name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
    email: Faker::Internet.email,
    password_digest: "password",
    presence: "away",
    status_message: "All day meetings",
    slack: Faker::Internet.username,
    phone: Faker::PhoneNumber.phone_number,
    avatar: Faker::Placeholdit.image(size:"50x50"),
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: Faker::Company.profession,
    team: teamA,
    bio: Faker::Hipster.paragraph,
    pronouns: "she / her",
    preferred_contact_method: 'email',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60)
)

teamC.manager_id = userB.id
teamC.save()

userC = User.create(
    name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
    email: Faker::Internet.email,
    password_digest: "password",
    presence: "online",
    status_message: "Here",
    slack: Faker::Internet.username,
    phone: Faker::PhoneNumber.phone_number,
    avatar: Faker::Placeholdit.image(size:"50x50"),
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: Faker::Company.profession,
    team: teamB,
    bio: Faker::Hipster.paragraph,
    pronouns: "he / him",
    preferred_contact_method: 'email',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60)
)

userD = User.create(
    name: "#{Faker::Name.first_name} #{Faker::Name.last_name}",
    email: Faker::Internet.email,
    password_digest: "password",
    presence: "online",
    status_message: "Hi!",
    slack: Faker::Internet.username,
    phone: Faker::PhoneNumber.phone_number,
    avatar: Faker::Placeholdit.image(size:"50x50"),
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: Faker::Company.profession,
    team: teamB,
    bio: Faker::Hipster.paragraph,
    pronouns: "they / them",
    preferred_contact_method: 'cell phone',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60)
)

roomPublic = Room.create(
    name: "public"
)

room1 = Room.create(
    name: "userA userB"
)

room2 = Room.create(
    name: "userB userC"
)

post1 = Post.create(
    content: Faker::Hipster.sentence,
    room: roomPublic,
    user: userA
)

post2 = Post.create(
    content: Faker::Hipster.sentence,
    room: roomPublic,
    user: userB
)

post3 = Post.create(
    content: Faker::Hipster.sentence,
    room: room1,
    user: userA
)

post4 = Post.create(
    content: Faker::Hipster.sentence,
    room: room1,
    user: userB
)

post5 = Post.create(
    content: Faker::Hipster.sentence,
    room: room2,
    user: userB
)

post6 = Post.create(
    content: Faker::Hipster.sentence,
    room: room2,
    user: userC
)

tag1 = Tag.create(
    name:"Developer"
)

tag2 = Tag.create(
    name:"UX"
)

tag3 = Tag.create(
    name:"Frontend"
)

tag4 = Tag.create(
    name:"Fullstack"
)

tag5 = Tag.create(
    name:"FrenchSpeaker"
)

tag1.users.push(userA)
tag2.users.push(userB)
tag3.users.push(userC)
tag4.users.push(userD)
tag5.users.push(userA)
tag1.users.push(userB)
tag2.users.push(userC)
