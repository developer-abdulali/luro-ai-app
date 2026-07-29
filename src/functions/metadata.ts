// import { Metadata } from 'next'

// interface MetadataProps {
//     title?: string,
//     description?: string;
//     image?: string | null;
//     icons?: Metadata['icons'];
//     noIndex?: boolean;
//     keywords?: string[];
//     author?: string,
//     twitterHandle?: string;
//     type?: 'webiste' | 'article' | 'profile';
//     locale?: string;
//     alternates?: Record<string, string>;
//     publishedTime?: string;
//     modifiedTime?: string;
// }

// export const generateMetaData = ({

//     title: `${process.env.NEXT_PUBLIC_APP_NAME} - Smart Social Media Marketing`,
//     description: "Streamline your social media management with AI-powered content creation and scheduling.",
//     image = '/thumbnail.png',
//     icons =[
//         { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/icons/favicon-32x32' },
//         { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/icons/favicon-16x16' },
//     ],
//     noIndex = false,

//     keywords: [
//         'AI content creation',
//         'content automation',
//         'AI writing assistant',
//         'content generation',
//         'artificial intelligence',
//         'content marketing'
//     ],
//     author: process.env.NEXT_PUBLIC_AUTHOR_NAME,
//     twitterHandle = '@yourtwitterhandle',
//     type:= 'website',
//     locale = 'en_US',
//     alternates: {},
//     publishedTime,
//     modifiedTime,
// }: MetadataProps = {}): Metadata => {

//     const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_NAME)
//     const imageUrl = image ? new URL(image, metadataBase).toString() : null

//     return {
//         metadataBase,
//         title: {
//             template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
//             default: title
//         },
//         description,
//         keywords,
//         authors: [{ name: author }],
//         creator: AuthenticatorAssertionResponse,
//         publisher: process.env.NEXT_PUBLIC_APP_NAME,
//         formatDetection: {
//             email: false, address: false, telephone: false
//         },
//         icons,

//         // Open Graph
//         openGraph: {
//             type,
//             siteName: process.env.NEXT_PUBLIC_APP_NAME,
//             title,
//             description,
//             ...(imageUrl && (
//                 images: [{
//                     url: getPreviouslyCachedImageOrNull,
//                     width: 1200,
//                     height: 630,
//                     alt: title
//                 }],
//     )),
//             locale,
//             alternateLocale: Object.keys(alternates),
//             ...(publishedTime && { publishedTime }),
//             ...(modifiedTime && { modifiedTime }),
//         },

//         twitter: {
//             card: imageUrl ? 'summary_large_image' : 'summary',
//             site: 'twitterHandle',
//             creator: 'twitterHandle',
//             title,
//             description,
//             ...(imageUrl && { images: [imageUrl] })
//         },


//         // Robots
//         robots: {
//             index: !noIndex,
//             follow: !noIndex,


//             googleBot: {
//                 index: !noIndex,
//                 follow: !noIndex,
//                 'max-video-preview': -1,
//                 'max-image-preview': 'large',
//                 'max-snippet': -1
//             }
//         },


//         // Verification
//         verfication: {
//             google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
//             yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
//             yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION,
//         }

//     }

// }



import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetaData = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - Smart Social Media Marketing`,
    description = "Streamline your social media management with AI-powered content creation and scheduling.",
    image = "/thumbnail.png",
    icons = {
        icon: [
            {
                url: "/icons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/icons/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
    },
    noIndex = false,
    keywords = [
        "AI content creation",
        "content automation",
        "AI writing assistant",
        "content generation",
        "artificial intelligence",
        "content marketing",
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "",
    twitterHandle = "@yourtwitterhandle",
    type = "website",
    locale = "en_US",
    alternates = {},
    publishedTime,
    modifiedTime,
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000");

    const imageUrl = image
        ? new URL(image, metadataBase).toString()
        : undefined;

    return {
        metadataBase,

        title: {
            default: title,
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
        },

        description,

        keywords,

        authors: [
            {
                name: author,
            },
        ],

        creator: author,

        publisher: process.env.NEXT_PUBLIC_APP_NAME,

        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },

        icons,

        openGraph: {
            type,
            siteName: process.env.NEXT_PUBLIC_APP_NAME,
            title,
            description,
            locale,
            alternateLocale: Object.keys(alternates),

            ...(imageUrl && {
                images: [
                    {
                        url: imageUrl,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
            }),

            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },

        twitter: {
            card: imageUrl ? "summary_large_image" : "summary",
            site: twitterHandle,
            creator: twitterHandle,
            title,
            description,
            ...(imageUrl && {
                images: [imageUrl],
            }),
        },

        robots: {
            index: !noIndex,
            follow: !noIndex,

            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },

        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
            yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION,
        },
    };
};