let messages = {
    worship: ["Psalm 46:10 Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.", 
    "Psalm 9:1 I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works.", 
    "Psalm 18:3 I will call upon the LORD, who is worthy to be praised: so shall I be saved from mine enemies."],
    do: ["Matthew 5:44 But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.", 
    "Matthew 7:12 Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.", 
    "Ephesians 4:32 And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you."],
    memorize: ["1 John 1:9 If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", 
    "James 4:8 Draw nigh unto God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.", 
    "Psalm 34:18 The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit."]
}

function randomMessage() {
    let randNum1 = Math.floor(Math.random() * 3)
    let randNum2 = Math.floor(Math.random() * 3)
    let randNum3 = Math.floor(Math.random() * 3)
    console.log(`\nWorship: ${messages.worship[randNum1]}\n\nDo: ${messages.do[randNum2]}\n\nMemorize: ${messages.memorize[randNum3]}\n`)
}

randomMessage()
