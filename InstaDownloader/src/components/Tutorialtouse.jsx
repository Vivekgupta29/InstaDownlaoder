import React from 'react';
import Copy_Insta_link from '../assets/Copy_Insta_link.webp'; // Check the path
import Paste_Insta_link from '../assets/Paste_link.webp'; // Check the path

function Tutorialtouse() {
    return (
        <>

            <div className="bg-white py-[50px]">
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='leftside w-full lg:w-1/2 p-4'>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat">
                            HOW TO USE DOWNLOADER FOR INSTAGRAM
                        </h2>
                        <p className="text-lg text-gray-600 mt-10">
                            The one method works for all the content you want to download from Instagram with this tool:
                        </p>
                        <ol className="list-decimal list-inside mt-5 text-gray-600" >
                            <li>Copy the link to the content</li>
                            <li>Paste it into the box</li>
                            <li>Click the download button</li>
                            <li>Choose a folder to save the content to</li>
                        </ol>
                    </div>
                    <div className='rightside w-full lg:w-1/2 p-4 flex justify-center'>
                        <img src={Copy_Insta_link} alt="Copy Instagram link tutorial" className='h-auto w-[50vw]' />
                    </div>
                </div>
            </div>

            <div className="bg-white py-[50px]">
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='leftside w-full lg:w-1/2 p-4 flex justify-center'>
                        <img src={Paste_Insta_link} alt="Copy Instagram link tutorial" className='h-full w-[50vw]' />
                    </div>
                    <div className='rightside w-full lg:w-1/2 p-4'>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat">
                            Only for public accounts
                        </h2>
                        <p className="text-lg text-gray-600 mt-10">
                            The only thing that we need to mention – this tool couldn’t be named an Instagram private video downloader. All links to the content you want to save need to lead to a public Instagram profile content.
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-white pt-[50px]">
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='rightside w-full p-4'>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat text-center">
                            REASONS TO USE THE DOWNLOADER FOR INSTAGRAM
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            Most of our users like to use this tool daily because they want to save the content in the original quality. That same quality that the content has been uploaded to Instagram. We keep the quality high. Our users save any content right on their device in the original quality for many reasons:
                        </p>
                    </div>

                </div>
            </div>

            <div className="bg-white">
                <div className='flex flex-col lg:flex-row'>

                    <div className='rightside w-full lg:w-1/2 p-4'>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            To reuse the content for private goals
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            Collect videos that inspire and give you a wider view of reality. Save videos of your favorite coaches, psychologies, fitness trainers. Keep all content from one event from all your friends without asking them to send it to you directly. Just save all videos from the wedding from the Instagram app. You can also save all photos from any conference, meeting, celebration, etc.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            For analyzing competitors
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            Some of our users love to download their competitor’s content. They use this ability to see exactly what they are doing with their photos and to reveal the secrets of video editing. This is amazing for things like giveaways or contest posts. You can keep this really useful content that can be a great push for your own marketing strategy.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            The Downloader for Instagram for any browser
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            You can use any tool and browsers like ChromeChrome, SafariSafari, OperaOpera, etc. to save the content from social media with this tool.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            No watermark
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            You can simply paste into the box the link that leads to the content — like IGTV, Instagram story, Instagram post, GIF — or any type of content you need to save on your device. And voilà — you have it right on your device. The Instagram downloader is without a watermark, subscription, or anything that could create a mess in this simple process of flawless downloading from Instagram.
                        </p>
                    </div>


                    <div className='rightside w-full lg:w-1/2 p-4'>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            For professional usage
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            All the content you’re downloading from Instagram can be reused in various professional ways: as professional inspiration, or even for commercial goals, for having a bunch of user-generated content on hand. Use the content for deep business analysis or any professional reason that can come into your entrepreneur’s mind.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            The Downloader for Instagram is fast
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            The downloading process starts right after you paste a link to the content and click the Download button.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            Try for free
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            It is an absolutely free-of-charge tool. We don’t know how long it will stay free — as it becomes really popular among users we will need more and more servers to hold all this flow of downloads. But for now it is free, and we are happy to offer it to you.
                        </p>
                        <h2 className="text-3xl font-bold mb-4 font-montserrat mt-5">
                            It is secure & anonymous - you don't need to log in
                        </h2>
                        <p className="text-lg text-gray-600 mt-5">
                            No one will know that you’re saving the content from any public IG profile.
                        </p>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Tutorialtouse;
