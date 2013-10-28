var Employees = {
    entries: [
        {first: 'Jack', last: 'Donaghy', title: 'President', dept: 'Executive', pic: 'http://ia.media-imdb.com/images/M/MV5BMTQwMDQ2Mzk2N15BMl5BanBnXkFtZTcwNjQxODQwOQ@@._V1._CR250,0,1100,1100_SS90_.jpg'},
        {first: 'Liz', last: 'Lemon', title: 'Head Writer', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BMTgyNDEwMzkwNF5BMl5BanBnXkFtZTcwNjA4MDg2OA@@._V1_SX100_CR0,0,100,100_.jpg'},
        {first: 'Tracy', last: 'Jordan', title: 'Actor', dept: 'Talent', pic: 'http://ia.media-imdb.com/images/M/MV5BMTg2MTczMDQzNV5BMl5BanBnXkFtZTcwNjA4Mzk1OA@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Jenna', last: 'Maroney', title: 'Actor', dept: 'Talent', pic: 'http://ia.media-imdb.com/images/M/MV5BMTcyNjk3NzcxMV5BMl5BanBnXkFtZTcwMTc4MzMwOQ@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Kenneth', last: 'Parcell', title: 'Page', dept: 'Pages', pic: 'http://ia.media-imdb.com/images/M/MV5BMTQ3OTU2NDA3NF5BMl5BanBnXkFtZTcwMjU4MzMwOQ@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Frank', last: 'Rossitano', title: 'Writer', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BNTk0OTM3NDMwOF5BMl5BanBnXkFtZTcwMDg4MzMwOQ@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Pete', last: 'Hornberger', title: 'Producer', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BMTQzOTA0MTM0OF5BMl5BanBnXkFtZTcwMjA4MDUzNw@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'James "Toofer"', last: 'Spurlock', title: 'Writer', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BMjA5MjAxMjA2M15BMl5BanBnXkFtZTcwMTQ0NTU2MQ@@._V1_SX100_CR0,0,100,100_.jpg'},
        {first: 'John', last: 'Lutz', title: 'Writer', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BMjE1NDk5MTcyMl5BMl5BanBnXkFtZTcwODA1OTI0Mw@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Dot', last: 'Com', title: 'Companion', dept: 'Entourage', pic: 'http://ia.media-imdb.com/images/M/MV5BMTU4MjM0ODIxMF5BMl5BanBnXkFtZTcwMDU4MzMwOQ@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Grizz', last: 'Chapman', title: 'Companion', dept: 'Entourage', pic: 'http://ia.media-imdb.com/images/M/MV5BMTk2Mzk5NzE2OV5BMl5BanBnXkFtZTcwOTUxNzkwNQ@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Cerie', last: 'Xerox', title: 'Assistant', dept: 'Production', pic: 'http://ia.media-imdb.com/images/M/MV5BOTY4ODk4NDg2Nl5BMl5BanBnXkFtZTcwMDk3MDk4Mw@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Jonathan', last: 'Theassistant', title: 'Assistant', dept: 'Executive', pic: 'http://ia.media-imdb.com/images/M/MV5BMTgzMDI1NDA2MF5BMl5BanBnXkFtZTcwNDI1MjQyMw@@._V1_SX100_CR0,0,100,100_.jpg'},
        {first: 'Leo', last: 'Spaceman', title: 'Doctor', dept: 'HR', pic: 'http://ia.media-imdb.com/images/M/MV5BMjE5NTIxMjU2Ml5BMl5BanBnXkFtZTcwMjYyODU1Mg@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Josh', last: 'Girard', title: 'Actor', dept: 'Talent', pic: 'http://ia.media-imdb.com/images/M/MV5BMjE0Mjk3NTkwMF5BMl5BanBnXkFtZTcwMTI4ODkzMg@@._V1._SX100_SY140_.jpg'},
        {first: 'Danny', last: 'Baker', title: 'Actor', dept: 'Talent', pic: 'http://ia.media-imdb.com/images/M/MV5BMTkzMjgyNjM2Ml5BMl5BanBnXkFtZTcwNjA2MjUwMw@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Don', last: 'Geiss', title: 'CEO', dept: 'Executive', pic: 'http://ia.media-imdb.com/images/M/MV5BMTQ1ODc3MTE5MF5BMl5BanBnXkFtZTcwMTU0NTU2MQ@@._V1_SX100_CR0,0,100,100_.jpg'},
        {first: 'Devon', last: 'Banks', title: 'Vice President', dept: 'West Coast Media', pic: 'http://ia.media-imdb.com/images/M/MV5BMjE1NTIyMDk3OF5BMl5BanBnXkFtZTcwMzczNjEwMg@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Hazel', last: 'Wassername', title: 'Page', dept: 'Pages', pic: 'http://ia.media-imdb.com/images/M/MV5BMzA4ODI1MDMxOF5BMl5BanBnXkFtZTcwNDA4MDUzNw@@._V1_SY100_CR25,0,100,100_.jpg'},
        {first: 'Greta', last: 'Johansen', title: 'Cat Wrangler', dept: 'Stunts', pic: 'http://ia.media-imdb.com/images/M/MV5BMTg5OTQ0MjI4Nl5BMl5BanBnXkFtZTcwNTk5MDYyMg@@._V1_SX100_CR0,0,100,100_.jpg'}
    ]
};