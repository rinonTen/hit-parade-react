const songData = [
    {
        id: 1,
        title: "The Time Has Come",
        artist: "Hillsong UNITED",
        upvotes: 22,
        downvotes: 12,
        style: "Slow",
        isFavorited: false,
        price: 22000,
        alreadyBought: false,
        lyrics: `
            Found love beyond all reason
            You gave Your life, Your all for me
            And called me Yours foreverCaught in the mercy fallout
            I found hope, found life
            Found all I need
            'Cause You're all I needThe time has come
            To stand for all we believe in
            So I, for one, am gonna
            Give my praise to YouToday, today, it's all or nothing
            All the way, the praise goes out to You
            Yeah, all the praise goes out to You
        `,
    },
    {
        id: 2,
        title: "Praise You In This Storm",
        artist: "Casting Crowns",
        upvotes: 110,
        downvotes: 110,
        style: "Pop",
        isFavorited: false,
        price: 12000,
        alreadyBought: false,
        lyrics: `
        I was sure by now
        God, you would have reached down
        And wiped our tears away
        Stepped in and saved the day
        But once again, I say "Amen," and it's still raining
        
        As the thunder rolls
        I barely hear your whisper through the rain
        "I'm with you"
        And as your mercy falls
        I raise my hands and praise the God who gives
        And takes away
        
        And I'll praise you in this storm
        And I will lift my hands
        For you are who you are
        No matter where I am
        
        And every tear I've cried
        You hold in your hand
        You never left my side
        And though my heart is torn
        I will praise you in this storm
        
        I remember when
        I stumbled in the wind
        You heard my cry to you
        And raised me up again
        My strength is almost gone
        How can I carry on
        If I can't find you
        
        But as the thunder rolls
        I barely hear your whisper through the rain
        "I'm with you"
        And as your mercy falls
        I raise my hands and praise the God who gives
        And takes away
        
        And I'll praise you in this storm
        And I will lift my hands
        For you are who you are
        No matter where I am
        
        And every tear I've cried
        You hold in your hand
        You never left my side
        And though my heart is torn
        I will praise you in this storm`,
    },
    {
        id: 3,
        title: "your fellow",
        artist: "for KING & COUNTRY.",
        upvotes: 30,
        downvotes: 40,
        style: "Country",
        isFavorited: false,
        price: 32000,
        alreadyBought: false,
        lyrics: `
        Winter has come back again
        Feels like the season won't end
        My faith is tired tonight
        And I won't try to pretend
        I've got it all figured out
        That I don't have any doubts
        I've got a busted heart
        I need You now
        Yeah I need You now
        
        Hold on to me
        Hold on to me
        Don't let me lose my way
        Hold on to me
        
        I am the wandering son
        Enough is never enough
        I keep chasing the wind
        Instead of chasing Your love
        I'm screaming out Your name
        Don't let me fall on my face
        I've got a busted heart
        I'm in need of a change
        Yeah, I'm desperate for grace`,
    },
    {
        id: 4,
        title: "Never Let Me Down",
        artist: "Kanye West",
        upvotes: 60,
        downvotes: 30,
        style: "Kilalaka",
        isFavorited: false,
        price: 22800,
        alreadyBought: false,
        lyrics: `
        When it comes to being true, at least true to me
        One thing I've found, one thing I found
        Oh no, you'll never let me down
        Get up, I get down, get up, I get down
        Get up, I get down, get up, I get down
        Get up, I get down, get up, I get down
        
        Jay-Z:
        Yo, first I snatched the streets, then I snatched the charts
        First I had their ear, now I have their heart
        Rappers came and went, I've been here from the start
        I seen them put it together, watched them take it apart
        Seen the Rovers roll up with ribbons
        I seen them re-po'd, re-sold, then re-driven
        So when I reload, he holds number one position
        When you hot, I'm hot
        And when your feet cold, mines is sizzling
        It's plain to see, niggas can't fuck with me
        'Cause I'ma be that nigga for life
        This is not an image, this is God-given
        This is hard-livin', mixed with Cristal sippin'
        It's the most consistent, Hov
        Give you the most hits you can fit inside a whole disc and
        Nigga I'm home on these charts, y'all niggas visitin'
        It's Hov tradition, Jeff Gordon of rap
        I'm back to claim pole position, holla at ya boy`,
    },
    {
        id: 5,
        title: "Safidy",
        artist: "Nina's",
        upvotes: 220,
        downvotes: 110,
        style: "Tsapiky",
        isFavorited: false,
        price: 25000,
        alreadyBought: false,
        lyrics:`
        Tsy mampino fa dia tampoka teo Toa manonofy aho nefa indrisy fa lasa tokoa Ho any amin'ny mandrakizay? 
        `,
    },
    {
        id: 6,
        title: "Beatiful In White",
        artist: "Westlife",
        upvotes: 220,
        downvotes: 20,
        style: "Slow",
        isFavorited: false,
        price: 24400,
        alreadyBought: false,
        lyrics: `
        Not sure if you know this
        But when we first met
        I got so nervous
        I couldn't speak
        In that very moment I found the one and
        My life had found its missing pieceSo as long as I live I'll love you
        Will have and hold you
        You look so beautiful in white
        And from now to my very last breath
        This day I'll cherish
        You look so beautiful in white
        Tonight
        `,
    },
    {
        id: 7,
        title: "Praise You In This Storm",
        artist: "Casting Crowns",
        upvotes: 0,
        downvotes: 0,
        style: "Pop",
        isFavorited: false,
        price: 12000,
        alreadyBought: false,
        lyrics: `
        I was sure by now
        God, you would have reached down
        And wiped our tears away
        Stepped in and saved the day
        But once again, I say "Amen," and it's still raining
        
        As the thunder rolls
        I barely hear your whisper through the rain
        "I'm with you"
        And as your mercy falls
        I raise my hands and praise the God who gives
        And takes away
        
        And I'll praise you in this storm
        And I will lift my hands
        For you are who you are
        No matter where I am
        
        And every tear I've cried
        You hold in your hand
        You never left my side
        And though my heart is torn
        I will praise you in this storm
        
        I remember when
        I stumbled in the wind
        You heard my cry to you
        And raised me up again
        My strength is almost gone
        How can I carry on
        If I can't find you
        
        But as the thunder rolls
        I barely hear your whisper through the rain
        "I'm with you"
        And as your mercy falls
        I raise my hands and praise the God who gives
        And takes away
        
        And I'll praise you in this storm
        And I will lift my hands
        For you are who you are
        No matter where I am
        
        And every tear I've cried
        You hold in your hand
        You never left my side
        And though my heart is torn
        I will praise you in this storm`,
    },
    {
        id: 8,
        title: "your fellow",
        artist: "for KING & COUNTRY.",
        upvotes: 0,
        downvotes: 0,
        style: "Country",
        isFavorited: false,
        price: 32000,
        alreadyBought: false,
        lyrics: `
        Winter has come back again
        Feels like the season won't end
        My faith is tired tonight
        And I won't try to pretend
        I've got it all figured out
        That I don't have any doubts
        I've got a busted heart
        I need You now
        Yeah I need You now
        
        Hold on to me
        Hold on to me
        Don't let me lose my way
        Hold on to me
        
        I am the wandering son
        Enough is never enough
        I keep chasing the wind
        Instead of chasing Your love
        I'm screaming out Your name
        Don't let me fall on my face
        I've got a busted heart
        I'm in need of a change
        Yeah, I'm desperate for grace`,
    },
    {
        id: 9,
        title: "Never Let Me Down",
        artist: "Kanye West",
        upvotes: 0,
        downvotes: 0,
        style: "Kilalaka",
        isFavorited: false,
        price: 22800,
        alreadyBought: false,
        lyrics: `
        When it comes to being true, at least true to me
        One thing I've found, one thing I found
        Oh no, you'll never let me down
        Get up, I get down, get up, I get down
        Get up, I get down, get up, I get down
        Get up, I get down, get up, I get down
        
        Jay-Z:
        Yo, first I snatched the streets, then I snatched the charts
        First I had their ear, now I have their heart
        Rappers came and went, I've been here from the start
        I seen them put it together, watched them take it apart
        Seen the Rovers roll up with ribbons
        I seen them re-po'd, re-sold, then re-driven
        So when I reload, he holds number one position
        When you hot, I'm hot
        And when your feet cold, mines is sizzling
        It's plain to see, niggas can't fuck with me
        'Cause I'ma be that nigga for life
        This is not an image, this is God-given
        This is hard-livin', mixed with Cristal sippin'
        It's the most consistent, Hov
        Give you the most hits you can fit inside a whole disc and
        Nigga I'm home on these charts, y'all niggas visitin'
        It's Hov tradition, Jeff Gordon of rap
        I'm back to claim pole position, holla at ya boy`,
    },
    {
        id: 10,
        title: "Safidy",
        artist: "Nina's",
        upvotes: 0,
        downvotes: 0,
        style: "Tsapiky",
        isFavorited: false,
        price: 25000,
        alreadyBought: false,
        lyrics:`
        Tsy mampino fa dia tampoka teo Toa manonofy aho nefa indrisy fa lasa tokoa Ho any amin'ny mandrakizay? 
        `,
    },
]

export default songData;