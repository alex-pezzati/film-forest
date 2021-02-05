'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Movies', [{
                title: 'Soul',
                genre: 'Animation',
                releaseDate: new Date('2020-12-05'),
                description: 'After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.',
                totalRating: .8,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/soul.jpg'
            },
            {
                title: 'Onward',
                genre: 'Animation',
                releaseDate: new Date('2020-03-06'),
                description: 'Two elven brothers embark on a quest to bring their father back for one day.',
                totalRating: .74,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/onward.jpg'
            },
            {
                title: 'Inside Out',
                genre: 'Animation',
                releaseDate: new Date('2015-06-19'),
                description: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
                totalRating: .81,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/insideOut.jpg'
            },
            {
                title: 'Coco',
                genre: 'Animation',
                releaseDate: new Date('2017-12-22'),
                description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
                totalRating: .84,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/coco.jpg'
            },
            {
                title: 'Fight Club',
                genre: 'Drama',
                releaseDate: new Date('1999-10-15'),
                description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
                totalRating: .88,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/fightClub.jpg'
            },
            {
                title: 'Inception',
                genre: 'Action',
                releaseDate: new Date('2010-06-16'),
                description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
                totalRating: .88,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/inception.jpg'
            },
            {
                title: 'Twilight',
                genre: 'Fantasy',
                releaseDate: new Date('2008-11-21'),
                description: 'When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.',
                totalRating: .52,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/twilight.jpg'
            },
            {
                title: 'Divergent',
                genre: 'Mystery',
                releaseDate: new Date('2014-03-21'),
                description: 'In a world divided by factions based on virtues, Tris learns she\'s Divergent and won\'t fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it\'s too late.',
                totalRating: .66,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/divergent.jpg'
            },
            {
                title: 'Set It Up',
                genre: 'Romance',
                releaseDate: new Date('2018-06-15'),
                description: 'Two corporate executive assistants hatch a plan to match-make their two bosses.',
                totalRating: .65,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/setItUp.jpg'
            },
            {
                title: 'Stranger Than Fiction',
                genre: 'Comedy',
                releaseDate: new Date('2006-11-10'),
                description: 'I.R.S. auditor Harold Crick suddenly finds himself the subject of narration only he can hear: narration that begins to affect his entire life, from his work, to his love-interest, to his death.',
                totalRating: .75,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/strangerThanFiction.jpg'
            },
            {
                title: 'Always Be My Maybe',
                genre: 'Romance',
                releaseDate: new Date('2019-05-31'),
                description: 'Everyone assumed Sasha and Marcus would wind up together except for Sasha and Marcus. Reconnecting after 15 years, the two start to wonder - maybe?',
                totalRating: .68,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/alwaysBeMyMaybe.jpg'
            },
            {
                title: 'Murder Mystery',
                genre: 'Comedy',
                releaseDate: new Date('2019-06-14'),
                description: 'A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage, but end up getting framed and on the run for the death of an elderly billionaire.',
                totalRating: .6,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/murderMystery.jpg'
            },
            {
                title: 'The Princess Bride',
                genre: 'Adventure',
                releaseDate: new Date('1987-10-09'),
                description: 'While home sick in bed, a young boy\'s grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.',
                totalRating: .8,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/princesBride.jpg'
            },
            {
                title: 'Finding Nemo',
                genre: 'Animation',
                releaseDate: new Date('2003-05-30'),
                description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
                totalRating: .81,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/findingNemo.jpg'
            },
            {
                title: 'Clue',
                genre: 'Mystery',
                releaseDate: new Date('1985-12-13'),
                description: 'Six guests are anonymously invited to a strange mansion for dinner, but after their host is killed, they must cooperate with the staff to identify the murderer as the bodies pile up.',
                totalRating: .73,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/clue.jpg'
            },
            {
                title: 'The Rocky Horror Picture Show',
                genre: 'Comedy',
                releaseDate: new Date('1975-08-31'),
                description: 'A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.',
                totalRating: .74,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/rockyHorrorPictureShow.jpg'
            },
            {
                title: 'Borat',
                genre: 'Comedy',
                releaseDate: new Date('2006-11-03'),
                description: 'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.',
                totalRating: .73,
                createdAt: new Date(),
                updatedAt: new Date(),
                movieUrl: '/public/images/movies/borat.jpg'
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete('Movies', null, {});
    }
};
