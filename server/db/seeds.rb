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


teamAdmin = Team.create!(
    name: "Administration",
    description: "Administration",
    department: "Administration",
    manager_id: 0
)

teamEng = Team.create!(
    name: "Engineering",
    description: "Engineering",
    department: "Engineering",
    manager_id: 0
)

teamHR = Team.create!(
    name: "Human Resouces",
    description: "Human Resouces",
    department: "Human Resouces",
    manager_id: 0
)

teamProd = Team.create!(
    name: "Product",
    description: "Product",
    department: "Product",
    manager_id: 0
)

teamRes = Team.create!(
    name: "Research",
    description: "Research",
    department: "Research",
    manager_id: 0
)

teamMGMT = Team.create!(
    name: "Management",
    description: "Management",
    department: "Management",
    manager_id: 0
)



anna = User.create(
    name: "Anna Wu",
    email: "anna@company.com",
    password_digest: "password",
    presence: "online",
    status_message: "Stay safe everyone",
    slack: "@annawu",
    phone: Faker::PhoneNumber.phone_number,
    avatar: 'https://i.imgur.com/DDyFOUw.png',
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: "Lead Systems Engineer",
    team: teamMGMT,
    bio: Faker::Hipster.paragraph,
    pronouns: "She / Her",
    preferred_contact_method: 'Cell phone',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
    level: 10
)

teamEng.manager_id = anna.id
teamEng.save()

anna_to_jason_dm_room = Room.create(
    name: "Room #{anna.name}"
)

jason = User.create(
    name: "Jason Greenfield",
    email: "jason@company.com",
    password_digest: "password",
    presence: "offline",
    status_message: "Out of office, back on May 27th",
    slack: "@jasong",
    phone: Faker::PhoneNumber.phone_number,
    avatar: 'https://i.imgur.com/9P6oRuB.png',
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: "Engineer Team Manager",
    team: teamEng,
    bio: Faker::Hipster.paragraph,
    pronouns: "He / Him",
    preferred_contact_method: 'Email',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
    level: 9
)

room2 = Room.create(
    name: "Room #{jason.name}"
)


julia = User.create(
    name: "Julia Brooks",
    email: "julia@company.com",
    password_digest: "password",
    presence: "online",
    status_message: "Here",
    slack: "@juliabrooks",
    phone: Faker::PhoneNumber.phone_number,
    avatar: 'https://i.imgur.com/rAqU6h9.png',
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: "Engineer Team Manager",
    team: teamEng,
    bio: Faker::Hipster.paragraph,
    pronouns: "She / Her",
    preferred_contact_method: 'email',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
    level: 8
)

julia_to_sam_dm_room = Room.create(
    name: "Room #{julia.name}"
)

sam = User.create(
    name: "Sam Hernandez",
    email: "sam@company.com",
    password_digest: "password",
    presence: "online",
    status_message: "Working on west coast hours",
    slack: "@samh",
    phone: Faker::PhoneNumber.phone_number,
    avatar: 'https://i.imgur.com/C3D6KXJ.png',
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: "Software Engineer",
    team: teamEng,
    bio: Faker::Hipster.paragraph,
    pronouns: "He / Him",
    preferred_contact_method: 'slack',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
    level: 5
)

room4 = Room.create(
    name: "Room #{sam.name}"
)

conner = User.create(
    name: "Conner Leffert",
    email: "conner@company.com",
    password_digest: "password",
    presence: "away",
    status_message: "Limited availability this week",
    slack: "@connerleffert",
    phone: Faker::PhoneNumber.phone_number,
    avatar: 'https://i.imgur.com/KMgsZ9I.png',
    last_location: "#{Faker::Address.latitude} #{Faker::Address.longitude}",
    title: "Software Engineer",
    team: teamEng,
    bio: Faker::Hipster.paragraph,
    pronouns: "He / Him",
    preferred_contact_method: 'phone',
    average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
    level: 4
)

room5 = Room.create(
    name: "Room #{conner.name}"
)

post1 = Post.create(
    content: Faker::Hipster.sentence,
    room: anna_to_jason_dm_room,
    user: jason
)

10.times do
    Post.create(
        content: Faker::Hipster.sentence,
        room: anna_to_jason_dm_room,
        user: anna
    )
    Post.create(
        content: Faker::Hipster.sentence,
        room: anna_to_jason_dm_room,
        user: jason
    )
end

20.times do
    Post.create(
        content: Faker::Hipster.sentence,
        room: julia_to_sam_dm_room,
        user: julia
    )
    Post.create(
        content: Faker::Hipster.sentence,
        room: julia_to_sam_dm_room,
        user: sam
    )
end


10.times do
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
        team: teamAdmin,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )
end

    userAdminManager = User.create(
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
        team: teamMGMT,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )

teamAdmin.manager_id = userAdminManager.id
teamAdmin.save()

10.times do
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
        team: teamHR,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )
end

    userHRManager = User.create(
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
        team: teamMGMT,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )

teamHR.manager_id = userHRManager.id
teamHR.save()

10.times do
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
        team: teamProd,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )
end

    userProdManager = User.create(
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
        team: teamMGMT,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )

teamProd.manager_id = userProdManager.id
teamProd.save()

10.times do
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
        team: teamRes,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )
end

    userResManager = User.create(
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
        team: teamMGMT,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 3
        )

teamRes.manager_id = userResManager.id
teamRes.save()


    ceo = User.create(
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
        team: teamMGMT,
        bio: Faker::Hipster.paragraph,
        pronouns: "They / Them",
        preferred_contact_method: 'cell phone',
        average_response_time_minutes: Faker::Number.between(from: 1, to: 60),
        level: 15
        )

teamMGMT.manager_id = ceo.id
teamMGMT.save()

# post2 = Post.create(
#     content: Faker::Hipster.sentence,
#     room: roomPublic,
#     user: userB
# )

# post3 = Post.create(
#     content: Faker::Hipster.sentence,
#     room: room1,
#     user: userA
# )

# post4 = Post.create(
#     content: Faker::Hipster.sentence,
#     room: room1,
#     user: userB
# )

# post5 = Post.create(
#     content: Faker::Hipster.sentence,
#     room: room2,
#     user: userB
# )

# post6 = Post.create(
#     content: Faker::Hipster.sentence,
#     room: room2,
#     user: userC
# )

tag1 = Tag.create(
    name:"Engineering Team"
)

# tag2 = Tag.create(
#     name:"UX"
# )

# tag3 = Tag.create(
#     name:"Frontend"
# )

# tag4 = Tag.create(
#     name:"Fullstack"
# )

# tag5 = Tag.create(
#     name:"FrenchSpeaker"
# )

tag1.users.push(anna)
# tag2.users.push(userB)
# tag3.users.push(userC)
# tag4.users.push(userD)
# tag5.users.push(userA)
# tag1.users.push(userB)
# tag2.users.push(userC)
