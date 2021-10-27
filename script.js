let messages = {
    worship: [
        "Psalm 46:10 - Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.",
        "Psalm 9:1 - I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works.",
        "Psalm 18:3 - I will call upon the LORD, who is worthy to be praised: so shall I be saved from mine enemies.",
        "Isaiah 25:1 - O Lord, thou art my God; I will exalt thee, I will praise thy name; for thou hast done wonderful things; thy counsels of old are faithfulness and truth.",
        "Psalms 95:6 - O come, let us worship and bow down: let us kneel before the LORD our maker.",
        "Hebrews 13:15 - By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.",
        "Psalms 29:2 - Give unto the LORD the glory due unto his name; worship the LORD in the beauty of holiness.",
    ],
    do: [
        "Matthew 5:44 - But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.",
        "Matthew 7:12 - Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.",
        "Ephesians 4:32 - And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.",
        "Romans 12:2 - And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.",
        "1 Thessalonians 5:17 - Pray without ceasing.",
        "Exodus 20:8 - Remember the Sabbath day, to keep it holy.",
        "1 John 2:6 - He that saith he abideth in him ought himself also so to walk, even as he walked.",
    ],
    memorize: [
        "1 John 1:9 - If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
        "James 4:8 - Draw nigh unto God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.",
        "Psalm 34:18 - The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
        "Philippians 4:19 - But my God shall supply all your need according to his riches in glory by Christ Jesus.",
        "Psalms 37:4 - Delight thyself also in the LORD; and he shall give thee the desires of thine heart.",
        "Romans 8:28 - And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
        "Psalm 23:1 - The LORD is my shepherd, I shall not want.",
    ],
};

function randomMessage() {

    let p = document.querySelector("p");

    p.innerHTML = `<strong>Today's Worship:</strong> ${messages.worship[Math.floor(Math.random() * 7)]}<br><br><strong>Today's Practice:</strong> ${messages.do[Math.floor(Math.random() * 7)]}<br><br><strong>Today's Promise:</strong> ${messages.memorize[Math.floor(Math.random() * 7)]}`;
}
