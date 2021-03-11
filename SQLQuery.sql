Create table dbo.Movies(
MoviesId int identity(1,1),
title varchar(500),
coverImage varchar(5000),
descriptionText varchar(5000),
releaseDate int,
casts varchar(500),
ratings int
)


SELECT * FROM Movies


INSERT INTO [dbo].[Movies] VALUES

('Ironbark','https://github.com/sejlap/Images/blob/main/ironbark.png', 'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
2020, 'Benedict Cumberbatch, Merab Ninidze', 5)


INSERT INTO [dbo].[Movies] VALUES
('News', 'https://github.com/sejlap/Images/blob/main/news.png', 'After getting turned down to become a police inspector, Rishi Menon starts his own detective agency. He is handed an assignment to investigate the murder of a woman and the disappearance of a college student',
2015, '	Freddy Issac, Venu', 1)


INSERT INTO [dbo].[Movies] VALUES
('Happily', 'https://github.com/sejlap/Images/blob/main/happy.png', 'A dark romantic comedy. Tom and Janet have been happily married for years. But a visit from a mysterious stranger leads to a dead body, a lot of questions, and a tense couples trip with friends who may not actually be friends at all.',
2021, 'Natalie Morales, Natalie Zea, Kerry Bishé', 4)

INSERT INTO [dbo].[Movies] VALUES
('Supernova', 'https://github.com/sejlap/Images/blob/main/supernova.png', 'Sam and Tusker are traveling across England in their old RV to visit friends, family and places from their past. Since Tusker was diagnosed with dementia two years ago, their time together is the most important thing they have.',
2020, 'Colin Firth, Stanley Tucci, Pippa Haywood', 3)

INSERT INTO [dbo].[Movies] VALUES
('A call to spy', 'https://github.com/sejlap/Images/blob/main/call.png', 'In the beginning of WWII, with Britain becoming desperate, Churchill orders his new spy agency - SOE - to recruit and train women as spies.',
2019, ' Sarah Megan Thomas, Stana Katic, Radhika Apte', 4)

INSERT INTO [dbo].[Movies] VALUES
('Pray: The Story of Patrick Peyton', 'https://github.com/sejlap/Images/blob/main/pray.png', 'Follows an Irish immigrant dreaming with becoming a millionaire but ending up championing a family message.',
2020, ' Steve Gibson, Liam Gillard, David L. Guffey, Dorothy Halloran', 5)


INSERT INTO [dbo].[Movies] VALUES
('The Nest', 'https://github.com/sejlap/Images/blob/main/nest.png', 'Life for an entrepreneur and his American family begins to take a twisted turn after moving into an English country manor.',
2020, '  Jude Law, Carrie Coon, Oona Roche, Charlie Shotwell', 4)

INSERT INTO [dbo].[Movies] VALUES
('Faust', 'https://github.com/sejlap/Images/blob/main/Faust.png', 'An ordinary man is lured into a strange puppet theatre by a map and finds himself embroiled in a production of the Faustian legend.',
1994,'Petr Cepek, Jan Kraus, Vladimír Kudla, Antonin Zacpal', 4)


INSERT INTO [dbo].[Movies] VALUES
('Made in Italy', 'https://github.com/sejlap/Images/blob/main/italy.png', 'A bohemian artist travels from London to Italy with his estranged son to sell the house he inherited from his late wife',
2020,' Yolanda Kettle, Micheál Richardson, Souad Faress, Liam Neeson', 4)



INSERT INTO [dbo].[Movies] VALUES
('City of Lies', 'https://github.com/sejlap/Images/blob/main/city.png', 'Russell Poole and Jack Jackson investigate the murders of rappers Notorious B.I.G. and Tupac Shakur.',
2018,'Johnny Depp, Forest Whitaker, Toby Huss', 3)



INSERT INTO [dbo].[Movies] VALUES
('Maggie', 'https://github.com/sejlap/Images/blob/main/maggie.png', 'A teenage girl in the Midwest becomes infected by an outbreak of a disease that slowly turns the infected into cannibalistic zombies. During her transformation, her loving father stays by her side.',
2015,'Arnold Schwarzenegger, Abigail Breslin, Joely Richardson, Laura Cayouette', 5)



INSERT INTO [dbo].[Movies] VALUES
('Adults in the Room', 'https://github.com/sejlap/Images/blob/main/adults.png', 'Greece in 2015: the economy is in tatters and the country is on the verge of bankruptcy. A new government rebels against the EUs iron-fisted rule and inspires millions of Europeans. Based on the political memoirs of Yanis Varoufakis.',
2019,'Christos Loulis, Alexandros Bourdoumis, Ulrich Tukur, Daan Schuurmans', 1)


                        SELECT  *
						FROM dbo.Movies
                        ORDER BY ratings DESC
						OFFSET 10 ROWS       
                        FETCH NEXT 10 ROWS ONLY;