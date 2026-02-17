import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title = "Hamza Latif - AI Product Manager & Engineer",
    description = "Detailed portfolio of Hamza Latif, specializing in AI Product Management, Machine Learning, and Strategic Product Execution.",
    image = "/assets/images/hero/hero_image_1.jpeg",
    url = "https://hamzalatif.com",
    type = "website"
}: SEOProps) {
    const siteTitle = title === "Hamza Latif - AI Product Manager & Engineer" ? title : `${title} | Hamza Latif`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
