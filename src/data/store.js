import { reactive } from "vue";

const iMieiDati = reactive({
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