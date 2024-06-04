import { reactive } from "vue";

const iMieiDati = reactive({
    films: [
        {
            title: `Hellboy`,
            genre: [`Action`, `Drama` ],
            img_rec: `1-rec.jpg`,
            img_sq: `1-sq.jpg`,
            release: `8/10/2004`,
            category: `coming soon`,
            views: `100`,
            video: `https://www.youtube.com/embed/kA9vtXbbhVs?si=o_trfc2FRwv2nmfr`,
            rating: `6`,
            duration: `2h 2m`
        },

        {
            title: `The Last of Us`,
            genre: [`Survival`, `Drama`, `Horror` ],
            img_rec: `2-rec.jpg`,
            img_sq: `2-sq.jpg`,
            release: `15/1/2023`,
            category: `tv series`,
            views: `200`,
            video: `https://www.youtube.com/embed/uLtkt8BonwM?si=WyPLiN9sH5__6bgm`,
            rating: `8`,
            duration: `1h 30m`
        },

        {
            title: `Balto`,
            genre: [`Cartoon`, `Kids`, `Animals` ],
            img_rec: `3-rec.jpg`,
            img_sq: `3-sq.jpg`,
            release: `22/12/1995`,
            category: `top rating`,
            views: `300`,
            video: `https://www.youtube.com/embed/HJwvbmRXym4?si=ejLvHZr355VUkdcN`,
            rating: `7`,
            duration: `1h 18m`
        },

        {
            title: `American Sniper`,
            genre: [`Action`, `Drama`, `War` ],
            img_rec: `4-rec.jpg`,
            img_sq: `4-sq.jpg`,
            release: `1/1/2015`,
            category: `latest movie`,
            views: `400`,
            video: `https://www.youtube.com/embed/99k3u9ay1gs?si=EY22hjKIbLT5IPvB`,
            rating: `7`,
            duration: `2h 12m`
        },

        {
            title: `Skater Girl`,
            genre: [`Sport`, `Comedy` ],
            img_rec: `5-rec.jpg`,
            img_sq: `5-sq.jpg`,
            release: `11/6/2021`,
            category: `coming soon`,
            views: `500`,
            video: `https://www.youtube.com/embed/k5Fn99wmFCQ?si=zEDQ8qM1T8Ypfzp_`,
            rating: `5`,
            duration: `1h 48m`
        },

        {
            title: `Kill Bill`,
            genre: [`Action`, `Splatter` ],
            img_rec: `6-rec.jpg`,
            img_sq: `6-sq.jpg`,
            release: `24/10/2003`,
            category: `top rating`,
            views: `600`,
            video: `https://www.youtube.com/embed/7kSuas6mRpk?si=8kZhq9V25Ub9pL60`,
            rating: `8`,
            duration: `1h 51m`
        },

        {
            title: `Interstellar`,
            genre: [`Sci-fi`, `Adventure` ],
            img_rec: `7-rec.jpg`,
            img_sq: `7-sq.jpg`,
            release: `26/10/2014`,
            category: `top rating`,
            views: `700`,
            video: `https://www.youtube.com/embed/zSWdZVtXT7E?si=NZnpnLdmq385S-px`,
            rating: `9`,
            duration: `2h 49m`
        },

        {
            title: `Omen`,
            genre: [`Horrror`, `Mistery` ],
            img_rec: `8-rec.jpg`,
            img_sq: `8-sq.jpg`,
            release: `6/6/1976`,
            category: `coming soon`,
            views: `800`,
            video: `https://www.youtube.com/embed/sS-sXcx30O4?si=wjFyymamTAiW8qk5`,
            rating: `4`,
            duration: `1h 57m`
        },

        {
            title: `Saw III`,
            genre: [`Horror`, `Splatter`, `Mistery` ],
            img_rec: `9-rec.jpg`,
            img_sq: `9-sq.jpg`,
            release: `27/10/2006`,
            category: `latest movie`,
            views: `900`,
            video: `https://www.youtube.com/embed/76K0UGvkqYU?si=dpkb9njLrRo08W-n`,
            rating: `5`,
            duration: `1h 48m`
        }
    ],

    news: [
        {
            title: `Actor The Concept Movie High Concept Theory See The Post`,
            date: `14/04/2024`,
            img: `news-1.jpg`
        },

        {
            title: `Consequat Nam Lectus Nibh Aucibus It Has Turpis`,
            date: `14/04/2024`,
            img: `news-2.jpg`
        },

        {
            title: `Nam Lectus Nibh Consequat Aucibus Turpis It Has`,
            date: `14/04/2024`,
            img: `news-3.jpg`
        },

        {
            title: `Bring Me The Head Of Alfredo Garcia Best Movie In`,
            date: `14/04/2024`,
            img: `news-4.jpg`
        },

        {
            title: `Pump Action Interaction English Action Movie`,
            date: `14/04/2024`,
            img: `news-5.jpg`
        },
    ],

    footerLinks: [
        {
            titolo: "About Us",
            description: "Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus seds.",
        },
        {
            titolo: "Movie Category",
            links: [
                "English New Movie",
                "Hindi All Movie",
                "Latest Tamil Movie",
                "New Top Rating Movie",
                "Hornn New Movie",
                "Animation New Movie",
            ]
        },
        {
            titolo: "Information",
            links: [
                "Youtube Video Post",
                "Actor Information",
                "New Promotion",
                "Latest Movie In English",
                "Latest Film Product",
                "Video New Video"
            ]
        },
        {
            titolo: "Recent Posts",
            recent: [
                {
                    name: "Actor The Concept Movie High Concept Theory see",
                    date: "April 14, 2020",
                    img_link: "../assets/img/9-rec.jpg",
                },
                {
                    name: "consequat Nam lectus nibh aucibus It has turpis",
                    date: "April 14, 2020",
                    img_link: "",
                },
                {
                    name: "Nam lectus nibh consequat aucibus turpis",
                    date: "April 14, 2020",
                    img_link: "",
                },
            ]
        }
    ]
});

export default iMieiDati;