import { useState, createContext, useContext } from "react";

// Create the context
const UniversalContext = createContext();

// Custom hook to use the UniversalContext
export const useUniversalContext = () => useContext(UniversalContext);

export const UniversalContextProvider = ({ children }) => {

    const DataAboutTab = {
        "instagram downloader": {
            "heading": "DOWNLOADER FOR INSTAGRAM — SAVE A VIDEO, IGTV, PHOTO & STORY FROM THE APP",
            "description": "This universal Instagram downloader is created just for getting the best high-quality content from Instagram in seconds. The magic of this service is in its simplicity and the quality of downloaded material.",
            "logo": 'ri-download-2-fill',

            'DataAboutSubTab': {
                "photo": {
                    "logo": "ri-camera-line"
                },
                "video": {
                    "logo": "ri-video-on-line"
                },
                "profile": {
                    "logo": "ri-user-5-line"
                },
                "stories": {
                    "logo": "ri-camera-line"
                },
                "reels": {
                    "logo": "ri-film-line"
                },
                "dp": {
                    "logo": "ri-map-pin-user-line"
                },
            }
        },
        "hashtag generator": {
            "heading": "HASHTAG GENERATOR FOR INSTAGRAM",
            "description": `Do you still think Instagram hashtags are a walkover? Well, you may be treading a tightrope. Before you go for it, make sure everything is in balance. Creative, yet unpopular hashtags aren’t worth the effort. Poetic strains there give way to the relevant wording. With an AI-based Instagram hashtag generator tool at hand, you will always be safe that you have chosen the right route. The feature we offer analyzes your photos, keywords, or links and generates hashtags for social media automatically. So you both take a shortcut and get great results.`,
            "logo": 'ri-hashtag',
            'DataAboutSubTab': ""
        }
    }


    const [ActiveTab, setActiveTab] = useState("instagram downloader");

    const handleActiveTab = (item) => {
        setActiveTab(item.toLowerCase());
    };

    const [ActiveSubtab, setActiveSubtab] = useState("photo");
    const handleActiveSubtab = (item) => {
        setActiveSubtab(item.toLowerCase());
    };

    const values = {
        ActiveTab,
        setActiveTab,
        handleActiveTab,
        DataAboutTab,
        ActiveSubtab, setActiveSubtab, handleActiveSubtab
    };

    return (
        <UniversalContext.Provider value={values}>
            {children}
        </UniversalContext.Provider>
    );
};
